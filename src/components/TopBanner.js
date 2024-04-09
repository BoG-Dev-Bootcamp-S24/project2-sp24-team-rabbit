import createNewLogo from "/public/images/createNewLogo.png"
import Image from "next/image";

export default function TopBanner(props) {
    const {animalsList,} = props;
    return (
        <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end"> 
            <p className="ml-6 font-medium text-2xl" style={{color: "rgb(128, 116, 116)"}}>{animalsList ? "Animals" : "Training logs"}</p>
            <div className="flex flex-row mr-9 items-center cursor-pointer">
                <Image src={createNewLogo} className="h-4 w-4"></Image>
                <p className="ml-1 font-medium" style={{color: "rgb(128, 116, 116)"}}>Create new</p>
            </div>
            
        </div>
    )
}