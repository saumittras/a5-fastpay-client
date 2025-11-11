"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-[#5e6ec9] text-white text-center relative overflow-hidden">
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-semibold"
      >
        Join Millions Using FastPay Today
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-3 text-white/90 max-w-2xl mx-auto"
      >
        Secure, quick, and smart — simplify your financial life now.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex justify-center gap-4"
      >
        <Button className="bg-[#5e6ec9] text-white border-2 hover: shadow-lg font-semibold">
          <Link to="/register">Create Account</Link>
        </Button>
        <Button variant="outline" className="bg-blue-400 hover:bg-white/10">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
