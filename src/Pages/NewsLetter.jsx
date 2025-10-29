import { useEffect, useState } from "react";
import Footer from "../Components/Footer"
import Section1 from "../Components/NewsEvents_Comp/Section1"
import Section2 from "../Components/NewsEvents_Comp/Section2"
import PublicHeroSection from "../Components/PublicHeroSection"
import NewsMoreInfo from "../Components/Home_Comp/NewsMoreInfo";


function NewsLetter (){
      const [ShowNewsInfo, setShowNewsInfo] = useState(false);
        const [selectedNews, setSelectedNews] = useState(null);
    
        const HandleOpenNews = (news) => {
            setSelectedNews(news);
            setShowNewsInfo(true);
        };
        const HandleCloseNews = () => {
            setShowNewsInfo(false);
            setSelectedNews(null);
        }
    
        useEffect(() => {
            if (ShowNewsInfo){
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden")
            }
        })
    
    return <div>
        <PublicHeroSection />
        <div className="w-full bg-[#F3F4F4]">
            <div className="mx-auto max-w-7xl">
                <Section1 />
                <Section2 onEventClicked={HandleOpenNews} />
            </div>
        </div>
        <Footer />
         {
            ShowNewsInfo && (
                <div className="w-full h-screen  z-10 bg-black/80 fixed top-0">
                    <NewsMoreInfo data={selectedNews} onClose = {HandleCloseNews} />
                </div>
            )
        }
    </div>
}
export default NewsLetter