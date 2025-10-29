import { PiCaretDownBold } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Solar from "../../Images/HomeComp-Images/Solar.jpg";
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg";
import VR from "../../Images/HomeComp-Images/VR.jpg";
import Factory from "../../Images/HomeComp-Images/Factory.jpg";
// from backend
import axios from 'axios'
// import { backendUrl } from "../../App";

// {onEventClicked}
function Section2 (){
      const EventInfo = [
  {
    Highlight: "Pioneers Podcasts",
    Title:
      "PIONEERS — the podcast by INNOVX that explores innovation and its impact across industries",
    Description:
      "PIONEERS is not just another podcast; it’s a deep dive into the fascinating world of innovation and the ways it influences every corner of our society. Each episode invites thought leaders, visionary entrepreneurs, and creative thinkers to share their stories and unique perspectives on the transformative power of ideas. Whether it’s a new technological breakthrough, a groundbreaking social initiative, or an inspiring entrepreneurial journey, the conversations highlight how these innovations are shaping industries like healthcare, agriculture, education, and energy. Listeners gain both practical insights and inspirational takeaways, making the podcast a go-to source for anyone passionate about progress and change.",
    Image: VR,
    Date: "22/07/2025",
  },
  {
    Highlight: "Press release",
    Title:
      "MAVA hosts the 3rd edition of the Africa Forum on Investment in Agricultural Value Chains",
    Description:
      "The 3rd edition of the Africa Forum on Investment in Agricultural Value Chains, hosted by MAVA, marked a significant step forward for the continent’s agricultural sector. This year’s event brought together policymakers, industry leaders, investors, and grassroots entrepreneurs to discuss ways of improving agricultural production and distribution while prioritizing sustainability and inclusivity. Sessions explored the role of climate-smart farming, the integration of cutting-edge technology in agriculture, and the importance of fair trade practices. Key discussions also centered on financing models for smallholder farmers, partnerships to boost market access, and strategies to build resilient supply chains. The forum’s collaborative environment provided a platform for forging strategic partnerships, identifying emerging opportunities, and sharing success stories that inspire innovation in the sector. By connecting stakeholders from diverse backgrounds, the forum reinforced Africa’s position as a vital player in the global agricultural value chain, paving the way for sustainable growth, rural development, and long-term prosperity.",
    Image: Agri,
    Date: "10/07/2025",
  },
  {
    Highlight: "Corporate",
    Title: "International Women's Day - Culture where every voice counts",
    Description:
      "On International Women’s Day, our organization took the opportunity to celebrate the women who inspire progress and contribute to a culture of inclusivity. The event featured a vibrant mix of panel discussions, interactive workshops, and storytelling sessions where women from diverse professional backgrounds shared their journeys, challenges, and triumphs. From engineers and scientists to artists and entrepreneurs, their stories reflected resilience, leadership, and creativity. A central theme was the importance of creating a workplace where everyone’s voice is heard, regardless of gender or background. Participants explored strategies to break down barriers, mentor young professionals, and champion equality in leadership roles. The celebration was more than just a single-day event — it sparked ongoing initiatives such as mentorship programs, diversity-focused training, and community outreach projects aimed at empowering women across industries. Through these efforts, we are building a future where inclusivity is not just a value, but an everyday practice that shapes our organizational culture.",
    Image: Solar,
    Date: "22/07/2025",
  },
  {
    Highlight: "Pioneers Podcasts",
    Title:
      "INNOVX launches Athar Investment Fund: A dedicated impact Investment Fund for agriculture",
    Description:
      "The Athar Investment Fund by INNOVX represents a bold vision for the future of agriculture — one that is sustainable, inclusive, and deeply impactful. This dedicated fund aims to support businesses and initiatives that address critical challenges in the agricultural sector, from improving crop yields and reducing food waste to promoting fair labor practices and environmental conservation. By investing in companies committed to measurable social and environmental outcomes, the fund serves as both a catalyst for economic growth and a driver of positive change in rural communities. The launch event featured insights from agricultural experts, impact investors, and local farmers who shared real-world stories about the transformative potential of targeted funding. In addition to providing financial support, the Athar Investment Fund offers strategic guidance, access to cutting-edge technology, and networking opportunities to help entrepreneurs thrive. It is more than just a financial instrument — it is a movement to reshape food systems, uplift marginalized communities, and create a future where agriculture is a source of opportunity, innovation, and hope for generations to come.",
    Image: Factory,
    Date: "22/07/2025",
  },
];

    // From backend data
// const [getEvents,setGetEvents] = useState([])

//   const getAllEvents = async () => {
//     try {
//       const response = await axios.get(backendUrl + "/allEvents");
//       setGetEvents(response.data);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     getAllEvents();
//   }, []);


  const [CurrentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % EventInfo.length);
    }, 3000);
    return () => clearInterval(Interval);
  }, [EventInfo.length]);
    const [isOpen, setIsOpen] = useState(null )
    return <div className="pb-10 mx-auto max-w-7xl   ">
        <div className="flex ml-10 gap-5  mb-4">
            <div className=" w-[250px] relative " onMouseEnter={() => setIsOpen("news")} onMouseLeave={() => setIsOpen(false)}>
                <button className="w-full h-[50px] bg-white rounded-full flex items-center text-gray-500 text-lg justify-between px-7"> All news <PiCaretDownBold className="text-[22px]" /> </button>
                <div className="w-full px-2 absolute z-1">
                    {
                        isOpen === "news" && (

                        <ul className="w-full bg-white shadow-md py-5 leading-[35px] px-3 rounded-lg mt-3">
                            <li className="font-semibold mb-1"> All news </li>
                            <li className="border-b-1 hover:border-b-[2px] border-b-gray-200 hover:border-b-black"> Corporate </li>
                            <li className="border-b-1 hover:border-b-[2px] border-b-gray-200 hover:border-b-black"> Pioneers Podcasts </li>
                            <li className="border-b-1 hover:border-b-[2px] border-b-gray-200 hover:border-b-black"> News </li>
                            <li className="border-b-1 hover:border-b-[2px] border-b-gray-200 hover:border-b-black"> Press release </li>
                        </ul>
                    )
                }
                </div>
            </div>
            <div className=" w-[250px] relative " onMouseEnter={() => setIsOpen("recent")} onMouseLeave={() => setIsOpen(false)}>
                <button className="w-full h-[50px] bg-white rounded-full flex items-center text-gray-500 text-lg justify-between px-7"> Most recent <PiCaretDownBold className="text-[22px]" /> </button>
                <div className="w-full px-2 absolute z-1">
                    {
                        isOpen === "recent" && (
                            <ul className="w-full bg-white shadow-md py-5 leading-[35px] px-3 rounded-lg mt-3">
                                <li className="font-semibold"> Most Recent </li>
                                <li className="border-b-1 hover:border-b-[2px] border-b-gray-200 hover:border-b-black"> Alphapetical order </li>
                            </ul>
                    )
                }
                </div>
            </div>
        </div>
        <div className="w-full bg-white px-10 py-10">
            {
                EventInfo.map((event => (
                    <div key={event._id} onClick={() => onEventClicked(event)} className="flex justify-between mt-10 group border-b-1 pb-10 border-b-gray-300 "> 
                        <div className="w-[900px] ">
                            <div className="flex gap-3">
                                <button className="px-3 py-1 border text-[14px] rounded-full group-hover:bg-black duration-300 group-hover:text-white"> {event.Highlight} </button>
                                <p className="flex items-center gap-2"> <FaRegCalendar /> {event.Date}</p>
                            </div>
                            <p className="text-2xl font-bold text-gray-400 group-hover:text-black mt-3"> {event.Title}</p>
                        </div>
                        <div className="w-[130px] h-[130px] rounded-lg overflow-hidden"> 
                            <img className="w-full h-full transition-all duration-700 group-hover:scale-110 object-cover" src = {event.Image} />
                        </div>
                    </div>
            )))
        }
        </div>
    </div>
}
export default Section2