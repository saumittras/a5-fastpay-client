"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const images = [
  "https://www.cognyte.com/wp-content/uploads/2022/03/Digital_wallet_02_1920X960-01.jpg",
  "https://www.intellectsoft.net/blog/wp-content/uploads/How-to-Build-Secure-Digital-Wallet-Cover.jpg",
  "https://bettermoneyhabits.bankofamerica.com/content/dam/bmh/articles/what-is-a-digital-wallet/how-digital-wallets-work.jpg",
  "https://img.freepik.com/premium-vector/digital-wallet-wallet-smartphone-icon-made-with-currency-symbols-mobile-banking-ecommerce-finance-banner-dollar-euro-yen-pound-icons-background-with-currency-signs-vector-illustration_127544-2565.jpg?semt=ais_hybrid&w=740&q=80",
]; // replace with your real image paths

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // auto-change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* 🔁 Background image slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-[#5e6ec9]/40 via-black/40 to-[#5e6ec9]/50 dark:from-[#5e6ec9]/50"></div>
      </div>

      {/* 🧩 Foreground content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          FastPay — Your Smart Digital Wallet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-gray-100 drop-shadow-md mx-auto"
        >
          Experience seamless transactions, secure payments, and modern finance
          at your fingertips.
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
            className="border-[#5e6ec9] text-[#5e6ec9] hover:bg-[#5e6ec9]/10 transition-all duration-300 bg-white/10 backdrop-blur-md"
          >
            <Link to={"/about"}>Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
