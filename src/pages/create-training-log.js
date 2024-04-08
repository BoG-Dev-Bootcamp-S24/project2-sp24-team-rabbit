import createLog from "../components/createLog.js";
import Sidebar from "../components/Sidebar.js"
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar.js";


export default function createTrainingLog() {
    return (
        <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
        <Navbar searchBar={true}/>
        {/* <Sidebar/> */}
        <createLog/>
        </div>
    );
}
    