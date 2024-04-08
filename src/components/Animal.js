import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Animal(props) {
    const {animal} = props;
    
    return(
        <div className="flex flex-col justify-between items-center aspect-square w-[20%] text-black rounded-xl shadow-lg">
            <Image src={animal.imageURL} width={0} height={0} alt="Animal photo" sizes="100vw" className="object-cover w-[100%] h-[75%] rounded-t-xl"/>
            <div className="h-[25%] w-[100%] flex flex-row items-center justify-around p-[5%]">
                <div className="bg-red-600 h-[80%] flex items-center justify-center aspect-square rounded-full font-extrabold text-white text-xl">{animal.name.substring(0, 1)}</div>
                <div>
                    <div className="font-bold whitespace-nowrap">{animal.name} - {animal.breed}</div>
                    <div className="text-slate-500 text-sm">{animal.owner} • Trained: {animal.hours} hours</div>
                </div>
            </div>
        </div>
    );
}