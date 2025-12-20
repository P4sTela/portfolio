# Portfolio

シンプルでモダンなポートフォリオサイト。Astro + React + Tailwind CSS で構築。

## Tech Stack

| 技術 | バージョン | 用途 |
|------|-----------|------|
| [Astro](https://astro.build/) | 5.x | フレームワーク |
| [React](https://react.dev/) | 19.x | インタラクティブUI |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | スタイリング |
| [daisyUI](https://daisyui.com/) | 5.x | UIコンポーネント |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | 型安全性 |
| [Cloudflare Workers](https://workers.cloudflare.com/) | - | ホスティング |

## Quick Start

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview

# デプロイ（Cloudflare Workers）
pnpm deploy
```

## Project Structure

```
src/
├── assets/          # 画像アセット
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Portfolio.astro
│   └── works/       # 作品セクション（React）
│       ├── WorksSection.tsx
│       ├── WorkCard.tsx
│       ├── WorkModal.tsx
│       └── ImageCarousel.tsx
├── data/
│   └── works.ts     # 作品データ定義
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro  # トップページ
│   └── about.astro  # Aboutページ
└── styles/
    └── global.css
```

## Features

- **Astro Islands**: 静的コンテンツと動的コンポーネントの最適なハイブリッド
- **レスポンシブデザイン**: モバイルファースト対応
- **作品モーダル**: カード + モーダルで作品詳細を表示
- **画像カルーセル**: 複数スクリーンショットのスライドショー
- **Cloudflare Workers**: エッジでの高速配信

## Adding Works

`src/data/works.ts` を編集して作品を追加:

```typescript
export const works: Work[] = [
  {
    id: "project-id",
    title: "プロジェクト名",
    description: "短い説明",
    longDescription: "詳細説明",
    thumbnail: "/images/works/thumbnail.png",
    images: ["/images/works/screenshot1.png"],
    techStack: ["Astro", "React", "TypeScript"],
    links: {
      live: "https://example.com",
      github: "https://github.com/username/repo",
    },
  },
];
```

## Development

### 前提条件

- Node.js 18+
- pnpm

### 環境変数

デプロイには Cloudflare アカウントと Wrangler の設定が必要です。

## License

MIT
