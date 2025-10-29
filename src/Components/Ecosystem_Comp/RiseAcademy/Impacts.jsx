import ImpactsBg from "../../../Images/Ecosystem-Images/RiseAcademy/ImpactsBg.jpg";
import CountUp from "react-countup";

function Impacts() {
  const ImpactsData = [
    { Title: "Graduates", Number: 500 },
    { Title: "Coding Bootcamps", Number: 11 },
    { Title: "Campuses", Number: 3 },
    { Title: "Events", Number: 8 },
  ];

  return (
    <div className="w-full relative mt-20">
      {/* Background Image */}
      <img
        className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
        src={ImpactsBg}
        alt="Impacts Background"
      />

      {/* Overlay */}
      <div className="absolute top-0 w-full h-full bg-[#140E3A]/70 flex flex-col items-center px-5 md:px-16 lg:px-32 py-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
          Our Impacts
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white text-center max-w-3xl mt-4">
          We’re proud of the lives we’ve transformed, the campuses we’ve built, and the community we’ve grown.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center md:justify-around gap-6 mt-5 md:mt-10 w-full">
          {ImpactsData.map((item, idx) => (
            <div key={idx} className="text-center text-white min-w-[120px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin">
                <CountUp end={item.Number} duration={6} separator="," />
              </h1>
              <p className="font-medium text-lg sm:text-xl mt-2">{item.Title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Impacts;
