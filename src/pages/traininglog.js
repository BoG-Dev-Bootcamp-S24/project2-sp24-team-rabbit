import TrainingLog from "../components/TrainingLog.js";
import Sidebar from "../components/Sidebar.js"
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar.js";


export default function traininglog() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
        <Navbar searchBar={true}/>
      {/* <Sidebar/> */}
      <TrainingLog/>
    </div>
  );
}
