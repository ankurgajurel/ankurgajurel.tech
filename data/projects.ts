export type Project = {
  id: number;
  name: string;
  collabs: string[];
  type: string;
  date: string;
  description?: string;
  content?: string;
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  technologies?: string[];
  images?: {
    src: string;
    alt: string;
  }[];
};

export const projects: Project[] = [
  {
    id: 3,
    name: "webcraft",
    date: "december, 2024",
    collabs: ["sls0n"],
    type: "fullstack",
    content:
      "drag-and-drop website builder tool. users can create websites without coding by dragging components and customizing them.",
    links: {
      demo: "https://webcraft.ankurgajurel.tech/",
    },
    technologies: ["website builder", "collaboration"],
  },
  {
    id: 0,
    name: "resimator's landing page",
    date: "march, 2024",
    collabs: [],
    type: "fullstack",
    description:
      "landing page with strapi cms, graphql, framer motion, and a custom design system",
    content:
      "landing page for a finnish company. built with strapi cms for content management and graphql for data fetching. uses framer motion for animations and a custom design system for consistent styling.",
    links: {
      demo: "https://staging.resimator.fi/",
    },
    technologies: ["strapi", "graphql", "framer motion", "design system"],
  },
  {
    id: 1,
    name: "a5it",
    date: "february, 2024",
    collabs: ["sls0n"],
    type: "fullstack/devops",
    description:
      "e-commerce platform developed in collaboration with silson sapkota",
    content:
      "e-commerce platform for selling products online. built with modern web technologies and deployed with proper devops practices.",
    links: {
      demo: "https://a5it.com/",
    },
    technologies: ["e-commerce", "collaboration"],
  },

  {
    id: 4,
    name: "invey",
    date: "november, 2023",
    collabs: ["shekharkoirala"],
    type: "frontend",
    content:
      "form builder tool for creating surveys and forms. users can drag form elements and customize them for data collection.",
    links: {
      demo: "https://invey.ankurgajurel.tech/formbuilder",
    },
    technologies: ["form builder"],
  },
  {
    id: 5,
    name: "hydra",
    date: "2024",
    collabs: [],
    type: "ui conversion",
    content:
      "simple ui design. optimized for larger screens and desktop workflows.",
    links: {
      demo: "https://hydra.ankurgajurel.com.np/",
    },
    technologies: ["ui design"],
  },
  {
    id: 6,
    name: "utarchadhav",
    date: "september, 2023",
    collabs: ["kirangajurel"],
    type: "fullstack",
    description: "podcast platform",
    content:
      "platform for hosting and streaming podcasts. users can upload audio files and listeners can stream episodes.",
    links: {
      demo: "https://utarchadhav.com",
    },
    technologies: ["podcast"],
  },
  // {
  //   id: 7,
  //   name: "webshop emails",
  //   date: "august, 2023",
  //   collabs: [],
  //   type: "design",
  //   description: "email template design clone",
  //   content:
  //     "email template design tool. users can create and customize email templates for marketing campaigns.",
  //   links: {
  //     demo: "https://webshop-emails.vercel.app/",
  //   },
  //   technologies: ["email design"],
  // },
  {
    id: 8,
    name: "cognistream",
    date: "fullstack",
    collabs: ["shekharkoirala", "geeksambhu", "mgajurel"],
    type: "ai",
    description: "customer interviews with emotional depth analysis",
    content:
      "ai-powered tool for analyzing customer interviews. uses sentiment analysis to understand emotional responses and feedback.",
    technologies: ["ai", "analysis", "wip"],
  },
  {
    id: 9,
    name: "social media scheduler",
    date: "halted",
    collabs: ["sumansid"],
    type: "fullstack",
    links: {
      demo: "https://schedule.video/",
    },
    description:
      "features oauth with tiktok, instagram and linkedin, self-hosted scheduler with express, nextauth, prisma with postgres, stripe, and supabase for storage",
    content:
      "social media scheduling tool. users can connect their social accounts and schedule posts across multiple platforms. includes payment processing and file storage.",
    technologies: [
      "oauth",
      "express",
      "nextauth",
      "prisma",
      "postgres",
      "stripe",
      "supabase",
    ],
  },
];
