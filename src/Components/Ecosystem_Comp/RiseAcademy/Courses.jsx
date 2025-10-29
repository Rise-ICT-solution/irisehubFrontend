import { FaArrowRight } from "react-icons/fa6";

function CoursesSection() {
  const Courses = [
    {
      Title: "Frontend Development",
      Category: "Web Development",
      Desc: "Learn HTML, CSS, JavaScript, and modern frameworks like React to build interactive user interfaces.",
    },
    {
      Title: "Backend Development",
      Category: "Web Development",
      Desc: "Master Node.js, Express, databases, and APIs to build scalable server-side applications.",
    },
    {
      Title: "Full Stack Development",
      Category: "Complete Track",
      Desc: "Combine frontend and backend skills to become a full-stack developer, from design to deployment.",
    },
    {
      Title: "Figma Design",
      Category: "UI/UX Design",
      Desc: "Learn how to design stunning user interfaces, prototypes, and product experiences with Figma.",
    },
    {
      Title: "Mobile App Development",
      Category: "Software Engineering",
      Desc: "Build cross-platform mobile applications using React Native and modern mobile frameworks.",
    },
    {
      Title: "Software Engineering",
      Category: "Advanced Track",
      Desc: "Gain in-depth knowledge of software design patterns, architecture, and engineering practices.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16">
      {/* Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Our Courses
      </h1>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 bg-white"
          >
            {/* Title & Category */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {course.Title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{course.Category}</p>
              <hr className="my-4 border-gray-300" />
              <p className="text-gray-600 leading-relaxed">{course.Desc}</p>
            </div>

            {/* Button */}
            <button className="mt-6 flex items-center gap-2 text-iriseColor font-semibold hover:gap-3 transition-all">
              Register Now <FaArrowRight className="text-sm" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;
