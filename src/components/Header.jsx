import React from "react";

const Header = () => {
  return (
    <div className="max-w-[90rem] mx-auto my-10 px-6 py-6 border-b border-gray-400">
      <h1 className="flex flex-wrap items-baseline gap-4">
        <span className="font-heading text-4xl md:text-6xl lg:text-7xl">
          Job - Listing Page
        </span>
        <span className="font-body text-[20px]">Available Jobs</span>
      </h1>
    </div>
  );
};

export default Header;
