# Portfolio Site 設計書

## 概要

シンプルでモダンな1ページ構成のポートフォリオサイト。

## 技術スタック

| 技術 | 用途 |
|------|------|
| Astro | フレームワーク（静的サイト生成） |
| React | インタラクティブコンポーネント |
| Tailwind CSS | スタイリング |
| daisyUI | UIコンポーネント |
| TypeScript | 型安全性 |

## ページ構成

```
┌─────────────────────────────────┐
│           Header/Nav            │  ← 固定ナビゲーション（オプション）
├─────────────────────────────────┤
│                                 │
│            Hero                 │  ← 名前・肩書き・一言
│                                 │
├─────────────────────────────────┤
│                                 │
│            About                │  ← 自己紹介
│                                 │
├─────────────────────────────────┤
│                                 │
│            Works                │  ← 作品一覧（カードグリッド）
│                                 │
├─────────────────────────────────┤
│            Footer               │  ← SNSリンク・コンタクト
└─────────────────────────────────┘
```

---

## セクション詳細

### 1. Hero セクション

**目的**: 訪問者に対して第一印象を与える

**表示内容**:
- 名前
- 肩書き（例: Web Developer / Student）
- 一言キャッチコピー（オプション）
- SNSアイコンリンク（GitHub, X/Twitter など）

**daisyUIコンポーネント**: `hero`

---

### 2. About セクション

**目的**: 自己紹介

**表示内容**:
- 自己紹介文（2〜3段落程度）
- スキルセット（オプション）
- プロフィール画像（オプション）

**daisyUIコンポーネント**: 特になし（Tailwindで組む）

---

### 3. Works セクション

**目的**: 制作物の紹介

**表示形式**: カードグリッド + モーダル詳細表示

#### カード（一覧表示）

```
┌─────────────────┐
│                 │
│  📷 サムネイル   │
│                 │
├─────────────────┤
│  プロジェクト名  │
│  短い説明（1行） │
└─────────────────┘
```

**daisyUIコンポーネント**: `card`

**表示内容**:
- サムネイル画像（スクリーンショット）
- プロジェクト名
- 短い説明（1行）

#### モーダル（詳細表示）

```
┌─────────────────────────────────────┐
│                              [✕]    │
├─────────────────────────────────────┤
│                                     │
│       📷 大きめスクリーンショット      │
│                                     │
├─────────────────────────────────────┤
│  プロジェクト名                       │
│                                     │
│  説明文                              │
│  （複数行OK、プロジェクトの詳細）      │
│                                     │
│  Tech Stack:                        │
│  ┌──────┐ ┌───────┐ ┌────┐         │
│  │ Astro │ │ React │ │ TS │  ...   │
│  └──────┘ └───────┘ └────┘         │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │ 🔗 Live  │  │ 📂 GitHub │        │
│  └──────────┘  └──────────┘        │
└─────────────────────────────────────┘
```

**daisyUIコンポーネント**: `modal`, `badge`, `btn`

**表示内容**:
- 大きめのスクリーンショット
- プロジェクト名
- 詳細説明文
- Tech Stack（バッジ形式）
- リンクボタン
  - Live Demo（デプロイ先）
  - GitHub（ソースコード）

---

### 4. Footer セクション

**目的**: 連絡先・SNSリンク

**表示内容**:
- コピーライト
- SNSリンク（アイコン）
- メールアドレス（オプション）

**daisyUIコンポーネント**: `footer`

---

## ディレクトリ構成

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── works/           # 作品のスクリーンショット
│           ├── project1.png
│           └── project2.png
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Footer.astro
│   │   └── works/
│   │       ├── WorksSection.tsx    # React（メインコンテナ）
│   │       ├── WorkCard.tsx        # React（カード）
│   │       └── WorkModal.tsx       # React（モーダル）
│   ├── data/
│   │   └── works.ts                # 作品データ定義
│   ├── layouts/
│   │   └── Layout.astro            # 共通レイアウト
│   ├── pages/
│   │   └── index.astro             # メインページ
│   └── styles/
│       └── global.css              # グローバルスタイル
├── astro.config.mjs
├── tailwind.config.mjs             # daisyUIプラグイン設定
├── tsconfig.json
└── package.json
```

---

## データ構造

### 作品データ (`src/data/works.ts`)

```typescript
export type Work = {
  id: string;
  title: string;
  description: string;        // 短い説明（カード用）
  longDescription: string;    // 詳細説明（モーダル用）
  thumbnail: string;          // サムネイル画像パス
  techStack: string[];        // 使用技術
  links: {
    live?: string;            // デプロイURL
    github?: string;          // GitHubリポジトリURL
  };
};

export const works: Work[] = [
  {
    id: "project-1",
    title: "プロジェクト名",
    description: "短い説明文",
    longDescription: "詳細な説明文。このプロジェクトでは...",
    thumbnail: "/images/works/project1.png",
    techStack: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://example.com",
      github: "https://github.com/P4sTela/project",
    },
  },
  // ...
];
```

---

## daisyUI テーマ設定

**推奨テーマ**: `dark`, `night`, `business`（モダンでシンプル）

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'light'],  // ダークモード対応
    darkTheme: 'dark',
  },
};
```

---

## Astro Island 戦略

| コンポーネント | 技術 | Hydration |
|---------------|------|-----------|
| Hero | Astro | なし（静的） |
| About | Astro | なし（静的） |
| WorksSection | React | `client:load` |
| Footer | Astro | なし（静的） |

**理由**: WorksSectionのみインタラクティブ（モーダル開閉）なのでReact + `client:load`。他は静的HTMLで十分。

---

## セットアップ手順

```bash
# 1. プロジェクト作成
cd /Users/p4stela/ghq/github.com/P4sTela/portfolio
pnpm create astro@latest . -- --template minimal --typescript strict

# 2. React integration追加
pnpm astro add react

# 3. Tailwind integration追加
pnpm astro add tailwind

# 4. daisyUI追加
pnpm add -D daisyui@latest

# 5. 開発サーバー起動
pnpm dev
```

---

## 今後の拡張（オプション）

- [ ] ダークモード切り替えボタン
- [ ] アニメーション（View Transitions）
- [ ] ブログセクション追加
- [ ] 多言語対応（日本語/英語）
- [ ] お問い合わせフォーム
