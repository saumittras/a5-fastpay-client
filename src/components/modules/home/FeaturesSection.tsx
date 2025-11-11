"use client";
import { motion } from "framer-motion";
import { BarChart, Send, Shield, Smartphone } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "Your data and transactions are encrypted and safe.",
  },
  {
    icon: Smartphone,
    title: "Instant Payments",
    desc: "Send or receive money in seconds with one tap.",
  },
  {
    icon: Send,
    title: "Global Transfers",
    desc: "Transfer money anytime, anywhere — securely.",
  },
  {
    icon: BarChart,
    title: "Smart Insights",
    desc: "Track spending and manage budgets with ease.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        Powerful Features for Modern Payments
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/50 shadow-lg backdrop-blur-md text-center transition-all duration-300 hover:scale-[1.03]"
          >
            <Icon className="w-12 h-12 mx-auto mb-4 text-[#5e6ec9]" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
