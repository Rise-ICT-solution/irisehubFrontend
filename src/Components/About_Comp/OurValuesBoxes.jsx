function OurValuesSmallBoxes (Props){
    return <div className="w-full">
        <div className="w-[200px] h-[130px] overflow-hidden flex items-center border-black border-2 rounded-xl">
            <img className="w-full full  object-cover" src={Props.Image} alt="" />
        </div>
        <div>
            <h1 className="text-[20px] leading-[23px] mt-3 font-semibold"> {Props.Name} </h1>
            <p className=" text-[14px] text-gray-600 mt-1"> {Props.Desc} </p>
        </div>
    </div>
}
export default OurValuesSmallBoxes