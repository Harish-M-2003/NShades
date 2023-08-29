import { useEffect, useState } from "react"

export default function TemplatePage(
{ heading , image_align ,
  bgimage , description , image ,
  about_description , about_description_title ,
  theme, buttonText , 
}){

    const [featuredCollection , setFeaturedCollection] = useState(
        [
    {
        url : "https://www.familyhandyman.com/wp-content/uploads/2019/11/cleaning-products-e1572276065301.jpg ",
    },
    {
        url : "https://th.bing.com/th/id/OIP.Odo4ahKoJGfxpfacNgTshQHaEK?pid=ImgDet&rs=1",
    },
    {
        url : "https://www.familyhandyman.com/wp-content/uploads/2019/11/cleaning-products-e1572276065301.jpg ",
    },
    {
        url : "https://th.bing.com/th/id/OIP.Odo4ahKoJGfxpfacNgTshQHaEK?pid=ImgDet&rs=1",
    },{
        url : "https://www.familyhandyman.com/wp-content/uploads/2019/11/cleaning-products-e1572276065301.jpg ",
    },
    {
        url : "https://th.bing.com/th/id/OIP.Odo4ahKoJGfxpfacNgTshQHaEK?pid=ImgDet&rs=1",
    },
]
    );

    const [price , setPrice] = useState(0);
    const [product , setProduct] = useState("Shampoo");


    return (
        <div className="h-full relative text-4xl overflow-y-auto">
        
        <div className="flex absolute z-[1] w-full p-5  justify-between bg-transparent">
            <p className="w-full text-lg font-bold text-white">Go XYZ</p>
            <div className="w-full flex sm:gap-10  gap-5 justify-center">
                <button className="text-lg text-white">Home</button>
                <button className="text-lg text-white">Store</button>
            </div>
            <div className="w-full max-sm:hidden"></div>
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
                    <button className="text-lg m-3 border-white bg-white text-black border p-3 rounded max-sm:bg-white max-sm:text-black sm:hover:bg-transparent sm:hover:text-white px-10 outline-none">{buttonText}</button>
                </div>
            </div>
        </div>

        <div className={`p-10 grid max-sm:grid-cols-1 grid-cols-2 h-screen items-center ${(theme == 1)?"bg-white":"bg-gray-900"}`}>
            
            {
                (!image_align)?
                    <>
                        <div className="w-full p-3  flex item-center flex-col justify-center gap-5 h-full max-sm:items-center sm:mx-10">
                            <p className={`text-4xl ${(theme == 1)?"text-black":"text-white"}`}>{about_description_title}</p>
                            <p className={`${(theme == 1)?"text-gray-500":"text-white"} text-2xl whitespace-normal break-words ms:mr-10`}>{about_description}</p>
                        </div>

                        <div className={`w-full sm:pl-10 flex justify-center items-center ${(image == null)?"bg-gray-500   opacity-[0.5] bg-black inset-0":""}`}>
                            
                            <img className={`rounded shadow-lg ${(theme == 1)?"shadow-gray-500/40":""} max-sm:h-2/5 object-contain`} src={image}/>
                
                        </div>
                    </>
                :
                <>
                

                <div className={`w-full sm:pl-10 flex justify-center items-center ${(image == null)?"bg-gray-500   opacity-[0.5] bg-black inset-0":""}`}>
                    
                    <img className={`rounded shadow-lg ${(theme == 1)?"shadow-gray-500/40":""} max-sm:h-2/5 object-contain`} src={image}/>
        
                </div>
                <div className="w-full p-3  flex item-center flex-col justify-center gap-5 h-full max-sm:items-center sm:mx-10">
                    <p className={`text-4xl ${(theme == 1)?"text-black":"text-white"}`}>{about_description_title}</p>
                    <p className={`${(theme == 1)?"text-gray-500":"text-white"} text-2xl whitespace-normal break-words ms:mr-10`}>{about_description}</p>
                </div>
            </>
            }
            
        </div>
        <div className={`flex flex-col gap-20 h-screen pt-20  p-5 ${(theme === 0)? "bg-gray-900":""}`}>
            <div className="flex justify-center">
                <p className={`${(theme === 0)?"text-white":"text-black"}`}>Featured Collections</p>
            </div>
            <div className="grid sm:grid-rows-2 sm:grid-cols-4 grid-rows-4 grid-cols-2 gap-5 p-5">

                {
                    featuredCollection.map((img , index) => <FeaturedCard image={img.url} product={product} price={price}/>)
                }
                                
            </div>
        </div>
</div>
)}

function FeaturedCard({image , product , price}){
    return (
        <div className={`sm:h-[22rem] h-[18rem] w-full ${(image == null)?"bg-gray-500 opacity-[0.5]":""} hover:scale-110 rounded`}>
                    <img src={image} className="sm:h-[16rem] h-[12rem] w-full object-cover rounded"/>
                    <div className="flex justify-center p-5 flex-col">
                        <p className="text-lg">{product}</p>
                        <p className="text-lg">{price}</p>
                    </div>
        </div>
    )
}