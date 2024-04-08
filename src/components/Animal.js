import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Animal(props) {
    const {animal} = props;
    
    return(
        <div className="flex flex-row justify-between items-center p-[1.2%] w-full text-black">
            <Image src={animal.imageURL} width="50" height="50" alt="Animal photo" className="object-contain pr-[1%]"/>

        </div>
    );
}