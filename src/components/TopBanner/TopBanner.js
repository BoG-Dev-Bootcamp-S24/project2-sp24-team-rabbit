import createNewLogo from "/public/images/createNewLogo.png";
import Image from "next/image";

export default function TopBanner({ formStatusProp, setFormStatusProp, title }) {
  return (
    <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end">
      <p className="ml-6 font-medium text-2xl" style={{ color: "rgb(128, 116, 116)" }}>{title}</p>
      {(title !== "All users" && title !== "All training") && (!formStatusProp &&
        <button className="w-40 ml-1 font-medium flex flex-row items-center justify-center hover:bg-gray-100 mr-5 p-0.5 rounded-md" style={{ color: "rgb(128, 116, 116)" }} onClick={() => setFormStatusProp(true)}>
          <Image src={createNewLogo} className="w-[14%] mt-[2.25px]" />
          {title !== "All animals" && <span className="ml-3">Create new</span>}
        </button>
      )}
    </div>
  );
}