import Image from "next/image";
import { Inter } from "next/font/google";
import TopBanner from "../components/TopBanner.js"
import AnimalsList from "../components/AnimalsList.js"
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function animalList() {
  return (
    <div className="bg-white w-full h-full flex flex-col justify-between items-center">
      <Navbar searchBar={true}/>
      <div className="flex flex-row justify-between w-full">
        <SideBar className="w-[100%] h-full"/>
        <div className="w-[100%] h-full"><AnimalsList /></div>
      </div>
    </div>
  );
}
