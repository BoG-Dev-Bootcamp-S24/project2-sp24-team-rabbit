import Image from "next/image";
import { Inter } from "next/font/google";
import quarterCircle from '/public/images/quarterCircle.png';
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar/Sidebar";
import TopBanner from "@/components/TopBanner/TopBanner";
import TrainingLog from "@/components/TrainingPages/TrainingLog";


export default function allTraining() {
    const currentUser = "Nathan";
    return (
        <div className="bg-white w-[100%] h-[100%] flex flex-col relative">
          <Navbar searchBar={true}/>
          <div className="w-full h-full flex flex-row">
            <SideBar adminAccess={true} currentPage={"alltraining"} user={currentUser}/>
            <div className="flex flex-col w-full h-full">
                <TrainingLog allTraining={true}/>
            </div>
          </div>
        </div>
    )
}