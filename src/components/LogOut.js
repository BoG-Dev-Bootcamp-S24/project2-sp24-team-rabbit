import logoutLogo from "/public/images/logoutLogo.png";
import Image from "next/image";

export default function LogOut({name,adminBool,pfp}) {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full border-t-2 mb-3" ></div>
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <div className="ml-1.5 rounded-full overflow-hidden mr-3">
                        <Image src={pfp} className={`${adminBool ? "w-10" : "w-8"}`}/>
                    </div>
                    <div className="flex flex-col">
                        <p className={`text-base font-semibold`}>{name}</p>
                        { adminBool && <p className="text-sm text-slate-500">Admin</p> }
                    </div>
                    </div>
                    <div className="">
                        <Image src={logoutLogo} className="cursor-pointer w-5 mr-1"/>
                    </div>
            </div>
        </div>
    )
        
}