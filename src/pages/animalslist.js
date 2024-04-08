import Image from "next/image";
import { Inter } from "next/font/google";
import quarterCircle from '/public/images/quarterCircle.png';
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar";

export default function AnimalsList() {
    return (
        <div className="bg-white w-screen h-screen flex-row">
          <Navbar searchBar={true} />
          <SideBar />
        </div>
    )
}