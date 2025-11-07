import React from "react";

const About = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-[#111] text-white rounded-2xl shadow-2xl max-w-3xl w-[90%] flex flex-col md:flex-row overflow-hidden animate-fadeIn border border-red-800/40">
        
        <div className="md:w-1/2 w-full">
          <img
            src="/69-mustang.jpg"
            alt="About Mustang Project"
            className="w-full h-full object-cover brightness-90"
          />
        </div>

        <div className="p-6 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-3 text-red-500">About This Project</h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              This website is a passion project dedicated to the legendary <span className="text-white font-semibold">Ford Mustang Boss series</span> 
              a tribute to the engineering mastery, racing heritage, and cultural impact of these timeless machines.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Built using <span className="text-red-400">React.js</span>, <span className="text-red-400">GSAP</span> for animations, and <span className="text-red-400">Three.js</span> for interactive 3D visualization,
              this site blends modern web technology with a classic automotive story.
            </p>

            <h3 className="text-lg font-semibold text-red-500 mt-4 mb-1">Disclaimer</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              This project was developed for educational and creative purposes. Some assets, including the 
              <span className="text-white font-medium"> introduction video, 3D model, and select debugging or refinement steps</span>, were assisted using AI tools such as <span className="text-red-400">Gemini, ChatGPT and Meshy AI</span> <span>(AI-based generation platforms)</span>.
              <br /><br />
              All images and clips showcased here were sourced from freely available public domains such as 
              <span className="text-white font-medium"> Pinterest, YouTube, and similar free repositories</span>.  
              They remain the property of their respective owners and are used under fair-use or educational demonstration guidelines.  
            </p>

            <p className="text-gray-400 text-xs mt-3 leading-relaxed">
              No commercial intent is associated with this project, it serves as a showcase of front-end engineering,
              3D integration, and design storytelling. Tailwind + React + Three.js website can look slightly different across browsers and devices,
              due to rendering differences, GPU acceleration, font smoothing, color calibration, and layout interpretation.
            </p>
          </div>

          <div className="mt-5 flex justify-between items-center">
            <a
              href="https://www.linkedin.com/in/u-s-jagan-krishna-b60a88277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 font-semibold hover:text-red-500 transition"
            >
              → Connect on LinkedIn
            </a>
            <button
              onClick={onClose}
              className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
