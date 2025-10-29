import Students1 from "../../../Images/Ecosystem-Images/RiseAcademy/Students1.jpg";
import Students2 from "../../../Images/Ecosystem-Images/RiseAcademy/Students2.jpg";

function Service() {
  return (
    <div className="space-y-20 mt-20 px-5 md:px-16 lg:px-28">
      
      {/* First Section */}
      <div className="flex flex-col md:flex-row gap-7 items-center">
        <div className="w-full md:w-[450px] h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <img
            src={Students1}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            alt=""
          />
        </div>
        <div className="w-full md:w-[500px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-5">
            Future-Ready Skills
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Through comprehensive, market-aligned skills training programs, we empower learners to unlock new career possibilities with enhanced confidence, practical expertise, and long-term capability. By aligning our curriculum with evolving industry demands, we ensure that every learner is equipped not just to meet today’s challenges, but to thrive in tomorrow’s workforce.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row-reverse gap-7 items-center">
        <div className="w-full md:w-[450px] h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <img
            src={Students2}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            alt=""
          />
        </div>
        <div className="w-full md:w-[500px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-5">
            Empowering Learners
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We foster an environment where learners gain not only technical skills but also critical thinking, problem-solving, and collaborative abilities. Our approach prepares students to navigate real-world challenges confidently, innovate effectively, and contribute meaningfully to the tech ecosystem.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Service;
