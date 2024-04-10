import React from "react";
import Image from "next/image";

export default function SidebarButton({onClickFunc, inactiveImgSrc, activeImgSrc, activeBool, text}) {
    return (
        <div>
            <div onClick={onClickFunc} className={`flex border border-white rounded-lg items-center p-2 h-8 cursor-pointer mb-1 ${activeBool ? 'bg-red-600' : 'bg-white hover:bg-gray-100'} `}>
                    <Image className="ml-2 w-5" src={activeBool ? activeImgSrc : inactiveImgSrc}/>
                    <p className={`ml-2.5 text-sm font-medium ${activeBool ? 'text-white' : 'text-gray-600'}`}>{ text }</p>
                </div>
        </div>
    )
}