import React from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <p className="font-heading text-2xl text-primary">
                RojgariForAll
              </p>
            </div>

            {/* Menu section  */}
            <div className="hidden md:flex gap-30 font-body">
              <a href="#">Jobs</a>
              <a href="#">About</a>
              <a href="#">Contact Us</a>
            </div>

            {/* Mobile hamburger menu section */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <MdMenu className="text-4xl hamburger-hover" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
