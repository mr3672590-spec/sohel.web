import { useNavigate } from "react-router-dom";
import www from "../assets/www.jpeg";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 md:px-20 py-10 transition-colors duration-300">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About Me
        </h1>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          My name is{" "}
          <span className="font-semibold text-blue-600">
            Md Sohel Rana
          </span>
          . I am a Frontend Web Developer.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I build modern, responsive and user-friendly websites using React,
          Tailwind CSS and JavaScript. I enjoy creating clean UI, smooth user
          experiences, and high-performance web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start md:items-start">

          <button
            onClick={() => navigate("/contact")}
            className="w-40 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Hire Me
          </button>

          <a
            href="/cv.pdf"
            download
            className="w-40 h-12 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 flex items-center justify-center"
          >
            Download CV
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 relative">

        {/* Rotating Circle */}
        <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] rounded-full border-4 border-dashed border-blue-500 animate-spin"></div>

        {/* Image */}
        <img
          src={www}
          alt="Profile"
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10"
        />

      </div>

    </div>
  );
}

export default About;