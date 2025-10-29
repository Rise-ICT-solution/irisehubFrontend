import VR from "../../Images/HomeComp-Images/VR.jpg";
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg";
import { FaRegCalendar } from "react-icons/fa6";

function SinglePost() {
  return <div className="w-[300px] h-[400px] bg- rounded-md">
    <img className="w-full h-[200px] rounded-xl object-cover" src={VR} alt="Post" />
    <div className="flex justify-between items-center mt-2 ">
      <h1 className="text-[15px] py-[1px] rounded-full flex items-center gap-1 "> <div className="w-[5px] h-[5px] rounded-full bg-black"></div> Pioneers Podcasts</h1>
      <div className="flex gap-1 items-center">
        <FaRegCalendar className="text-[14px] " />
        <h1 className="text-[14px] text-gray-800">12/02/2025</h1>
      </div>
    </div>
    <h1 className="text-[16px] leading-[20px] mt-2 font-semibold"> PIONEERS — the podcast by INNOVX that explores innovation and its impact across industries </h1>
    <p className="mt-2">PIONEERS is not just another podcast; it’s a deep dive into the fascinating world of innovation and the ways it influences every corner of our society.,</p>

  </div>
}
export default SinglePost;