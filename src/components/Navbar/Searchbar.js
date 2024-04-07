import React from "react";
import Image from "next/image";
import searchBarLogo from "/public/images/searchLogo.png"
import { useState } from "react";

export default function Searchbar() {
    const [inputValue, setInputValue] = useState(null);
    const handleInputChange = () => {};
    return (
        <div className="h-10 w-1/3 border border-gray-400 rounded-lg flex flex-row items-center">
            <Image src={searchBarLogo} className="h-1/2 ml-3 object-contain flex"/>
            <p className="ml-2">Search</p>
        </div>
    )
}