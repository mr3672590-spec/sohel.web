import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-black dark:text-white mt-auto transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

      
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 duration-300"
        >
          <FaArrowUp />
          Back Home
        </Link>

        {/* Text */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} Md Sohel Rana. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;