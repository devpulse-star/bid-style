"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Logo mark */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-0.5 bg-accent/50 rounded" />
            <span className="text-white/40 text-xs tracking-widest uppercase">
              Proposal Document
            </span>
            <div className="w-6 h-0.5 bg-accent/50 rounded" />
          </div>

          {/* Main text */}
          <p className="text-white/70 text-sm leading-relaxed max-w-lg">
            本提案はヒトリビズ様の開発相談資料をもとに作成しました
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-white/10 my-1" />

          {/* Copyright line */}
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} 開発提案資料
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
