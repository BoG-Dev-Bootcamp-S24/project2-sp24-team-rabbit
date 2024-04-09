import Image from "next/image";
import { Inter } from "next/font/google";
import TopBanner from "../components/TopBanner.js"
import AnimalsList from "../components/AnimalsList.js"

const inter = Inter({ subsets: ["latin"] });

export default function animalList() {
  return (
    <div className="bg-white w-full h-[100%] flex flex-col justify-between items-center">
      <TopBanner searchBar={true}/>
      <div className="w-[80%] h-[80%]"><AnimalsList /></div>
      <div></div>
    </div>
  );
}
