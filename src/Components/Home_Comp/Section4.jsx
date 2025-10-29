import WomanTablet from "../../Images/HomeComp-Images/Section4Summit.jpg"
import { HiArrowSmRight } from "react-icons/hi";

function Section4 (){
    return <div className="w-full lg:pt-50 pt-30 px-5  flex flex-col items-center relative justify-center ">
        <div className="md:w-[700px] lg:ml-50">
            <h1 className="text-black font-semibold text-[22px]"> Come Build With Us </h1>
            <h2 className="text-[30px] font-semibold leading-[40px] text-iriseColor mt-4"> Rise Stronger, Rise Together. </h2>
            <p className="mt-4 text-[18px] "> Here, collective power becomes reality. At iRiseHub, every innovator and entrepreneur finds a platform to grow, connect, and build solutions that shape resilient communities and sustainable futures. </p>
            <button className="primaryBtn bg-iriseColor mt-7 group text-white py-3 text-[15px] pl-5 "> CAREERS 
                <div className="primaryBtnArrayIcon bg-white border-white w-9 h-9 group-hover:text-white text-iriseColor group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
            </button>
        </div>
        <div className="md:w-[700px] md:h-[450px] mt-10  md:mt-22 overflow-hidden group rounded-2xl">
            <img className=" w-full h-full  transition-all duration-300 group-hover:scale-110 ease-in-out object-cover" src={WomanTablet} alt="" />
        </div>
    </div>
}
export default Section4