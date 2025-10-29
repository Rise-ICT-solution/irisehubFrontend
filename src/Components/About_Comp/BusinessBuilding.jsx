import { HiArrowSmRight } from "react-icons/hi";
import Building from "../../Images/About-Images/Building.jpg"
function BusinessBuilding (){
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-20 lg:mt-40">
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                {/* 16:9 Aspect Ratio Container */}
                <iframe 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/Tymk-39Unh8?autoplay=1&mute=1&loop=1&playlist=Tymk-39Unh8" 
                    allow="autoplay" 
                    allowFullScreen
                    title="iRisehub Office 2025"
                />
            </div>
        </div>
    )
}
export default BusinessBuilding