"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Amina Rahman",
    role: "Business Owner",
    feedback:
      "FastPay made managing my transactions effortless. The interface is clean, fast, and extremely reliable!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Nafis Chowdhury",
    role: "Freelancer",
    feedback:
      "I can send and receive payments instantly — no more waiting days for transfers. Love the dark mode feature too!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
  {
    name: "Sarah Jahan",
    role: "Software Engineer",
    feedback:
      "The security and smooth performance of FastPay give me full confidence. It’s simply the best wallet in Bangladesh!",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        What Our Users Say
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-md shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full border-2 border-[#5e6ec9]"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              “{testimonial.feedback}”
            </p>

            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-5 h-5 text-[#5e6ec9] fill-[#5e6ec9]"
                />
              ))}
              {testimonial.rating < 5 &&
                Array.from({ length: 5 - testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-gray-400" />
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA inside testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Want to share your FastPay experience?
        </p>
        <button className="px-6 py-3 rounded-full bg-[#5e6ec9] text-white font-semibold hover:bg-[#4a57a5] shadow-lg transition-all duration-300">
          <Link to="/contact">Submit Feedback</Link>
        </button>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
