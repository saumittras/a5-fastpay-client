"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#5e6ec9]/10 via-transparent to-[#5e6ec9]/20 dark:from-[#5e6ec9]/30 transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        FastPay — Your Smart Digital Wallet
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300"
      >
        Experience seamless transactions, secure payments, and modern finance at
        your fingertips.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Button className="bg-[#5e6ec9] hover:bg-[#4a57a5] text-white shadow-lg transition-all duration-300">
          <Link to="/register">Create Your Wallet</Link>
        </Button>
        <Button
          variant="outline"
          className="border-[#5e6ec9] text-[#5e6ec9] hover:bg-[#5e6ec9]/10 transition-all duration-300"
        >
          <Link to={"/about"}>Learn More</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
