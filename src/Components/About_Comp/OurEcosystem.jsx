import AWE from "../../Images/About-Images/AWE.png";
import BICSomali from "../../Images/About-Images/BIC Somali.png";
import Dalbile from "../../Images/About-Images/Dalbile.png";
import IFFS from "../../Images/About-Images/IFFS.png";
import Kobciye from "../../Images/About-Images/Kobciye.png";
import Minbar from "../../Images/About-Images/Minbar.png";
import TCI from "../../Images/About-Images/TCI.png";
import RiseAcademy from "../../Images/About-Images/Rise Academy.png";
import MogadishuTech from "../../Images/About-Images/Mogadishu Tech Summit.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function OurEcosystem() {
  const EcoImages = [
    AWE,
    BICSomali,
    Dalbile,
    IFFS,
    Kobciye,
    Minbar,
    TCI,
    MogadishuTech,
    RiseAcademy,
  ];

  return (
    <div className="w-full mt-0 px-5 md:px-10 lg:px-20">
      {/* Ecosystem Heading */}
      <div className="relative">
        <div className="flex items-center w-fit relative">
          <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-gray-800">
            Our Ecosystem
          </h3>
          <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] ml-3 border border-gray-400 skew-[-20deg]" />
        </div>

        {/* Description */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 mt-6 leading-[28px] md:leading-[32px] max-w-4xl">
          At iRise Hub, our ecosystem connects people, ideas, and opportunities.
          We empower youth, entrepreneurs, and innovators through programs,
          spaces, and partnerships that fuel growth, resilience, and lasting
          impact.
          <br />
        </p>

        <div className="flex items-center justify-between px-2  mt-6">
            <h1 className="block font-semibold text-[] md:text-[22px] text-gray-800 ">
                Our ecosystem includes:
            </h1>

            {/* Button */}
            <Link to="/ecosystem">
            <button className="primaryBtn bg-black pl-3 text-white flex items-center gap-10  px-12 py-3  rounded-full shadow-md hover:bg-gray-900 transition-all group">
                View More
                <div className="primaryBtnArrayIcon w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white text-black group-hover:bg-transparent group-hover:text-white border border-white ">
                <FaArrowRight className="text-[14px]" />
                </div>
            </button>
            </Link>
        </div>
      </div>

      {/* Ecosystem Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {EcoImages.map((eco, index) => (
          <div
            key={index}
            className="w-full h-[90px] md:h-[110px] flex items-center justify-center p-3 border border-gray-300 rounded-xl bg-white hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              className="max-h-full max-w-full object-contain"
              src={eco}
              alt={`Ecosystem partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurEcosystem;
