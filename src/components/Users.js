import Image from "next/image";
import goldenRetriever from "/public/images/goldenRetriever.jpeg"
import pfp from "/public/images/pfp.jpg"

export default function AnimalsListContainer() {
    return (<div className="w-[100%] h-[100%] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end">
            <p className="ml-6 font-medium text-2xl" style={{color: "rgb(128, 116, 116)"}}>{allTraining ? "All training" : "Training logs"}</p>
            <button className="ml-1 font-medium flex flex-row items-center" style={{color: "rgb(128, 116, 116)"}}>
                <Image src={createNewLogo} className="w-[12%]"/>
            </button>      
        </div>
    </div>)
}