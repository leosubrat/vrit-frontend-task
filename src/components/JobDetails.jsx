// src/components/JobDetails.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const JobDetails = ({ job, onClose, onApply }) => {
  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-300 shadow-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-gray-700 transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>

          {/* Modal Content */}
          <div className="p-8">
            <h2 className="font-heading text-3xl font-bold mb-2">
              {job.title}
            </h2>
            <p className="font-body text-primary text-lg mb-1">{job.company}</p>
            <p className="font-body text-gray-600 mb-4">📍 {job.location}</p>

            {/* Job Description */}
            <div className="mb-6">
              <h3 className="font-heading font-semibold text-xl mb-2">
                Job Description:
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="font-heading font-semibold text-xl mb-2">
                Skills:
              </h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="font-body bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && (
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Responsibilities:
                </h3>
                <ul className="font-body list-disc list-inside space-y-1 text-gray-700">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Apply Button */}
            <button
              onClick={() => onApply(job)}
              className="mx-auto block px-8 py-3 bg-primary text-white font-semibold rounded cursor-pointer hover:opacity-90 transition-opacity"
            >
              Apply Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobDetails;
