import Solar from "../../Images/HomeComp-Images/Solar.jpg"
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg"
import VR from "../../Images/HomeComp-Images/VR.jpg"
import Factory from "../../Images/HomeComp-Images/Factory.jpg"
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Sectors() {
    const Section3 = [
        {
            Image : Solar,
            Title : "Technology",
            Desc : "We believe digital growth comes through collaboration and smart use of technology",
            Link : "#",
        },
        {
            Image : Agri,
            Title : "Agriculture & Water",
            Desc : "Ulocking the potential of Morocco’s mineral resources to support the energy transition and sustainable agriculture.",
            Link : "#",
        },
        {
            Image : Factory,
            Title : "Energy",
            Desc : "Pioneering businesses and ecosystems for a sustainable energy future",
            Link : "#",
        },
        {
            Image : VR,
            Title : "OTHERS",
            Desc : "Going further to unlock new opportunities for transformation.",
            Link : "#",
        },
    ]
    const [index, setIndex] = useState(0)
    useEffect (() => {
        const Interval = setInterval(() => {
            setIndex((prev) => prev === Section3.length -1 ? 0 : prev + 1);
        },4000)
    },[Section3.length])
    const Current = Section3[index]
  return (
    <div className="">
        <div class="mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-green-500/50 -mt-40 ml-30 absolute -z-10 w-[500px] h-[500px] "></div>
        <div className="w-[550px] ml-50">
            <p className="text-[20px] text-gray-600  font-semibold"> Our Impact SO Far </p>
            <h1 className="text-[28px] font-semibold mt-4"> We're more than a tech hub — we're a vibrant community of innovators, entrepreneurs, students, officials, and SMEs tackling Somalia’s socio-economic challenges. </h1>
        </div>
        {/* Section Two */}
        <div className="w-full mt-20 relative flex flex-col items-center h-[600px]">
            <div className="w-full h-full  ">
            <img
            className="w-full h-full sticky  object-cover"
            src={Current.Image}
            alt=""
            style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
            }}
            />            </div>
            <div className="absolute mt-30 scrolly-y-auto h-screen  top-0 w-[750px] ">
                <h1 className="text-[80px] text-white font-bold"> {Current.Title} </h1>
                <p className="text-[22px] text-white mt-3 font-medium"> {Current.Desc}. </p>
                 <Link to={Current.Link}>
                    <button className="primaryBtn bg-black mt-7 group text-white py-4 text-[15px] pl-5 "> VIEW SECTOR 
                        <div className="primaryBtnArrayIcon bg-white border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
}
export default Sectors;
