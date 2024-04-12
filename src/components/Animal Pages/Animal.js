import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Animal(props) {
    const {animal} = props;
    
    return(
        <div className="flex flex-col justify-between items-center w-[28%] aspect-square text-black rounded-xl shadow-lg mx-[1.5%] mb-[3%]">
            <Image src={animal.profilePicture} width={0} height={0} alt="Animal photo" sizes="100vw" className="object-cover w-[100%] h-[75%] rounded-t-xl"/>
            <div className="h-[25%] w-[100%] flex flex-row items-center ">
                <div className="mx-5 bg-red-600 h-[50%] flex items-center justify-center aspect-square rounded-full font-semibold text-white text-2xl">{animal.owner.fullName.substring(0, 1)}</div>
                <div className="bg-white">
                    <div className="whitespace-nowrap text-lg"><span className="font-bold">{animal.name}</span>, {animal.breed}</div>
                    <div className="text-slate-500 text-sm">{animal.owner.fullName} • Trained: {animal.hoursTrained} hours</div>
                </div>
            </div>
        </div>
    );
}