import Image from "next/image";
import { Inter } from "next/font/google";
import TopBanner from "../components/TopBanner.js"
import AnimalsList from "../components/AnimalsList.js"

const inter = Inter({ subsets: ["latin"] });

export default function animalList() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
      <TopBanner searchBar={true}/>
      <AnimalsList />
      <div></div>
    </div>
  );
}
