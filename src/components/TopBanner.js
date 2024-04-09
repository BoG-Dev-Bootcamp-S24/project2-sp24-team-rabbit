import createNewLogo from "/public/images/createNewLogo.png"
import Image from "next/image";

export default function TopBanner({formStatusProp, setFormStatusProp}) {
    return (
        <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end">
                <p className="ml-6 font-medium text-2xl" style={{ color: "rgb(128, 116, 116)" }}>Animals</p>
                {!formStatusProp && 
                <button className="ml-1 font-medium flex flex-row items-center" style={{ color: "rgb(128, 116, 116)" }} onClick={() =>
                    { setFormStatusProp(true) }}>
                    <Image src={createNewLogo} className="w-[12%]" />
                    <span className="ml-1 mr-5">Create new</span>
                </button>}
        </div>
    )
}