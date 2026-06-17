"use client";

import { motion } from "framer-motion";
import { DEVELOPMENT_STEPS } from "@/types";

export default function DevelopmentFlow() {
  return (
    <section id="開発フロー" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-accent bg-accent/10 rounded-full mb-4 uppercase">
            Development Flow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            納品までの流れ
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/20 to-transparent" />

          <div className="flex flex-col gap-0">
            {DEVELOPMENT_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex gap-5 group"
              >
                {/* Circle */}
                <div className="relative flex-shrink-0 flex items-start pt-0.5">
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 font-bold text-sm transition-all duration-300 ${
                      index === DEVELOPMENT_STEPS.length - 1
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/25"
                        : "bg-white border-primary/20 text-primary group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pb-10 ${
                    index === DEVELOPMENT_STEPS.length - 1 ? "pb-0" : ""
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm group-hover:shadow-md group-hover:border-primary/15 transition-all duration-300">
                    {/* Title + duration */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-primary leading-tight">
                        {step.title}
                      </h3>
                      {step.duration !== "—" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent flex-shrink-0">
                          {step.duration}
                        </span>
                      )}
                      {step.duration === "—" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/8 text-primary flex-shrink-0">
                          最終工程
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total duration note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-primary/3 rounded-2xl border border-primary/8 p-5 text-center"
        >
          <p className="text-sm text-primary font-medium">
            目安：全工程 <span className="font-bold text-accent">3〜4週間</span> で納品
          </p>
          <p className="text-xs text-gray-400 mt-1">
            ※ASP仕様書の提供とヒアリング対応状況により変動します
          </p>
        </motion.div>
      </div>
    </section>
  );
}
