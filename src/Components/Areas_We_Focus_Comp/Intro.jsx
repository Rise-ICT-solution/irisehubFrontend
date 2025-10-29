import AreasWeFocusImage from "../../Images/AreasWeFocus-Images/AreasImage.png"
function Intro (){
    return <div className="lg:px-40 px-4 md:px-8 mt-10 md:mt-20 max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="md:text-3xl text-xl font-bold "> Our Strategic Focus: Empowering Youth, Entrepreneurs, and Communities for a Brighter Tomorrow </h1>
        <p className="md:text-xl mt-2 md:mt-7"> At iRise Hub, we empower youth, entrepreneurs, and communities by focusing on innovation, skills, and resilience. Our work creates opportunities, supports sustainable businesses, and builds stronger communities for the future.</p>
        <div className=" rounded-2xl mt-10 ">
            <img className="w-[600px]" src={AreasWeFocusImage} alt="" />
        </div>
    </div>
}
export default Intro;