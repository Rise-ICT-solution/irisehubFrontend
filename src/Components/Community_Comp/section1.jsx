import Image1 from "../../Images/Community-Images/coworking.jpg"
function SectionOne (){
    return <div className="max-w-7xl mx-auto mt-25  md:px-10 lg:px-[100px] px-6">
        <h1 className="md:text-[35px] text-[25px] font-bold lg:ml-35 lg:w-[600px]"> Co-working space </h1>
        <div className="lg:w-[700px] rounded-xl lg:ml-35 mt-10 overflow-hidden ">
            <img className=" w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110" src={Image1} alt="" />
        </div>
        <div className="lg:ml-60 lg:w-[800px] mt-10 md:mt-20">
            <h1 className="text-[28px] leading-[35px] font-bold  "> Innovative Co-Working Space for Startups & Professionals </h1>
            <p className="mt-5"> We have flexible and affordable memberships for our community members and startups We serve all clients that are coming on board our platform according to their status. We have designed and decorated an innovative and technology-friendly co-working with steady power, free Internet, printing, photocopy and self-service coffee and tea machine. We provide shared and dedicated desks and a presentation room for individuals & organizations. We offer an enabling environment where you can meet, network and collaborate. Our co-working space is more than space – it’s place to go for connection, networking and exploring business ideas. Come and join our thriving ecosystem. </p>
        </div>
    </div>
}
export default SectionOne