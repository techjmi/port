import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImDisplay } from "react-icons/im";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import profile from "../Assets/profileImg.jpg";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const closeMenu = () => {
    setExpand(false);
  };

  return (
    <>
      <div
        className={`text-gray-900 sticky top-0 z-50 px-2 md:px-8 ${
          navColour ? "sticky bg-gray-800" : "navbar"
        }`}
      >
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={profile}
                  alt="Brand Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="text-slate-100 px-3 py-2 rounded-md text-sm md:text-lg font-medium flex items-center"
                onClick={closeMenu}
              >
                <AiOutlineHome className="mr-2 size-6" />
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-100 md:text-lg px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={closeMenu}
              >
                <AiOutlineUser className="mr-2 size-6" />
                About
              </Link>
              <Link
                to="/projects"
                className="text-slate-100 md:text-lg px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={closeMenu}
              >
                <ImDisplay className="mr-2 size-5" />
                Projects
              </Link>
              <a
                href="https://blog-mern-cfpm.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 md:text-lg px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <FaExternalLinkAlt className="mr-2 size-6" />
                Blogs
              </a>
            </div>
            <div className="hidden md:block">
              <Link to="/contact" className="text-decoration-none">
                <button
                  className="text-slate-100 md:text-lg border-2 border-login-border px-3 py-1 rounded-md text-sm font-medium flex"
                  onClick={closeMenu}
                >
                  <IoCallOutline className="mr-2 size-6" />
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleExpand}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-menu-gray hover:bg-gray-100 focus:outline-none"
              >
                {expand ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-52 text-black lg:hidden z-50 sidebar transform ${
            expand ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <AiOutlineHome className="mr-2" />
              Home
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <AiOutlineUser className="mr-2" />
              About
            </Link>
            <Link
              to="/projects"
              className="px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <ImDisplay className="mr-2" />
              Projects
            </Link>
            <a
              href="https://blog-mern-cfpm.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              Blogs
            </a>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <IoCallOutline className="mr-2" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
