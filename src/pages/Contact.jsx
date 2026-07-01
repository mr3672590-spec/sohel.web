import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFlag,
  FaChevronDown,
} from "react-icons/fa";

import { useState, useEffect, useRef } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState("");

  const dropdownRef = useRef(null);

  const services = [
    "Shopify store design",
    "Landing page design",
    "React router project",
    "Animation project",
    "Dynamic website design",
    "Bug fixing",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (service) => {
    setForm({ ...form, service });
    setOpen(false);
    setSelectedMsg(service);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message Sent!");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex items-center justify-center px-3 sm:px-4 py-8">

      {/* container */}
      <div className="w-full max-w-5xl">

        {/* title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          {/* FORM CARD */}
          <div className="bg-white dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-white/20 shadow-xl rounded-2xl p-4 sm:p-6">

            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20"
              />

              {/* DROPDOWN */}
              <div className="relative" ref={dropdownRef}>

                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 flex items-center justify-between"
                >
                  <span className="truncate">
                    {form.service || "Select a Service"}
                  </span>

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="absolute z-50 mt-2 w-full max-h-52 overflow-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/20 rounded-xl shadow-2xl">

                    {services.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelect(item)}
                        className={`p-2.5 sm:p-3 text-sm cursor-pointer hover:bg-cyan-500 hover:text-white transition-all ${
                          form.service === item
                            ? "bg-cyan-100 dark:bg-cyan-900"
                            : ""
                        }`}
                      >
                        {item}
                      </div>
                    ))}

                  </div>
                )}
              </div>

              {/* SELECTED BOX */}
              {selectedMsg && (
                <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900 border border-cyan-300 dark:border-cyan-700 text-xs sm:text-sm">
                  Service Selected: {selectedMsg}
                </div>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Write Your Message..."
                value={form.message}
                onChange={handleChange}
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20"
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* INFO CARD */}
          <div className="bg-white dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-white/20 shadow-xl rounded-2xl p-4 sm:p-6">

            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
              Contact Info
            </h2>

            <div className="space-y-3 sm:space-y-4">

              <a
                href="https://wa.me/8801816066829"
                target="_blank"
                className="flex items-center gap-3 sm:gap-4 bg-gray-100 dark:bg-white/10 hover:bg-green-500 duration-300 p-3 sm:p-4 rounded-xl"
              >
                <FaWhatsapp className="text-2xl sm:text-3xl text-green-400" />
                <div>
                  <p className="text-xs sm:text-sm opacity-70">WhatsApp</p>
                  <h3 className="text-sm sm:text-base font-semibold">
                    +8801816066829
                  </h3>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 bg-gray-100 dark:bg-white/10 hover:bg-cyan-600 duration-300 p-3 sm:p-4 rounded-xl">
                <FaPhoneAlt className="text-xl sm:text-2xl text-cyan-400" />
                <div>
                  <p className="text-xs sm:text-sm opacity-70">Mobile</p>
                  <h3 className="text-sm sm:text-base font-semibold">
                    +8801816066829
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 bg-gray-100 dark:bg-white/10 hover:bg-purple-600 duration-300 p-3 sm:p-4 rounded-xl">
                <FaEnvelope className="text-xl sm:text-2xl text-yellow-400" />
                <div>
                  <p className="text-xs sm:text-sm opacity-70">Email</p>
                  <h3 className="text-sm sm:text-base font-semibold break-all">
                    yourgmail@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 bg-gray-100 dark:bg-white/10 hover:bg-pink-600 duration-300 p-3 sm:p-4 rounded-xl">
                <FaFlag className="text-xl sm:text-2xl text-red-400" />
                <div>
                  <p className="text-xs sm:text-sm opacity-70">Nationality</p>
                  <h3 className="text-sm sm:text-base font-semibold">
                    Bangladeshi
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;