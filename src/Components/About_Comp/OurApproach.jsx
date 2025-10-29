import { HiArrowSmRight } from "react-icons/hi";
import VissionImg from "../../Images/About-Images/Vision Image.jpg";
import iRisehub from "../../Images/About-Images/iRisehub.jpg";
import Invest from "../../Images/About-Images/Invest.jpg";

function OurApproach() {
  const ApproachData = [
    {
      image: VissionImg,
      title: "Our Approach",
      desc: "We turn bold visions into high-impact ventures. Our unique model relies on three strategic pillars: innovation, collaboration, and sustainability ensuring every idea grows into lasting value.",
      btn: "",
    },
    {
      image: Invest,
      title: "From Vision to Value",
      desc: "We turn concepts into high-performing businesses. Through innovation, governance, and growth-focused execution, we deliver ventures that inspire trust and drive measurable impact.",
      btn: "Start Your Innovation Journey",
    },
    {
      image: iRisehub,
      title: "Fueling Growth Through Investment",
      desc: "We strategically invest in visionary startups and high-potential businesses. By providing capital, mentorship, and industry expertise, we empower founders to scale their ventures and unlock long-term value.",
      btn: "SEE HOW WE INVEST FOR IMPACT",
    },
  ];

  return (
    <div className="w-full mt-20 px-5 md:px-20">
      {ApproachData.map((data, index) => (
        <div key={index} className="lg:mb-20 mb-10 lg:ml-20">
          {/* Section Title & Description */}
          <div className="lg:ml-20">
            <h3 className="text-[18px] md:text-[25px] lg:text-[22px] font-semibold text-gray-500">
              {data.title}
            </h3>
            <h1 className="md:text-[22px] lg:text-[30px] leading-[25px] md:leading-[40px] mt-4 md:mt-6 max-w-full md:max-w-[750px]">
              {data.desc}
            </h1>
          </div>

          {/* Image */}
          {data.image && (
            <div className="w-full lg:ml-0 md:-ml-12 md:w-[700px] relative h-[250px] md:h-[450px] rounded-xl mt-10 md:mt-20 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={data.image}
                alt={data.title}
              />
            </div>
          )}

          {/* Button */}
          {data.btn && (
            <button className="primaryBtn bg-black group py-4 text-white mt-10">
              {data.btn}
              <div className="primaryBtnArrayIcon bg-white w-[28px] h-[28px] md:w-[35px] md:h-[35px] border-white group-hover:text-white mr-2 text-black group-hover:bg-transparent">
                <HiArrowSmRight />
              </div>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default OurApproach;
