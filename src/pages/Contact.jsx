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
    "Shopify Store Design",
    "Landing Page Design",
    "React Router Project",
    "Animation Project",
    "Dynamic Website Design",
    "Bug Fixing",
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center px-4 py-10 transition-all duration-300">

      <div className="w-full max-w-6xl">

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700">

            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none"
              />

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>

                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex justify-between items-center"
                >
                  <span>
                    {form.service || "Select a Service"}
                  </span>

                  <FaChevronDown
                    className={`transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 shadow-xl overflow-hidden z-50">

                    {services.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelect(service)}
                        className={`px-4 py-3 cursor-pointer hover:bg-blue-600 hover:text-white transition ${
                          form.service === service
                            ? "bg-blue-100 dark:bg-blue-900"
                            : ""
                        }`}
                      >
                        {service}
                      </div>
                    ))}

                  </div>
                )}

              </div>

              {selectedMsg && (
                <div className="bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-xl p-3">
                  Selected Service: <b>{selectedMsg}</b>
                </div>
              )}

              <textarea
                rows="5"
                name="message"
                placeholder="Write Your Message..."
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700">

            <h2 className="text-2xl font-bold mb-6">
              Contact Info
            </h2>

            <div className="space-y-5">

              <a
                href="https://wa.me/8801816066829"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp className="text-3xl text-green-500" />

                <div>
                  <p className="text-sm opacity-70">
                    WhatsApp
                  </p>

                  <h3 className="font-semibold">
                    +8801816066829
                  </h3>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-cyan-600 hover:text-white transition">
                <FaPhoneAlt className="text-2xl text-cyan-500" />

                <div>
                  <p className="text-sm opacity-70">
                    Mobile
                  </p>

                  <h3 className="font-semibold">
                    +8801816066829
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-purple-600 hover:text-white transition">
                <FaEnvelope className="text-2xl text-yellow-500" />

                <div>
                  <p className="text-sm opacity-70">
                    Email
                  </p>

                  <h3 className="font-semibold break-all">
                    yourgmail@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-pink-600 hover:text-white transition">
                <FaFlag className="text-2xl text-red-500" />

                <div>
                  <p className="text-sm opacity-70">
                    Nationality
                  </p>

                  <h3 className="font-semibold">
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