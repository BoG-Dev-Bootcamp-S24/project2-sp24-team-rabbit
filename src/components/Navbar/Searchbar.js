import React from "react";
import Image from "next/image";
import searchLogo from "/public/images/searchLogo.png"

export default function Searchbar() {
    return (
        <form className="w-[35%] h-[50%] border flex flex-row rounded-md">
            <Image src={searchLogo} className="object-contain p-[1.5%]"/>
            <input className="bg-transparent w-[100%] text-black outline-none" name="search" placeholder="Search"/>
        </form>
    )
}