import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function User({user}) {
    
    return(
        <div className="flex flex-col justify-between items-center aspect-w-4 aspect-h-1 w-[28%] text-black rounded-xl shadow-md mx-[1.5%] mb-[2%] py-3 border">
            <div className="h-[100%] w-[100%] flex flex-row items-center ">
                <div className="ml-5 mr-4 bg-red-600 h-[41px] w-[41px] flex items-center justify-center rounded-full font-semibold text-white text-xl">{user.fullName.substring(0, 1)}</div>
                <div className="bg-white">
                    <div className="whitespace-nowrap text-lg font-bold">{user.fullName}</div>
                    <div className="text-slate-500 text-sm">{user.admin && "Admin •"} Atlanta, Georgia </div>
                </div>
            </div>
        </div>
    );
}