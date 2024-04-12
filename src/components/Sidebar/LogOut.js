import { useRouter } from "next/router";
import logoutLogo from "/public/images/logoutLogo.png";
import Image from "next/image";

export default function LogOut({name,adminBool,pfp}) {

    const router = useRouter();

    function handleLogout() {
        router.push("/")
    }

    return (
        <div className="w-full flex flex-col">
            <div className="w-full border-t-2 mb-3" ></div>
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <div className={`ml-1.5 rounded-full overflow-hidden mr-3 ${adminBool ? "w-10" : "w-8"} bg-red-600 flex items-center justify-center aspect-square text-white font-semibold text-xl`}>{name && name.substring(0, 1)}
                    </div>
                    <div className="flex flex-col">
                        <p className={`text-base font-semibold`}>{name}</p>
                        { adminBool && <p className="text-sm text-slate-500">Admin</p> }
                    </div>
                    </div>
                    <button className="hover:bg-gray-100 p-2 flex justify-center rounded-md cursor-pointer" onClick={handleLogout}>
                        <Image src={logoutLogo} className="w-5"/>
                    </button>
            </div>
        </div>
    )
        
}