import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar";
import TopBanner from "@/components/TopBanner";
import createNewLogo from "/public/images/createNewLogo.png"

export default function TrainingLog() {
    return (<div className="w-[100%] h-[100%] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end">
            <p className="ml-6 font-medium text-2xl" style={{color: "rgb(128, 116, 116)"}}>Training log</p>
            <button className="ml-1 font-medium flex flex-row items-center" style={{color: "rgb(128, 116, 116)"}}>
                <Image src={createNewLogo} className="w-[12%]"/>
                <span className="ml-1 mr-5">Create new</span>
            </button>      
        </div>
    </div>)
}

