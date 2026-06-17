"use client";

import { motion } from "framer-motion";
import {
  IconClickId,
  IconPostback,
  IconDuplicate,
  IconLead,
  IconSecureSend,
  IconWordPress,
  IconAnalytics,
  IconLegal,
  IconExpand,
} from "@/components/icons/TechIcons";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number; className?: string }>;

interface TechCardData {
  Icon: IconComponent;
  title: string;
  description: string;
}

const TECH_CARDS: readonly TechCardData[] = [
  {
    Icon: IconClickId,
    title: "click_id管理",
    description:
      "URLパラメータをCookieとDBに二重保存。フォーム送信時にlead_idと自動紐付け",
  },
  {
    Icon: IconPostback,
    title: "S2Sポストバック",
    description: "ASP指定仕様に合わせたサーバー間通信。CVタグにも対応",
  },
  {
    Icon: IconDuplicate,
    title: "重複検出",
    description:
      "電話番号・メール・案件IDの組み合わせで重複申込を自動検出",
  },
  {
    Icon: IconLead,
    title: "リード管理",
    description:
      "申込ステータスを新規→送客→予約→参加→承認まで一元管理",
  },
  {
    Icon: IconSecureSend,
    title: "FC本部送客",
    description:
      "平文メールを使わず、アクセス制限付き画面またはCSVで安全に共有",
  },
  {
    Icon: IconWordPress,
    title: "WordPress構築",
    description:
      "カスタム投稿・カテゴリ・詳細テンプレートを既存テーマで効率構築",
  },
  {
    Icon: IconAnalytics,
    title: "GA4・GTM",
    description:
      "媒体別・案件別のCV計測。資料請求・参加確認まで追跡",
  },
  {
    Icon: IconLegal,
    title: "法務対応",
    description:
      "同意日時・規約バージョン・提供先を記録。個人情報保護法対応",
  },
  {
    Icon: IconExpand,
    title: "拡張設計",
    description:
      "複数ASP・Webhook・自動承認を後から追加できるデータ構造で設計",
  },
] as const;

export default function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="技術構成" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-accent bg-accent/10 rounded-full mb-4 uppercase">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            技術対応範囲
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" />
          <p className="mt-4 text-gray-500 text-sm">
            各機能の実装方針と技術的な対応内容
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {TECH_CARDS.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300 cursor-default"
            >
              {/* Hover top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />

              {/* Icon box */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/8 mb-4 transition-all duration-300 group-hover:bg-accent/8 group-hover:border-accent/20 group-hover:shadow-sm">
                <Icon
                  size={22}
                  className="text-primary/70 transition-all duration-300 group-hover:text-accent group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-accent">
                {title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
