"use client";
import {
  CTASection,
  FeaturesSection,
  LoadingSkeleton,
} from "@/components/modules/home";
import HeroSection from "@/components/modules/home/NewHero";
import TestimonialsSection from "@/components/modules/home/TestimonialsSection";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading for skeleton
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* <HeroSection /> */}
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
