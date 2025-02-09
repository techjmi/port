import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12 backdrop-blur-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Branding Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Made With <FaHeart className="inline text-red-500" /> By
              <span className="block mt-1">Md Shamim Akhter</span>
            </h3>
            <p className="text-sm text-gray-400">
              Full Stack Developer & Open Source Contributor
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-400">Explore</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
                <a
                  href="https://learningblog.fun/blog"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-400">Connect</h4>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="https://shamim-portfolio-o1db.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </a>
              </nav>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-400">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100047398065321",
                  icon: <BsFacebook className="w-5 h-5" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/mernvibes/",
                  icon: <BsInstagram className="w-5 h-5" />,
                  label: "Instagram",
                },
                {
                  href: "https://github.com/techjmi",
                  icon: <BsGithub className="w-5 h-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/md-shamim-akhter-b12624193",
                  icon: <BsLinkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors relative group"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 text-center text-sm text-gray-400">
          <p>
            © {year} Md Shamim Akhter. All rights reserved. |
            <Link to="/privacy" className="ml-2 hover:text-blue-400">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="ml-2 hover:text-blue-400">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
