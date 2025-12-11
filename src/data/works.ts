export type Work = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  techStack: string[];
  links: {
    link?: string;
    github?: string;
  };
};

export const works: Work[] = [
  {
    id: "project-1",
    title: "Portfolio Site",
    description: "シンプルでモダンなポートフォリオサイト",
    longDescription:
      "Astro + React + Tailwind CSS + daisyUIを使用して構築したポートフォリオサイトです。静的サイト生成により高速なパフォーマンスを実現しています。",
    thumbnail: "/images/works/portfolio.png",
    techStack: ["Astro", "React", "TypeScript", "Tailwind CSS", "daisyUI"],
    links: {
      link: "https://p4stela.dev",
      github: "https://github.com/P4sTela/portfolio",
    },
  },
  {
    id: "project-2",
    title: "しれふぁら！ 公式Webサイト",
    description: "同人サークル「しれふぁら！」の公式Webサイト",
    longDescription:
      "Next.js + React + TypeScript + Supabase + Drizzleを使用して構築したCMS機能付きWebサイトです。ユーザーが簡単にコンテンツを投稿できるように、認証機能と投稿機能を実装しています。",
    thumbnail: "/images/works/sirefala.jpeg",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Drizzle"],
    links: {
      link: "https://www.sirefala.com/",
    },
  },
];
