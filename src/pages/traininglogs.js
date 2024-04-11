import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar/Sidebar";
import TopBanner from "@/components/TopBanner/TopBanner";
import TrainingLog from "@/components/TrainingPages/TrainingLog";


export default function TrainingLogs() {
    const currentUser = "Nathan";
    return (
        <div className="bg-white w-[100%] h-[100%] flex flex-col relative">
          <Navbar searchBar={true}/>
          <div className="w-full h-full flex flex-row">
            <SideBar adminAccess={false} currentPage={"traininglogs"} user={currentUser}/>
            <div className="flex flex-col w-full h-full">
                <TrainingLog user={currentUser} allTraining={false} />
            </div>
          </div>
        </div>
    )
}