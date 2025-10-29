import Premiere from "../../Images/HomeComp-Images/Partners/Premiere Bank.jpg"
import IBS from "../../Images/HomeComp-Images/Partners/IBS Bank.png"
import FCA from "../../Images/HomeComp-Images/Partners/FCA.jpg"
import Ankageo from "../../Images/HomeComp-Images/Partners/Ankageo.jpg"
import Banadir from "../../Images/HomeComp-Images/Partners/Banadir.png"
import ICRC from "../../Images/HomeComp-Images/Partners/ICRC.png"
import Jamhuriya from "../../Images/HomeComp-Images/Partners/Jamhuriya.ico"
import Netherland from "../../Images/HomeComp-Images/Partners/Netherland.png"
import NOA from "../../Images/HomeComp-Images/Partners/NOA.jpg"
import SBSN from "../../Images/HomeComp-Images/Partners/SBSN.jpg"
import SOS from "../../Images/HomeComp-Images/Partners/SOS.png"
import UNHabitat from "../../Images/HomeComp-Images/Partners/UN Habitat logo.png"
import UNDP from "../../Images/HomeComp-Images/Partners/UNDP.png"
import UNFPA from "../../Images/HomeComp-Images/Partners/UNFPA.png"
import Unicef from "../../Images/HomeComp-Images/Partners/unicef.png"
import UNIDO from "../../Images/HomeComp-Images/Partners/UNIDO.png"
import Ueropean from "../../Images/HomeComp-Images/Partners/Uropean.png"
import USEMPASSY from "../../Images/HomeComp-Images/Partners/US Empassy.jpg"
import Scholar from "../../Images/HomeComp-Images/Partners/World Class Scholars.png"

const partners = [
  Premiere, IBS, FCA, Ankageo, Banadir, ICRC, Jamhuriya, Netherland, NOA, 
  SBSN, SOS, UNHabitat, UNDP, UNFPA, Unicef, UNIDO, Ueropean, USEMPASSY, Scholar
]

function Partners (){
  return (
    <div className="max-w-7xl mx-auto text-[30px] font-semibold mt-40 px-10  lg:px-[100px]">
      <div className="flex items-center relative mb-30">
        <h1 className="text-iriseColor absolute md:text-[32px] z-10 md:ml-20">PARTNERS WHO MADE IT POSSIBLE</h1>
        <div className="w-[70px]  h-[70px] -ml-5 md:ml-10 border-[1.5px] border-black/80 absolute -rotate-10 md:rotate-0 skew-x-[-20deg] "></div>
      </div>
      <div className="mt-12 grid md:grid-cols-3 grid-cols-2 -ml-2 md:ml-0 gap-10   lg:grid-cols-[200px_200px_200px_200px_200px] lg:gap-[20px]">
        {partners.map((logo, index) => (
          <div key={index} className="md:w-[200px] w-[150px] overflow-hidden h-[120px] flex justify-center px-[15px] items-center py-2 rounded-xl border-2 border-iriseColor">
            <img className="w-full h-full transition-all hover:scale-110 ease-in-out duration-300 object-contain" src={logo} alt={`Partner-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
