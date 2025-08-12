import { redirect } from "next/navigation";
import Video from "./video";

export interface Media {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
}

export default async function Gallery() {
  if (!process.env.GALLERY_JSON_ENDPOINT) redirect("/");

  const res = await fetch(process.env.GALLERY_JSON_ENDPOINT, {
    next: {
      revalidate: 60,
    },
  });

  const media: Media[] = await res.json();

  return (
    <section className="container p-4 my-10 md:my-16 lg:my-20">
      <h2 className="text-6xl mb-8">gallery</h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {media.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid overflow-hidden bg-gray-100 group cursor-pointer relative"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.caption}
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <Video item={item} />
            )}
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
