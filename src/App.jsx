import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Toast from "./components/Toast";
import jobsData from "./data/jobs.json";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleApply = (job) => {
    setShowToast(true);

    setSelectedJob(null);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <JobList jobs={jobsData} onViewDetails={handleViewDetails} />

      {selectedJob && (
        <JobDetails
          job={selectedJob}
          onClose={handleCloseModal}
          onApply={handleApply}
        />
      )}

      <Toast
        message='"Application submitted successfully! Good luck!"'
        show={showToast}
      />
    </div>
  );
}

export default App;
