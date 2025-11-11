"use client";

import FastPayLogo from "@/assets/icons/Logo copy";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import FastPayLogo from "@/components/FastPayLogo"; // ⚙️ adjust path if needed

const LoadingScreen = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev === 3 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-transparent text-gray-900 dark:text-white z-50">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center mb-4"
      >
        <FastPayLogo />
      </motion.div>

      {/* Brand name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold tracking-wide"
      >
        Fast Pay
      </motion.h1>

      {/* Loading dots */}
      <motion.p
        key={dotCount}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-base mt-2 font-medium text-gray-500 dark:text-gray-300"
      >
        Loading{".".repeat(dotCount)}
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
