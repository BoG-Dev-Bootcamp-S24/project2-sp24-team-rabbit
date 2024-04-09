import { Inter } from "next/font/google";
import Login from "../components/Login.js"
import quarterCircle from '/public/images/quarterCircle.png';
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar.js";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
      <Navbar searchBar={false}/>
      <Login/>
      <div className="flex justify-start w-[100%]">
        <Image src={quarterCircle} alt="background image" className="object-contain"/>
      </div>
    </div>
  );
}
