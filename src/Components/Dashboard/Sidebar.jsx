import { MdOutlineArticle } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar (){
    return <div className="bg-[#0A1114] flex flex-col pt-5 h-screen">
        <div className="flex flex-col items-center">
            <FaRegUserCircle className="text-white text-[50px]" />
        <div className="text-white text-center mt-5">
            <h1 className="font-semibold"> Mohamed Ali </h1>
            <p> mohamedali@gmail.com</p>
        </div>
        </div>
        <div className="mt-10 px-4">
            <ul>
                <Link to="/"><li className="text-white flex items-center gap-2 text-[20px]"><MdDashboard className="text-[22px]" /> Overview  </li></Link>
                <Link to="/allPosts"><li className="text-white flex items-center gap-2 mt-3 text-[20px]"><MdOutlineArticle  className="text-[22px]" /> Posts  </li></Link>
                <Link to="/addPost"><li className="text-white flex items-center gap-2 mt-3 text-[20px]"><MdOutlineCreateNewFolder className="text-[22px]" /> Create Post  </li></Link>
            </ul>
        </div>
    </div>
}
export default Sidebar;