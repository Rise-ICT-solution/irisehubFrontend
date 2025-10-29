import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuCalendarCheck } from "react-icons/lu";
import { BsRocketTakeoff } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoWoman } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import ImpactBgImg from "../../Images/HomeComp-Images/Pattern.jpg";
import { FaCaretUp } from "react-icons/fa6";
import CountUp from "react-countup";

const impactsData = [
  { Icons: HiOutlineDesktopComputer, value: 28, suffix: "+", label: "Programs" },
  { Icons: LuCalendarCheck, value: 350, suffix: "+", label: "Events" },
  { Icons: BsRocketTakeoff, value: 400, suffix: "+", label: "Impacted Startups" },
  { Icons: GiTakeMyMoney, value: 720000, prefix: "$", suffix: "+", label: "Fund Released" },
  { Icons: FaChalkboardTeacher, value: 80, suffix: "+", label: "Mentors" },
  { Icons: IoIosPeople, value: 25000, suffix: "+", label: "Participants" },
  { Icons: FaPeopleGroup, value: 3000, suffix: "+", label: "Youth Empowered" },
  { Icons: FaHandshake, value: 50, suffix: "+", label: "Partners" },
  { Icons: FaHandHoldingUsd, value: 10000000, prefix: "$", suffix: "+", label: "Investment Raised" },
  { Icons: IoWoman, value: 300, suffix: "+", label: "Women Invested" },
  { Icons: FaRegFileAlt, value: 45000, suffix: "+", label: "Applications Received" },
  { Icons: FaPeopleRoof, value: 40000, suffix: "+", label: "iRise Community Members" },
];

function Impacts() {
  return (
    <div className="w-full relative lg:h-[550px] h-full py-12">
      {/* Background */}
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={ImpactBgImg}
        alt=""
      />
      <div className="w-full h-full absolute top-0 bg-white/50"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-white px-4 md:px-10 lg:px-20">
        {/* Title */}
        <div className="flex relative items-center mb-12">
          <div className="w-[55px] h-[55px] absolute md:left-[-20px] left-10 -top-4 md:top-0 border-[1.5px] border-white/80 skew-x-[-20deg]  md:block"></div>
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl z-10 font-bold text-iriseColor px-4">
            OUR IMPACT ON LOCAL ECOSYSTEM
          </h1>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:flex mt-40 w-full justify-center items-center">
          <div className="w-full h-[5px] rounded-full flex items-center justify-between bg-iriseColor relative">
            {impactsData.map((impact, i) => {
              const Icon = impact.Icons;
              return (
                <div key={i} className="relative flex flex-col items-center">
                  {/* Circle Number */}
                  <div className="w-[40px] h-[40px] relative bg-iriseColor rounded-full text-white text-lg font-bold flex items-center justify-center z-10">
                    {i + 1}
                    <FaCaretUp
                      className={`${
                        i % 2 === 0
                          ? "mt-[40px] rotate-180"
                          : "-mt-[40px]"
                      } absolute text-iriseColor`}
                    />
                  </div>

                  {/* Info Block */}
                  <div
                    className={`absolute flex flex-col items-center ${
                      i % 2 === 0 ? "top-16" : "bottom-16"
                    }`}
                  >
                    <Icon className="text-4xl mb-2 text-iriseColor" />
                    <div className="text-center">
                      <h1 className="font-semibold text-xl text-iriseColor">
                        <CountUp
                          end={impact.value}
                          prefix={impact.prefix || ""}
                          suffix={impact.suffix || ""}
                          duration={4}
                          separator=","
                        />
                      </h1>
                      <p className="text-sm text-iriseColor">{impact.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:hidden mt-8">
          {impactsData.map((impact, i) => {
            const Icon = impact.Icons;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-black/10 p-4 rounded-lg"
              >
                <Icon className="text-3xl md:text-4xl text-iriseColor mb-2" />
                <h1 className="font-bold text-lg md:text-xl text-iriseColor">
                  <CountUp
                    end={impact.value}
                    prefix={impact.prefix || ""}
                    suffix={impact.suffix || ""}
                    duration={4}
                    separator=","
                  />
                </h1>
                <p className="text-sm text-iriseColor">{impact.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Impacts;
