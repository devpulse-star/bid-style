// ===========================
// Business Flow Types
// ===========================
export interface FlowStep {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const FLOW_STEPS: readonly FlowStep[] = [
  {
    id: 1,
    icon: "🎯",
    title: "ポイントサイト",
    description: "アフィリエイト広告からclick_idを付与してユーザーを送客",
  },
  {
    id: 2,
    icon: "🔗",
    title: "ASP",
    description: "トラッキングURLを経由し、media_id・campaign_idを保存",
  },
  {
    id: 3,
    icon: "🏢",
    title: "ヒトリビズ",
    description: "資料請求フォームでlead_idとclick_idを紐付けて保存",
  },
  {
    id: 4,
    icon: "📋",
    title: "FC本部",
    description: "パスワード付きCSVまたは制限付き画面で安全に送客",
  },
  {
    id: 5,
    icon: "📅",
    title: "説明会参加",
    description: "参加確認後に有効成果として承認対象に変更",
  },
  {
    id: 6,
    icon: "✅",
    title: "成果承認",
    description: "ASPへ承認・否認結果をS2Sポストバックで通知",
  },
] as const;

// ===========================
// Development Scope Types
// ===========================
export interface Phase {
  phase: number;
  title: string;
  badge: string;
  highlighted: boolean;
  items: readonly string[];
}

export const PHASES: readonly Phase[] = [
  {
    phase: 1,
    title: "MVP（初期50万円）",
    badge: "現在のご提案",
    highlighted: true,
    items: [
      "ポータル基本構築",
      "案件管理",
      "資料請求フォーム・リード保存",
      "流入計測（UTM・click_id・media_id）",
      "ASP連携1社分",
      "重複検出",
      "FC本部への安全な送客",
      "GA4・GTM設定",
      "法務表示",
    ],
  },
  {
    phase: 2,
    title: "本格運用",
    badge: "拡張フェーズ",
    highlighted: false,
    items: [
      "複数ASP対応",
      "FC本部専用管理画面",
      "自動振分け機能",
      "説明会管理システム",
      "SMS・本人確認",
    ],
  },
  {
    phase: 3,
    title: "中型ポータル化",
    badge: "本格運用",
    highlighted: false,
    items: [
      "統合トラッキング基盤",
      "承認API・Webhook",
      "不正検知システム",
      "本部別レポート",
      "会計連携",
    ],
  },
] as const;

// ===========================
// Tech Stack Types
// ===========================
export interface TechCard {
  icon: string;
  title: string;
  description: string;
}

export const TECH_CARDS: readonly TechCard[] = [
  {
    icon: "🔑",
    title: "click_id管理",
    description:
      "URLパラメータをCookieとDBに二重保存。フォーム送信時にlead_idと自動紐付け",
  },
  {
    icon: "📡",
    title: "S2Sポストバック",
    description: "ASP指定仕様に合わせたサーバー間通信。CVタグにも対応",
  },
  {
    icon: "🚫",
    title: "重複検出",
    description:
      "電話番号・メール・案件IDの組み合わせで重複申込を自動検出",
  },
  {
    icon: "📊",
    title: "リード管理",
    description:
      "申込ステータスを新規→送客→予約→参加→承認まで一元管理",
  },
  {
    icon: "🔒",
    title: "FC本部送客",
    description:
      "平文メールを使わず、アクセス制限付き画面またはCSVで安全に共有",
  },
  {
    icon: "⚙️",
    title: "WordPress構築",
    description:
      "カスタム投稿・カテゴリ・詳細テンプレートを既存テーマで効率構築",
  },
  {
    icon: "📈",
    title: "GA4・GTM",
    description:
      "媒体別・案件別のCV計測。資料請求・参加確認まで追跡",
  },
  {
    icon: "⚖️",
    title: "法務対応",
    description:
      "同意日時・規約バージョン・提供先を記録。個人情報保護法対応",
  },
  {
    icon: "🔧",
    title: "拡張設計",
    description:
      "複数ASP・Webhook・自動承認を後から追加できるデータ構造で設計",
  },
] as const;

// ===========================
// Budget Plan Types
// ===========================
export interface BudgetItem {
  label: string;
  amount: number;
  color: string;
}

export const BUDGET_ITEMS: readonly BudgetItem[] = [
  { label: "構成・簡易設計", amount: 40000, color: "#1a3a5c" },
  { label: "WordPress・テーマ構築", amount: 110000, color: "#2a5298" },
  { label: "案件・カテゴリ機能", amount: 70000, color: "#3a6bc4" },
  { label: "フォーム・リード保存", amount: 80000, color: "#e8a020" },
  { label: "流入計測", amount: 70000, color: "#d4911c" },
  { label: "ASP接続1社分", amount: 60000, color: "#c08218" },
  { label: "CSV・通知・送客", amount: 30000, color: "#4a8fd4" },
  { label: "テスト・公開・保守設定", amount: 40000, color: "#5a9fe4" },
] as const;

export const BUDGET_TOTAL = 500000;

// ===========================
// Development Flow Types
// ===========================
export interface DevelopmentStep {
  step: number;
  title: string;
  duration: string;
  description: string;
}

export const DEVELOPMENT_STEPS: readonly DevelopmentStep[] = [
  {
    step: 1,
    title: "ヒアリング・要件確定",
    duration: "1〜2週間",
    description: "ASP仕様書確認・データ項目確定・画面構成合意",
  },
  {
    step: 2,
    title: "WordPress構築・基本機能",
    duration: "2〜3週間",
    description: "テーマ設定・案件管理・フォーム・流入計測実装",
  },
  {
    step: 3,
    title: "ASP連携・リード管理",
    duration: "1〜2週間",
    description: "click_id紐付け・ポストバック実装・重複検出・送客設定",
  },
  {
    step: 4,
    title: "テスト・修正",
    duration: "1週間",
    description: "全機能動作確認・ASPテスト成果確認・スマホ表示確認",
  },
  {
    step: 5,
    title: "納品・引継ぎ",
    duration: "—",
    description: "管理マニュアル・ログイン情報・バックアップ方法を一式納品",
  },
] as const;

// ===========================
// Navigation Types
// ===========================
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "事業理解", href: "#事業理解" },
  { label: "開発スコープ", href: "#開発スコープ" },
  { label: "技術構成", href: "#技術構成" },
  { label: "予算計画", href: "#予算計画" },
  { label: "開発フロー", href: "#開発フロー" },
] as const;
