"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BUDGET_ITEMS, BUDGET_TOTAL } from "@/types";

export default function BudgetPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const maxAmount = Math.max(...BUDGET_ITEMS.map((item) => item.amount));

  const formatAmount = (amount: number) =>
    amount.toLocaleString("ja-JP") + "円";

  return (
    <section id="予算計画" className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-accent bg-accent/10 rounded-full mb-4 uppercase">
            Budget Plan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            初期予算50万円の配分
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" />
        </motion.div>

        {/* Bar chart */}
        <div ref={ref} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="flex flex-col gap-5">
            {BUDGET_ITEMS.map((item, index) => {
              const percentage = (item.amount / maxAmount) * 100;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  {/* Label */}
                  <div className="flex-shrink-0 sm:w-44 text-sm font-medium text-primary">
                    {item.label}
                  </div>

                  {/* Bar + amount */}
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex-1 h-7 bg-gray-50 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${percentage}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 0.9,
                          delay: index * 0.07 + 0.2,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ backgroundColor: item.color }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      </motion.div>
                    </div>

                    {/* Amount */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.07 + 0.6 }}
                      className="flex-shrink-0 text-sm font-semibold text-gray-700 w-28 text-right tabular-nums"
                    >
                      {formatAmount(item.amount)}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}

            {/* Divider */}
            <div className="border-t border-gray-200 pt-4 mt-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: BUDGET_ITEMS.length * 0.07 + 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                <div className="flex-shrink-0 sm:w-44 text-sm font-bold text-primary">
                  合計
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-1 h-7 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{
                        duration: 1.0,
                        delay: BUDGET_ITEMS.length * 0.07 + 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </motion.div>
                  </div>
                  <span className="flex-shrink-0 text-base font-bold text-primary w-28 text-right tabular-nums">
                    {formatAmount(BUDGET_TOTAL)}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: BUDGET_ITEMS.length * 0.07 + 1.0,
            }}
            className="mt-6 text-xs text-gray-400 border-t border-gray-100 pt-4"
          >
            ※外部有料サービス・原稿・画像・法務確認は別途
          </motion.p>
        </div>
      </div>
    </section>
  );
}
