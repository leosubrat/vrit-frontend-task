import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full z-20 overflow-hidden"
        >
          <div className="font-body text-xl font-semibold md:hidden bg-[var(--color-primary)] text-white py-10 m-6 rounded-3xl">
            <div className="flex flex-col justify-center items-center gap-10 ">
              <a href="#">Jobs</a>
              <a href="#">About</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
