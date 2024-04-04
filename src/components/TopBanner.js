import Image from "next/image";
import { Inter } from "next/font/google";
import appLogo from '/public/images/appLogo.png'
import SearchBar from "../components/SearchBar.js"
const inter = Inter({ subsets: ["latin"] });

export default function TopBanner(props) {
    //pass in true as a prop if page requires searchBar
    const {searchBar} = props;
    
    return(
        <div className="h-[10%] border-b-2 pl-[2%] flex flex-row justify-between items-center p-[1.2%] w-full">
            <div className="flex flex-row items-center">
                <Image src={appLogo} alt="App logo" className="object-contain pr-[1%]"/>
                <h1 className="text-black font-bold text-4xl">Progress</h1>
            </div>
            {searchBar && <SearchBar/>}
            <div className="w-[17%]"></div>
        </div>
    );
}