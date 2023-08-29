"use client";

import { useState } from "react";
import TemplatePage from "../../components/ui/CustomSite";
import { GiHamburgerMenu } from "react-icons/gi";


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";

export default function  Template(){

    const [pageHeading , setPageHeading] = useState("SiteName");
    const [pageDescription , setPageDescription] = useState("Site description...");
    const [handburger , setHandburger] = useState(true);
    const [pageAboutDescriptionTitle , setPageAboutDescriptionTitle] = useState("About");
    const [pageAboutDescription , setPageAboutDescription] = useState(
        "Lorem eadandaksjndas asjdnaksjdn asdkjnaskjdnaksd asjdnaksjdnakjsd asdknaksdjnakjsd ");
    const [pageButtonText , setPageButtonText] = useState("Support");
    const [pageImage , setPageImage] = useState(null);
    const [pageBgImage , setPageBgImage]  = useState(null);
    const [pageImageAlignLeft , setPageImageAlignLeft] = useState(true);
    const [lightTheme , setLightTheme] = useState(1);

    const router = useRouter();
    

    function handlePreview(event){

        let file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              setPageBgImage(reader.result);
            };
            reader.readAsDataURL(file);
          }
    }

    function handlePreviewAbout(event){
        let file = event.target.files[0]
        if (file){
            const reader = new FileReader();
            reader.onload = () => {
                setPageImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="h-screen w-screen">
            <div className="w-full flex justify-between p-3 items-center border border-gray-200 border-t-none border-l-none border-r-none">
                <div className="flex items-center gap-5">
                    <div onClick={()=> setHandburger(!handburger)}>
                        <GiHamburgerMenu/>
                    </div>
                        <p className="font-bold" onClick={() => {router.push("/")}}>NShades</p>
                </div>
                <div className="flex gap-5">
                    <button className="text-[#ec4755] p-2 rounded">Live</button>
                    <button className="bg-[#ec4755] text-white p-2 rounded">Save</button>
                </div>
            </div>
            <div className="h-full flex">
                <div className={`w-[20rem] ${(handburger)?"visible":"hidden"} max-sm:absolute z-[2] bg-white max-sm:w-[100%]`}>
                    
                    <div className="p-3 flex flex-col gap-10 overflow-y-auto  h-full border">

                        <div className="mt-5">
                            <Label htmlFor="picture">Background Image</Label>
                            <Input id="picture" type="file" onChange={handlePreview} className="m-1" />
                        </div>
                        
                        <div>
                            <Label htmlFor="picture">About Image</Label>
                            <Input id="picture" type="file" onChange={handlePreviewAbout} className="m-1"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Heading</label>
                            <input 
                            maxLength={25}
                            onChange={(e) => setPageHeading(e.target.value)}
                            className="border p-2 rounded m-1 whitespace-normal" 
                            placeholder="ex. SiteName"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Button Text</label>
                                <input 
                                maxLength={15}
                                onChange={(e) => setPageButtonText(e.target.value)}
                                className="border p-2 rounded m-1 whitespace-normal" 
                                placeholder="ex. Support"/>
                            </div>
                        <div className="flex flex-col gap-2">
                            <label>Text</label>
                            <textarea 
                            cols={80}
                            maxLength={80}
                            onChange={(e) => setPageDescription(e.target.value)}
                            className = "border resize-none outline-none p-2 h-[10rem]" placeholder={pageDescription}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>About Text</label>
                            <textarea 
                            cols={80}
                            maxLength={150}
                            onChange={(e) => setPageAboutDescription(e.target.value)}
                            className = "border resize-none outline-none p-2 h-[10rem]" placeholder={pageDescription}/>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Align Image</label>
                            
                            <Select onValueChange={(e) => setPageImageAlignLeft((e === "left")? true : false) }>
                                <SelectTrigger className="outline-none">
                                    <SelectValue placeholder="Alignment" />
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                    <SelectGroup >
                                        <SelectLabel>Alignment</SelectLabel>
                                        <SelectItem value="left" >Left</SelectItem>
                                        <SelectItem value="right">Right</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                        <label>Theme</label>
                        <Select onValueChange={(e) => setLightTheme((e === "Light")? 1 : 0) }>
                                <SelectTrigger className="outline-none">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                    <SelectGroup >
                                        <SelectLabel>Theme</SelectLabel>
                                        <SelectItem value="Light" >Light</SelectItem>
                                        <SelectItem value="Dark">Dark</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Layout</label>
                            <input 
                            className="border p-2 rounded m-1"
                             placeholder="Default Home Page"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Section height</label>
                            <input  
                                // className="border" 
                                className="border p-2 rounded m-1"
                                placeholder="Section height"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Text Size</label>
                            <input 
                               className="border p-2 rounded m-1" 
                               placeholder="Text Size"/>
                        </div>
                        {/* <div className="flex flex-col gap-2">
                            <label>Button Text</label>
                            <input 
                                className="border p-2 rounded m-1"
                                placeholder=""/>
                        </div> */}
                        <div className="flex flex-col gap-2">
                            <label>Button Link</label>
                            <input 
                                className="border p-2 rounded m-1"
                                placeholder="Button Link"/>
                        </div>
                        
                    </div>
                </div>
                <div className="w-full">

                    <div className="h-full">
                        <TemplatePage 
                            heading = {pageHeading} 
                            bgimage={pageBgImage}
                            description={pageDescription}
                            image = {pageImage}
                            about_description={pageAboutDescription}
                            image_align = {pageImageAlignLeft}
                            about_description_title={pageAboutDescriptionTitle}
                            buttonText = {pageButtonText}
                            theme = {lightTheme}
                        /> {/*GENERATED TEMPLATE PAGE*/}
                    </div>
                </div>
            </div>
        </div>
    );

}