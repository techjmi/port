import React from "react";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const url="https://ideogram.ai/assets/progressive-image/balanced/response/MLdW1odZT5ipL482v7pobg"

const Home2 = () => {
  return (
    <section>
  <div className="container mx-auto mt-5 md:mt-10 backdrop-blur-md">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="zoom-out">
      {/* Text Section */}
      <div className="px-5 md:px-10">
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-slate-50 text-center md:text-start">
          LET ME <span className="text-purple-600">INTRODUCE</span> MYSELF
        </h1>
        <p className="text-base md:text-lg mb-8 text-slate-50">
          I'm a{" "}
          <span className="font-bold text-purple-600 italic">
            MERN (MongoDB, Express.js, React, Node.js)
          </span>{" "}
          Developer, specializing in crafting the visual and interactive
          components of web applications to enhance their overall success.
          <br />
          <br />
          My expertise lies in creating dynamic, responsive, and visually
          appealing user interfaces that provide an exceptional user
          experience. I thrive on solving complex problems and implementing
          efficient solutions using modern web technologies.
          <br />
          <br />
          In addition to my proficiency with the MERN stack, I have a strong
          foundation in{" "}
          <span className="font-bold text-purple-600 italic">HTML</span>,{" "}
          <span className="font-bold text-purple-600 italic">CSS</span>, and{" "}
          <span className="font-bold text-purple-600 italic">JavaScript</span>. I am passionate
          about staying up-to-date with the latest industry trends and
          continuously improving my skills to deliver cutting-edge web
          applications.
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with
          <span className="font-bold text-purple-600 italic">Node.js</span> and{" "}
          <span className="font-bold text-purple-600 italic">
            Modern JavaScript Libraries and Frameworks
          </span>
          like
          <span className="font-bold text-purple-600 italic">React.js</span> and{" "}
          <span className="font-bold text-purple-600 italic">Next.js</span>.
        </p>
      </div>

      {/* Image Section */}
      <div className="justify-self-center md:justify-self-end ms-12" data-aos="zoom-in">
        <img src={url} className="w-10/12 max-w-md aspect-auto rounded-md" alt="avatar" />
      </div>
    </div>

    {/* Social Links */}
    <div className="text-center mt-8 mb-4 md:mb-8">
      <h1 className="text-2xl text-purple-300">CHECK OUT MY PROFILE ON</h1>
      <p className="mt-4 text-white">
        Feel free to <span className="text-purple-600">connect</span> with me
      </p>
      <ul className="flex justify-center mt-4">
        <li className="mx-4">
          <a
            href="https://github.com/techjmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600"
          >
            <AiFillGithub className="text-4xl" />
          </a>
        </li>
        <li className="mx-4">
          <a
            href="https://www.linkedin.com/in/md-shamim-akhter-b12624193"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600"
          >
            <FaLinkedinIn className="text-4xl" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
  );
};

export default Home2;
