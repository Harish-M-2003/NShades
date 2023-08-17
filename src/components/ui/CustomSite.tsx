export default function TemplatePage({
    heading , image_align, company_name,
     bgimage , description , image ,
      about_description , about_description_title ,

    }){

    return (
    <div className="h-full relative text-4xl overflow-y-auto ">
        <div className="text-gray-400 absolute text-white">
            <p>Home</p>
        </div>
        <div className="relative h-full overflow-hidden">
            <img
            src={bgimage}
            className=" object-fit h-full w-full  object-cover"/>
            <div className="absolute inset-0 bg-black opacity-[0.5] p-5">
                <p className="text-white">{company_name}</p>
            </div>
        </div>
        <div className=" w-full flex items-center flex-col gap-10 centered-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-white">
            <p className=" text-6xl">{heading}</p>
            <div className="w-[70%]  p-5 ">
                <p className="text-xl text-gray-400  whitespace-normal break-words">{description}</p>
            </div>
        </div>
        <div className={`p-10 flex h-screen items-center bg-white ${(!image_align)?"flex-row-reverse":"flex-row"}`} >
            <div className="w-full pl-10">
                <img className="rounded shadow-lg shadow-gray-500/40 h-2/3 object-contain" src={image}/>
            </div>
            <div className="w-full p-3 h-screen flex item-center flex-col justify-center gap-11 m-10">  
                <p className="text-4xl">{about_description_title}</p>
                <p className="text-gray-500 text-2xl">{about_description}</p>
            </div>
        </div>
        <div>
            <p></p>
            <div>
                {}
            </div>
        </div>
</div>
)}