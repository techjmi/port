import React from 'react';

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-3/4 mx-auto mt-10 mb-5 backdrop-blur-sm" data-aos="zoom-in" id='experience'>
      <h2 className="text-3xl font-bold mb-4 text-center">Professional Experience</h2>
      <div className="border-l-4 border-indigo-500 pl-4">
        <h3 className="text-xl font-semibold">Power Soft Global Solution</h3>
        <p className="text-sm text-gray-400 italic mb-2">ReactJS Developer | July 2023- Present</p>
        <p className="text-lg">
          As a ReactJS Developer, I worked on building dynamic and user-friendly web applications. My primary responsibilities included:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Fetching data from backend APIs using Axios and displaying it in the frontend with optimized performance.</li>
          <li>Collaborating with backend developers to ensure seamless integration of RESTful APIs.</li>
          <li>Implementing reusable React components to improve code maintainability and scalability.</li>
          <li>Enhancing user experience by incorporating responsive design using Tailwind CSS.</li>
          <li>Participating in code reviews and improving code quality by following best practices.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
