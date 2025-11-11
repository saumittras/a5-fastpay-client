import { motion } from "framer-motion";
import React from "react";

export interface UnauthorizedProps {
  title?: string;
  message?: string;
  redirectLabel?: string;
  onLogin?: () => void;
  onRetry?: () => void;
  showLoginButton?: boolean;
  showRetryButton?: boolean;
}

const Unauthorized: React.FC<UnauthorizedProps> = ({
  title = "Unauthorized",
  message = "You don't have permission to view this page. Please login or contact the administrator if you think this is a mistake.",
  redirectLabel = "Go to Login",
  onLogin,
  onRetry,
  showLoginButton = true,
  showRetryButton = true,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-[60vh] flex items-center justify-center px-4"
      aria-labelledby="unauth-title"
      role="alert"
    >
      <div className="max-w-xl w-full bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-12 h-12 text-red-500"
              aria-hidden
            >
              <path
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h2
          id="unauth-title"
          className="text-2xl font-semibold text-gray-900 mb-2"
        >
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-6">{message}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {showLoginButton && (
            <button
              onClick={onLogin}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              aria-label={redirectLabel}
            >
              {redirectLabel}
            </button>
          )}

          {showRetryButton && (
            <button
              onClick={onRetry}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              aria-label="Retry"
            >
              Retry
            </button>
          )}
        </div>

        <div className="mt-6 text-xs text-gray-400">
          If you believe this is an error, try logging out and logging in again.
        </div>
      </div>
    </motion.section>
  );
};

export default Unauthorized;
