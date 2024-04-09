import Image from "next/image";
import searchLogo from '/public/images/searchLogo.png'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SearchBar() {
    
    return(
        <form className="w-[35%] h-[90%] border flex flex-row rounded-lg">
            <Image src={searchLogo} className="object-contain p-[1.5%]"/>
            <input className="bg-transparent w-[100%] text-black outline-none" name="search" placeholder="Search"/>
        </form>
    );
}