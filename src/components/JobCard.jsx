import frontendImage from "../assets/Frontend.jpg";
import uiuxImage from "../assets/UIUX.jpeg";
import reactImage from "../assets/React.png";
import defaultImage from "../assets/Default.png";

const JobCard = ({ job, onViewDetails }) => {
  // Returns the image based on job.image or default
  const getJobImage = (imageName) => {
    const images = {
      "frontend-intern": frontendImage,
      "uiux-designer": uiuxImage,
      "react-developer": reactImage,
      "fullstack-developer": frontendImage,
      "backend-developer": uiuxImage,
      "mobile-developer": reactImage,
    };
    return images[imageName] || defaultImage;
  };

  return (
    <div className="max-w-[90rem] flex flex-col bg-[#FAFAF5] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      {/* Job Image */}
      <div className="h-48 flex items-center justify-center">
        <img
          src={getJobImage(job.image)}
          alt={job.title || "Job image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Job Info */}
      <div className="p-6 font-body">
        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
        <p className="text-primary mb-1">{job.company}</p>
        <p className="text-gray-500 text-sm mb-3">📍 {job.location}</p>

        {/* Job Type & Work Mode */}
        <div className="flex gap-2 mb-3">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {job.jobType}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {job.workMode}
          </span>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <p className="text-sm font-semibold mb-1">Skills:</p>
          <div className="flex flex-wrap gap-1">
            {job.skills?.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(job)}
          className="mx-auto block p-5 bg-primary text-white py-2 rounded cursor-pointer hover:opacity-90 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
