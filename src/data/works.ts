import portfolio from "../assets/portfolio.png";
import sirefala from "../assets/sirefala.jpeg";
import live from "../assets/0CC714AD-016C-4E03-B8C8-37D3DD3F51D5_1_105_c.jpeg";
import live2 from "../assets/8270D0D5-0097-43C6-99A2-03E60BA41DFD_1_102_o.jpeg";

export type Work = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: ImageMetadata | null;
  images: ImageMetadata[];
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
    description: "このサイト",
    longDescription:
      "Astro + React + Tailwind CSS + daisyUIを使用して構築したポートフォリオサイトです。静的サイト生成により高速なパフォーマンスを実現しています。",
    thumbnail: portfolio,
    images: [portfolio],
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
    thumbnail: sirefala,
    images: [sirefala],
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Drizzle"],
    links: {
      link: "https://www.sirefala.com/",
    },
  },
  {
    id: "project-3",
    title: "ライブシステム構築",
    description:
      "バーチャルライブ研究会が開催するライブ「MIKUEC」のライブシステム構築",
    longDescription:
      "電気通信大学バーチャルライブ研究会が主催するライブ「MIKUEC」のライブシステムを構築しました。4枚の動画と音声を同期して6台のプロジェクターに投影するライブシステムを、TouchdesignerとMaddmapperでネットワークの知識を活かして制作しました。講堂の壁に映像を投影するなどのアイデアでクリエイターの表現の幅を広げられたのが楽しかったです。",
    thumbnail: live,
    images: [live, live2],
    techStack: ["Python", "TouchDesigner", "MadMapper", "OSC"],
    links: {
      link: "https://www.mikuec.com/",
    },
  },
  {
    id: "project-4",
    title: "映像制作",
    description:
      "趣味レベルでLive2DやC4Dを使用した映像制作をたまにやっています",
    longDescription:
      "サークル活動や親しい友達との創作活動をたまに行っています。",
    thumbnail: null,
    images: [],
    techStack: ["After Effects", "Live2D", "C4D"],
    links: {
      link: "",
    },
  },
];
