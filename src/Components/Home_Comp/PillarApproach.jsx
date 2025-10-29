import { useEffect, useState } from "react";
import Technology from "../../Images/HomeComp-Images/TECHNOLOGY.jpg"
import Innovation from "../../Images/HomeComp-Images/Innovation.jpg"
import Diversity from "../../Images/HomeComp-Images/Diversity.jpg"
import Community from "../../Images/HomeComp-Images/Community.jpg"
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function PillarApproach(){
    const Data = [
        {
            Image: Technology, 
            Title : "Technology",
            Desc : "We believe, the path for digital economic growth lies through collaboration and the use of technology in an effective way.  ", 
            Link : "#"
        },
        {
            Image: Innovation, 
            Title : "Innovation",
            Desc : "To produce innovative ideas and solutions, we are guided by thinking-outside-the box mentality.", 
            Link : "#"
        },
        {
            Image: Diversity, 
            Title : "Diversity",
            Desc : "We strive to bring on-board everyone who wants to be part on this journey without any descrimination..", 
            Link : ""
        },
        {
            Image: Community, 
            Title : "Community",
            Desc : "Building and nurturing a community with diverse skills and common agenda", 
            Link : ""
        },
    ]
    const [index,setIndex] = useState(0)
    useEffect (() => {
        const Interval = setInterval(() => {
            setIndex((prevIndex) => prevIndex === Data.length -1 ? 0 : prevIndex + 1);
        },4000)
    },[Data.length])
    const Current = Data[index]
    return <div className="w-full md:px-[80px] px-8 relative ">
        {/* top section */}
        <div className="w-full flex justify-center   relative">
            <div className="lg:w-[220px] lg:h-[220px] w-[150px] h-[150x] absolute lg:left-40  skew-[-20deg] rotate-12 bg-iriseColor opacity-40 "></div>
            <div className="md:w-[700px] w-[350px] mt-7 lg:ml-30 absolute z-1  ">
                <h1 className="font-bold text-[30px]"> Our Approach </h1>
                <p className=" md:text-[30px] text-[18px] mt-5 md:leading-[40px]"> By merging technology with entrepreneurship, we transform challenges into opportunities. Our approach empowers youth and women to lead ventures that create impact and resilience.</p>
            </div>
        </div>
        {/* Images section */}
        <div className="w-full lg:h-[800px] md:h-[600px]  h-[450px] relative rounded-2xl  overflow-hidden justify-center flex mt-70 md:mt-86">
            <img className="w-full transition-all duration-800 ease-in-out h-full object-cover" src={Current.Image} alt="" />
            <div className="bg-black/20 w-full h-full object-cover  flex flex-col lg:justify-center md:pt-20 pt-10 items-center  absolute top-0 ">
                <div className=" lg:w-[650px] md:w-[500px] w-[350px] flex px-10 md:px-0 flex-col items-center text-center ">
                    <div className="flex relative md:ml-30 ml-20">
                        <div className="md:w-[70px] w-[50px]  md:h-[70px] h-[50px] ml-10 border-[1.5px] border-white/80 skew-x-[-20deg] "></div>
                        <h1 className="md:text-[40px] text-[30px] uppercase  font-bold absolute right-6 text-center text-iriseColor"> {Current.Title}</h1>
                    </div>
                    <p className="md:text-[21px]  mt-10 text-white"> {Current.Desc}. </p>
                </div>
                    <Link to={Current.Link} >
                        <button className="primaryBtn bg-iriseColor text-white md:py-4 md:px-16 md:pl-6 px-16 pl-4 py-3 mt-7 group "> DISCOVER MORE 
                            <div className="primaryBtnArrayIcon bg-white border-white group-hover:text-white text-iriseColor group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                        </button>
                    </Link>
                    <div className="flex flex-wrap md:flex-nowrap md:gap-10 px-8 gap-5 justify-between lg:absolute md:mt-20 mt-10 lg:mt-0 lg:bottom-20">
                    {Data.map((item,index) => (
                        <div key={index} className={` lg:w-[150px] md:w-[110px] w-[90px] text-center text-white  font-semibold leading-[20px] pb-2 border-b-4  ${ item === Current ? "border-iriseColor " : "border-b-white"} `}>
                            <h1> {item.Title} </h1>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    </div>
}
export default PillarApproach