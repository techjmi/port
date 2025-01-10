import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import TypeWritter from "../component/home/TypeWritter";
import Home2 from "../component/home/Home2";
import Service from "../component/home/Service";
import resume from "../Assets/Md_Shamim_Resume.pdf";
import CheckOut from "../component/CheckOut";
import Particle from "../component/Particle";
import Experience from "../component/Experience";
function Home() {
  const [ad, setAd] = useState(false);
  const handleDownload = () => {
    // const pdfUrl = process.env.PUBLIC_URL + './Shamim_Resume.pdf';
    const pdfUrl = resume;
    console.log(pdfUrl);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = pdfUrl;
    a.download = "Shamim_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    // Clean up
    document.body.removeChild(a);
  };

  const url =
    "https://ideogram.ai/assets/image/lossless/response/ya3Qak5IRU-nwkWHJa63Fw";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAd(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const handleClosed = () => {
    setAd(false);
  };
  return (
    <section className="x">
      <Particle />
      {ad && (
        <div className="overlay">
          <CheckOut ad={ad} handleClosed={handleClosed} />
        </div>
      )}
      <div className="">
        <div
          className="container mx-auto px-1 md:px-4 py-10 md:py-20"
          style={{ pointerEvents: "auto" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-white ps-3 md:ps-8 text-center md:text-start md:px-6 sm:ps-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 ">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-xl md:text-3xl font-bold mb-4">
                I'M
                <strong className="text-blue-400 text-center">
                  {" "}
                  MD SHAMIM AKHTER
                </strong>
              </h1>
              <div className="text-white text-2xl md:text-3xl mt-2 md:mt-4 mb-6 md:mb-8">
                <TypeWritter />
              </div>
              <button
  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 mx-auto md:mx-0"
  onClick={handleDownload}
>
  <FaArrowDown className="mr-2 text-lg" />
  Download CV
</button>

            </div>
            <div className="justify-self-center md:justify-self-end ms-12">
              <img
                src="home1.webp"
                alt="home pic"
                className="w-10/12 max-w-md aspect-auto rounded-md"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
      <Experience />
      <Service />
    </section>
  );
}

export default Home;
