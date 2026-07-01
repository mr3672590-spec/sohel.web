import { Link } from "react-router-dom";
import www from "../assets/www.jpeg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 md:px-20 py-10 transition-colors duration-300">

      {/* Left Text */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-600">Web Developer</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          <span className="block text-3xl md:text-5xl font-semibold mb-3">
            Md Sohel Rana
          </span>

          I build modern, responsive and dynamic websites using React,
          Tailwind CSS and Node.js. I love creating clean UI and user-friendly
          design.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">

          <a
            href="https://www.facebook.com/share/1DX3tAnFtT/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/md-sohel-rana-554bb0414?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:scale-110 duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@MdSohelRana-q4m6z"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

          <Link to="/contact">
            <button className="w-40 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Hire Me
            </button>
          </Link>

          <Link to="/services">
            <button className="w-40 h-12 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
              My Work
            </button>
          </Link>

        </div>

      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">

        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[320px] md:h-[320px] flex items-center justify-center">

          {/* Rotating Blue Ring */}
          <div className="absolute inset-0 rounded-full border-[5px] border-blue-500 border-t-transparent animate-spin-slow shadow-[0_0_35px_#3b82f6]"></div>

          {/* Glowing Ring */}
          <div className="absolute w-[88%] h-[88%] rounded-full border border-blue-400 opacity-40"></div>

          {/* Image */}
          <img
            src={www}
            alt="Developer"
            className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
          />

        </div>

      </div>

    </div>
  );
}

export default Home;