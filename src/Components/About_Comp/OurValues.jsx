import OurValuesSmallBoxes from "./OurValuesBoxes"
import { BsArrowRightShort } from "react-icons/bs";
import RiseAcademy from "../../Images/About-Images/Rise Academy.png"
import AWE from "../../Images/About-Images/AWE.png"
import BICSomali from "../../Images/About-Images/BIC Somali.png"
import Dalbile from "../../Images/About-Images/Dalbile.png"
import IFFS from "../../Images/About-Images/IFFS.png"
import Kobciye from "../../Images/About-Images/Kobciye.png"
import Minbar from "../../Images/About-Images/Minbar.png"
import TCI from "../../Images/About-Images/TCI.png"
import MogadishuTech from "../../Images/About-Images/Mogadishu Tech Summit.png"


function Ourvalues (){
      const items = [
    { Name: "Mogadishu Tech Summit", Desc: "Somalia’s largest technology and innovation event, connecting entrepreneurs, investors, and policymakers.", Image: MogadishuTech },
    { Name: "Rise Academy", Desc: "A specialized learning hub focused on coding and programming, empowering youth with digital skills for the future of work.", Image: RiseAcademy },
    { Name: "Minbar", Desc: "A media and knowledge-sharing platform where news, updates, speeches, and thought pieces from politicians, government leaders, and experts are shared to inform and engage the ecosystem.", Image: Minbar },
    { Name: "AWE (Academy for Women Entrepreneurs)", Desc: "A global program empowering Somali women with entrepreneurship training, networking, and access to finance and markets.", Image: AWE },
    { Name: "Dalbile Youth Initiative", Desc: "Equipping Somali youth with funding, mentorship, and training in health, agriculture, environment, and tourism.", Image: Dalbile },
    { Name: "BIC (Business Innovation Center)", Desc: "An incubation and innovation hub providing startups with mentorship, resources, and funding pathways to scale.", Image: BICSomali  },
    { Name: "KOBCIYE Program", Desc: "A digital innovation platform that drives entrepreneurship and tech-based problem-solving for Somalia’s digital economy.", Image: Kobciye },
    // { Name: "A Civic Space for Participation", Desc: "Safe centers providing vocational training, ICT, health counseling, and youth programs with 5,000+ youth trained.", Image:  },
    { Name: "Innovative for Food Security (IFFS)", Desc: "Agri-tech solutions such as greenhouses, drip irrigation, and windpumps to improve food production and sustainability.", Image: IFFS },
    { Name: "TVET Centers Initiative", Desc: "Regional hubs delivering technical training, digital literacy, and life skills for young people.", Image: TCI },
  ];

  // Duplicate items for seamless scroll
  const duplicated = [...items, ...items];
    return <div className="overflow-hidden">
            {/* <div className="w-full flex justify-center mt-30  relative">
                <div className="w-[300px] h-[300px]  skew-[-20deg] rotate-12 bg-gray-400/20 "></div>
                <div className="w-[700px] mt-7 -ml-10  ">
                    <h1 className="font-bold text-[30px] text-gray-400"> Our Values  </h1>
                    <p className="font-semibold text-[30px] mt-5 leading-[40px]"> At INNOVX, our values define who we are and how we operate. These principles shape our culture, fuel our ambition, and unite our people across every initiative.</p>
                    <p className="text-[18px] mt-3"> We foster a culture of collaboration, innovation, and excellence—where every team member is empowered to drive impact.</p>
                </div>
            </div> */}
            <div className="w-full flex relative animate-scroll gap-3 mt-0">
                {duplicated.map((item, i) => (
                    <div className="flex-shrink-0 w-1/4" key={i}>
                        <OurValuesSmallBoxes Name={item.Name} Desc={item.Desc} Image={item.Image} />
                    </div>
                ))}
            </div>
            {/* Arrows right and left */}
                {/* <div className="flex gap-4 absolute top-48 right-0">
                    <div className="w-[30px] h-[30px] rounded-full border-black border-2 text-black flex items-center hover:bg-black hover:text-white">
                        <BsArrowRightShort className="text-3xl rotate-180" />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full border-black border-2 text-black flex items-center hover:bg-black hover:text-white">
                        <BsArrowRightShort className="text-3xl" />
                    </div>
                </div> */}
        </div>
}
export default Ourvalues