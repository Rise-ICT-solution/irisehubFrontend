import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import Beersamo from "../../Images/StartUps-Images/Beersamo.png";
import BulshoBile from "../../Images/StartUps-Images/Bulso Bille.png";
import Daldhis from "../../Images/StartUps-Images/Daldhis.png";
import DoogDoon from "../../Images/StartUps-Images/Doogdoon.png";
import Hubaal from "../../Images/StartUps-Images/Hubaal.png";
import Hiigsi from "../../Images/StartUps-Images/Higsi.png";
import DanKeyd from "../../Images/StartUps-Images/Dankeyd.png";
import Kulmis from "../../Images/StartUps-Images/Kulmis.png";

function SectionBottom() {
  const StartUpsInfo = [
    {
      Image: Hubaal,
      Title: "Hubaal",
      Category: "Service Industry",
      Desc: "Hubbal provides decor and event management for weddings, birthdays, and engagement parties.",
    },
    {
      Image: Daldhis,
      Title: "Daldhis",
      Category: "Construction",
      Desc: "A growing business manufacturing high-quality bricks for safe, affordable, and sustainable development.",
    },
    {
      Image: Hiigsi,
      Title: "Hiigsi",
      Category: "Entrepreneurship",
      Desc: "Supporting the entrepreneurial nature of the Somali community by empowering youth.",
    },
    {
      Image: DanKeyd,
      Title: "Dankeyd",
      Category: "Event Services",
      Desc: "Providing decor and event management for weddings, birthdays, and celebrations.",
    },
    {
      Image: Kulmis,
      Title: "Kulmis",
      Category: "Construction",
      Desc: "Manufactures durable, high-quality building bricks to support modern infrastructure and safe housing.",
    },
    {
      Image: BulshoBile,
      Title: "Bulsho Bile",
      Category: "Entrepreneurship",
      Desc: "Empowering Somali youth by fostering entrepreneurial opportunities and innovation.",
    },
    {
      Image: Beersamo,
      Title: "Beersamo",
      Category: "Agriculture",
      Desc: "Innovating agricultural solutions that strengthen food security and sustainable farming practices.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-12">
      {StartUpsInfo.map((data, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-16"
        >
          {/* Image */}
          <div className="w-full md:w-[250px] h-[200px] rounded-xl shadow-md overflow-hidden">
            <img
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
              src={data.Image}
              alt={data.Title}
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold">{data.Title}</h1>
            <hr className="border-gray-300 my-4" />
            <h2 className="text-lg md:text-xl text-gray-700 mb-4">
              {data.Category}
            </h2>
            <p className="text-gray-600 leading-relaxed">{data.Desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionBottom;
