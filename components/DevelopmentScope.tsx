"use client";

import { motion } from "framer-motion";
import { PHASES } from "@/types";

export default function DevelopmentScope() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="開発スコープ" className="py-20 md:py-28 bg-background">
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
            Development Scope
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            段階的な開発計画
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" />
          <p className="mt-4 text-gray-500 text-sm">
            まず確実に動くMVPを構築し、その後段階的に拡張します
          </p>
        </motion.div>

        {/* Phase cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {PHASES.map((phase) => (
            <motion.div
              key={phase.phase}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className={`relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col ${
                phase.highlighted
                  ? "border-2 border-accent shadow-lg shadow-accent/10"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    phase.highlighted
                      ? "bg-accent text-white"
                      : "bg-primary/8 text-primary"
                  }`}
                >
                  {phase.badge}
                </span>
                <span className="text-3xl font-black text-gray-100 select-none">
                  0{phase.phase}
                </span>
              </div>

              {/* Phase label */}
              <div
                className={`text-xs font-semibold tracking-widest mb-2 ${
                  phase.highlighted ? "text-accent" : "text-gray-400"
                }`}
              >
                PHASE {phase.phase}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-primary mb-5">
                {phase.title}
              </h3>

              {/* Divider */}
              <div
                className={`h-0.5 w-full mb-5 ${
                  phase.highlighted ? "bg-accent/20" : "bg-gray-100"
                }`}
              />

              {/* Items */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                        phase.highlighted
                          ? "bg-accent/15 text-accent"
                          : "bg-primary/8 text-primary"
                      }`}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className="w-2.5 h-2.5"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-600 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Highlighted corner accent */}
              {phase.highlighted && (
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/10 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
