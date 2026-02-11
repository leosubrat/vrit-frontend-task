import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-yellow-100 px-6 py-4 rounded shadow-lg flex items-center gap-3">
            <span className="text-2xl">🎉</span>
            <p className="font-body text-gray-800">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
