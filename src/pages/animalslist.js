import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar/Sidebar";
import TopBanner from "@/components/TopBanner/TopBanner";
import AnimalsListContainer from "@/components/Animal Pages/AnimalsList";


export default function AnimalsList() {
    const currentUser = "Nathan";
    return (
      <div className="bg-white w-[100%] h-[100%] flex flex-col relative">
        <Navbar searchBar={true}/>
        <div className="w-full h-full flex flex-row">
          <SideBar adminAccess={false} currentPage={"animalslist"} user={currentUser}/>
          <div className="flex flex-col w-full h-full">
            <AnimalsListContainer user={currentUser} allAnimals={false}/>
          </div>
        </div>
      </div>
    )
}
