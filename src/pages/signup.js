import Image from "next/image";
import { Inter } from "next/font/google";
import TopBanner from "../components/TopBanner.js"
import CreateAccount from "../components/CreateAccount.js";
import quarterCircle from '/public/images/quarterCircle.png';
import Navbar from "@/components/Navbar/Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  return (
    <div className="bg-white w-screen h-full flex flex-col justify-between items-center">
      <Navbar searchBar={false}/>
      <CreateAccount/>
      
      <div className="flex justify-start w-[100%]">
        <Image src={quarterCircle} alt="background image" className="object-contain"/>
      </div>
    </div>
  );
}
