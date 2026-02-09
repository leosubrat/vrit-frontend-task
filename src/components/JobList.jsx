import JobCard from "./JobCard";

const JobList = ({ jobs, onViewDetails }) => {
  return (
    <div className="max-w-[90rem] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
