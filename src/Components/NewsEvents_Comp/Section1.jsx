import { FaRegCalendar } from "react-icons/fa6";
import { HiArrowSmRight } from "react-icons/hi";


function Section1 (){
    return <div className="px-35 max-w-7xl mx-auto h-screen pt-20 ">
        <div className="bg-white rounded-lg overflow-hidden flex w-full h-[400px] ">
            <div className="w-1/2">
                <img className="w-full h-full object-cover" src="https://images.prismic.io/innovx/aH-NY1GsbswqTIYt_pioneers.png?auto=format,compress&rect=120,0,1761,1333&w=1400&h=1060" alt="" />
            </div>
            <div className="w-1/2 py-10 px-10 flex flex-col items-center">
                <div className=" w-full flex justify-between items-center">
                    <h1 className="text-2xl font-semibold"> Latest </h1>
                    <button className="px-3 py-1 border rounded-full"> Pioneers Podcasts </button>
                    <p className="flex items-center gap-2"> <FaRegCalendar /> 12/02/2025</p>
                </div>
                <p className="text-3xl font-semibold mt-7"> PIONEERS — the podcast by INNOVX that explores innovation and its impact across industries. </p>
                 <button className="primaryBtn bg-black text-white mt-10 group "> Play Video 
                    <div className="primaryBtnArrayIcon  border-white border-2 group-hover:text-white text-white group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                </button>
            </div>
        </div>
    </div>
}
export default Section1