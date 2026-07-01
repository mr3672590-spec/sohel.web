function Services() {
  const services = [
    {
      title: "Shopify Store Design",
      desc: "Modern Shopify ecommerce store design with conversion focus.",
    },
    {
      title: "Landing Pages Design",
      desc: "High converting landing pages for business or product.",
    },
    {
      title: "Responsive Website",
      desc: "Desktop, tablet and mobile friendly full responsive design.",
    },
    {
      title: "Bug Fixing",
      desc: "Fixing UI/UX issues and website errors quickly.",
    },
    {
      title: "React Developer",
      desc: "Building dynamic frontend apps using React & Tailwind.",
    },
    {
      title: "Problem Solving",
      desc: "Clean logic solutions for frontend development problems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 md:px-20 py-12 transition-colors duration-300">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Services
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div key={index} className="relative group">

            {/* 🔵 Rotating Blue Glow Ring */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-60 blur-lg animate-spin-slow"></div>

            {/* Card */}
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-transparent group-hover:border-cyan-400 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <h2 className="text-xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Services;