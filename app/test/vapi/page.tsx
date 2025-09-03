"use client";

import { useState, useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";

export default function VapiTestPage() {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;

    if (!publicKey) {
      setError(
        "VAPI public key not found. Please set NEXT_PUBLIC_VAPI_PUBLIC_KEY in your environment variables."
      );
      return;
    }

    // Initialize Vapi
    const vapiInstance = new Vapi(publicKey);
    vapiRef.current = vapiInstance;
    setVapi(vapiInstance);

    // Set up event listeners
    vapiInstance.on("call-start", () => {
      console.log("Call started");
      setIsCallActive(true);
      setIsLoading(false);
      setError(null);
    });

    vapiInstance.on("call-end", () => {
      console.log("Call ended");
      setIsCallActive(false);
      setIsLoading(false);
    });

    vapiInstance.on("volume-level", (level: number) => {
      setVolume(level);
    });

    vapiInstance.on("error", (error: { message: string }) => {
      console.error("VAPI Error:", error);
      setError(error.message || "An error occurred");
      setIsLoading(false);
      setIsCallActive(false);
    });

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  const startCall = async () => {
    if (!vapi) return;

    setIsLoading(true);
    setError(null);

    try {
      // Use your assistant ID from the config
      await vapi.start("80986202-9e10-4313-a71a-49daefe66770");
    } catch (err: unknown) {
      console.error("Failed to start call:", err);
      setError((err as { message: string }).message || "Failed to start call");
      setIsLoading(false);
    }
  };

  const endCall = () => {
    if (vapi && isCallActive) {
      vapi.stop();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Call Controls
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Status:
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isCallActive
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {isLoading
                    ? "Connecting..."
                    : isCallActive
                    ? "Active"
                    : "Inactive"}
                </span>
              </div>

              {isCallActive && volume > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Volume:
                  </span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-100"
                      style={{ width: `${Math.min(volume * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                {!isCallActive ? (
                  <button
                    onClick={startCall}
                    disabled={isLoading || !vapi}
                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Starting..." : "Start Call"}
                  </button>
                ) : (
                  <button
                    onClick={endCall}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    End Call
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
