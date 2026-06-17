"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IconPointSite,
  IconASP,
  IconHitoribiz,
  IconFCHonbu,
  IconSeminar,
  IconApproval,
} from "@/components/icons/FlowIcons";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number; className?: string }>;

interface FlowStepData {
  id: number;
  Icon: IconComponent;
  title: string;
  description: string;
}

const FLOW_STEPS: readonly FlowStepData[] = [
  {
    id: 1,
    Icon: IconPointSite,
    title: "ポイントサイト",
    description: "アフィリエイト広告からclick_idを付与してユーザーを送客",
  },
  {
    id: 2,
    Icon: IconASP,
    title: "ASP",
    description: "トラッキングURLを経由し、media_id・campaign_idを保存",
  },
  {
    id: 3,
    Icon: IconHitoribiz,
    title: "ヒトリビズ",
    description: "資料請求フォームでlead_idとclick_idを紐付けて保存",
  },
  {
    id: 4,
    Icon: IconFCHonbu,
    title: "FC本部",
    description: "パスワード付きCSVまたは制限付き画面で安全に送客",
  },
  {
    id: 5,
    Icon: IconSeminar,
    title: "説明会参加",
    description: "参加確認後に有効成果として承認対象に変更",
  },
  {
    id: 6,
    Icon: IconApproval,
    title: "成果承認",
    description: "ASPへ承認・否認結果をS2Sポストバックで通知",
  },
] as const;

export default function BusinessFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="事業理解" className="py-20 md:py-28 bg-white">
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
            Business Flow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
            ヒトリビズの事業フローを
            <br className="hidden sm:block" />
            完全に把握しています
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" />
        </motion.div>

        {/* Flow steps */}
        <div ref={ref}>
          {/* Desktop: horizontal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden lg:flex items-start gap-0"
          >
            {FLOW_STEPS.map(({ id, Icon, title, description }, index) => (
              <div key={id} className="flex items-start flex-1 min-w-0">
                <motion.div
                  variants={itemVariants}
                  className="flex-1 flex flex-col items-center text-center px-2 group"
                >
                  {/* Step number */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold mb-3 flex-shrink-0 relative z-10">
                    {id}
                  </div>

                  {/* Icon circle */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 mb-4 transition-all duration-300 group-hover:bg-accent/8 group-hover:border-accent/30 group-hover:shadow-sm">
                    <Icon
                      size={26}
                      className="text-primary transition-colors duration-300 group-hover:text-accent"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-primary mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </motion.div>

                {/* Arrow connector */}
                {index < FLOW_STEPS.length - 1 && (
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center mt-10 flex-shrink-0 w-6"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-accent/70"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Mobile/Tablet: vertical */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:hidden flex flex-col gap-0"
          >
            {FLOW_STEPS.map(({ id, Icon, title, description }, index) => (
              <div key={id} className="flex flex-col items-center">
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 w-full max-w-md bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold">
                      {id}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 transition-all duration-300 group-hover:bg-accent/8 group-hover:border-accent/25">
                      <Icon
                        size={20}
                        className="text-primary transition-colors duration-300 group-hover:text-accent"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-primary mb-1">{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </motion.div>

                {index < FLOW_STEPS.length - 1 && (
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center py-1"
                  >
                    <div className="w-0.5 h-4 bg-accent/25" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 text-accent/70"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 bg-primary/3 inline-block px-6 py-3 rounded-full border border-primary/8">
            このフロー全体をカバーするシステムをMVP段階から設計・実装します
          </p>
        </motion.div>
      </div>
    </section>
  );
}
