import Image from "next/image";
import goldenRetriever from "/public/images/goldenRetriever.jpeg";
import pfp from "/public/images/pfp.jpg";
import User from "./User";

export default function allUsersContainer() {
    let userList = [
        {
            name: "Nathan",
            admin: true,
            location: "Atlanta, GA",
        },
        {
            name: "Philip",
            admin: false,
            location: "New City, NY",
        },
        {
            name: "Neharica",
            admin: true,
            location: "Frisco, TX",
        },
        {
            name: "Sid",
            admin: false,
            location: "Dubai, UAE",
        },
        {
            name: "Yonni",
            admin: true,
            location: "Burtonsville, MD",
        },
        {
            name: "Ritika",
            admin: true,
            location: "Bridgewater, NJ",
        },
        {
            name: "Bryce",
            admin: true,
            location: "Alpharetta, GA",
        },
        {
            name: "Isaiah",
            admin: false,
            location: "Charlotte, NC",
        },
    ];

    return (
        <div className="w-[100%] h-[100%] overflow-hidden">
            <div className="w-full flex flex-row justify-start items-start flex-wrap text-black ml-3 pt-10 overflow-y-auto overflow-x-hidden">
                {userList == null ? (
                    <div>Loading...</div>
                ) : userList[0] == null ? (
                    <div>No Users Found</div>
                ) : (
                    userList.map((user, index) => (
                        <User user={user} key={index} /> 
                    ))
                )}
                <div className="w-full h-[10px]"></div>
            </div>
        </div>
    );
}
