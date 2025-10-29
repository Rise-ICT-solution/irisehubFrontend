import RiseAcademy from "../../Images/About-Images/Rise Academy.png"
import AWE from "../../Images/About-Images/AWE.png"
import BICSomali from "../../Images/About-Images/BIC Somali.png"
import Dalbile from "../../Images/About-Images/Dalbile.png"
import IFFS from "../../Images/About-Images/IFFS.png"
import Kobciye from "../../Images/About-Images/Kobciye.png"
import Minbar from "../../Images/About-Images/Minbar.png"
import TCI from "../../Images/About-Images/TCI.png"
import MogadishuTech from "../../Images/About-Images/Mogadishu Tech Summit.png"
import { IoIosArrowDropright } from "react-icons/io";

function EcosystemSection (){
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
    return <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 px-8 mx-auto max-w-7xl">
        {
            items.map((company,index) => (
                    <div className="group flex flex-col md:flex-row transition-all transform hover:scale-105 duration-700  items-start p-6 border gap-4 rounded-lg shadow-md border-gray-800">
                        <div className=" md:w-[130px] w-[90px] h-[90px] md:h-[130px] relative shadow rounded-md flex items-center p-2 overflow-hidden justify-center border-gray-800 ">
                            <img className="w-full h-full object-contain" src={company.Image} alt={company.Name} />
                            <div className="w-full h-full bg-black/30 inset- opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center absolute top-0">
                                <IoIosArrowDropright className="text-4xl text-white" />
                            </div>
                        </div>
                        <div className="md:flex-1 flex-">
                            <h1 className="text-xl font-semibold"> {company.Name} </h1>
                            <p className="text-gray-800 text-md mt-2 "> {company.Desc} </p>

                        </div>
                    </div>

            ))
        }
    </div>
}
export default EcosystemSection    
