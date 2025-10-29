import CoursesSection from "../../Components/Ecosystem_Comp/RiseAcademy/Courses"
import Impacts from "../../Components/Ecosystem_Comp/RiseAcademy/Impacts"
import RiseIntro from "../../Components/Ecosystem_Comp/RiseAcademy/RiseIntro"
import Service from "../../Components/Ecosystem_Comp/RiseAcademy/Service"
import Footer from "../../Components/Footer"
import PublicHeroSection from "../../Components/PublicHeroSection"
import { FaWhatsappSquare } from "react-icons/fa";


function RiseAcademy (){
    return <div className="">
        <PublicHeroSection />
        <div>
            <a href="https://wa.me/+252618020120"><FaWhatsappSquare className="text-5xl fixed bottom-8 right-4 hover:text-green-900 text-green-500 z-2" /></a>
        </div>
        <RiseIntro />
        <Impacts />
        <Service />
        <CoursesSection />
        <Footer />

    </div>
}
export default RiseAcademy