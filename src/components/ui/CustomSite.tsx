
export default function TemplatePage({
    
    heading , image_align ,
     bgimage , description , image ,
      about_description , about_description_title ,
      theme,

    }){

    return (
        <div className="h-full relative text-4xl overflow-y-auto">
        
        <div className="flex absolute z-[1] w-full p-5 px-10 justify-between bg-transparent">
            <p className="w-full text-lg font-bold text-white">Go XYZ</p>
            <div className="w-full flex gap-10 justify-center">
                <button className="text-lg text-white">Home</button>
                <button className="text-lg text-white">Store</button>
            </div>
            <div className="w-full"></div>
        </div>
        
        <div className="relative h-full overflow-hidden">
            <img
            src={bgimage}
            className=" object-fit h-full w-full  object-cover"/>
            <div className={`absolute inset-0 bg-black opacity-[0.5] p-5 flex ${(bgimage === "")?"bg-gray-500":""}`}>
                {/* <p className="text-white max-sm:text-sm">{company_name}</p>  */}
            </div>
        </div>
        <div className=" w-full flex h-full justify-center items-center flex-col gap-5 centered-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-white">
            <p className=" text-9xl max-sm:text-[4.5rem]">{heading}</p>
            <div className="sm:w-[70%] w-[100%] sm:px-5 flex flex-col items-between ">
                <p className="max-sm:text-sm text-xl text-gray-200 py-5 whitespace-normal break-words">{description}</p>
                <div className="">
                    <button className="text-lg m-3 border-white bg-white text-black border p-3 rounded max-sm:bg-white max-sm:text-black sm:hover:bg-transparent sm:hover:text-white px-10 outline-none">Support</button>
                </div>
            </div>
        </div>

        <div className={`p-10 flex h-screen items-center ${(theme == 1)?"bg-white":"bg-gray-900"} ${(!image_align)?"flex-row-reverse":"flex-row"}`} >
            <div className={`w-full pl-10  ${(image == null)?"bg-gray-500 h-2/3 opacity-[0.5] bg-black inset-0":""}`}> 
                <img className={`rounded shadow-lg ${(theme == 1)?"shadow-gray-500/40":""} h-2/3 object-contain`} src={image}/>
            </div>
            <div className="w-full p-3 h-screen  flex item-center flex-col justify-center gap-11 m-10">  
                <p className={`text-4xl ${(theme == 1)?"text-black":"text-white"}`}>{about_description_title}</p>
                <p className={`${(theme == 1)?"text-gray-500":"text-white"} text-2xl`}>{about_description}</p>
            </div>
        </div>
</div>
)}