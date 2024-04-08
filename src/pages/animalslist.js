import Image from "next/image";
import { Inter } from "next/font/google";
import quarterCircle from '/public/images/quarterCircle.png';
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar";
import TopBanner from "@/components/TopBanner";
// import AnimalsList from "@/components/AnimalsList";

export default function AnimalsList() {
    return (
        <div className="bg-white w-screen h-screen flex flex-col relative">
          <Navbar searchBar={true} className="z-30 relative" />
          <div className="flex flex-row h-full">
            <SideBar className="z-20 relative"/>
            <div className="flex flex-col h-full w-full">
              <TopBanner animalsList={true}/>
            </div>
          </div>
        </div>
    )
}
