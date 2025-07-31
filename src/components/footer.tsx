"use client";

import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

//Local imports
import { FooterData } from "@constants/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Code size={24} className="text-blue-400 mr-2" />
            <span className="text-2xl font-bold">
              <span className="text-blue-400">{"<"}</span>
              {FooterData.name}
              <span className="text-blue-400">{"/>"}</span>
            </span>
          </div>

          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Full-Stack Engineer passionate about creating exceptional digital
            experiences
          </p>

          <div className="flex items-center justify-center text-slate-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 mx-2 animate-pulse" />
            <span>using Next.js, React & TailwindCSS</span>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {FooterData.name}. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
