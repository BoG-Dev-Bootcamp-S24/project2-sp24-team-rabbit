import Image from "next/image";
import goldenRetriever from "/public/images/goldenRetriever.jpeg";
import pfp from "/public/images/pfp.jpg";
import User from "./User";
import { useEffect, useState } from "react";

export default function allUsersContainer() {

    const [users, setUsers] = useState(null);

    async function loadAllUsers() {
        try {
            
              const response = await fetch(`http://localhost:3000/api/admin/users`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const result = await response.json();
              setUsers(result);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        loadAllUsers();
    }, [])
    
    // let userList = [
    //     {
    //         name: "Nathan",
    //         admin: true,
    //         location: "Atlanta, GA",
    //     },
    //     {
    //         name: "Philip",
    //         admin: false,
    //         location: "New City, NY",
    //     },
    //     {
    //         name: "Neharica",
    //         admin: true,
    //         location: "Frisco, TX",
    //     },
    //     {
    //         name: "Sid",
    //         admin: false,
    //         location: "Dubai, UAE",
    //     },
    //     {
    //         name: "Yonni",
    //         admin: true,
    //         location: "Burtonsville, MD",
    //     },
    //     {
    //         name: "Ritika",
    //         admin: true,
    //         location: "Bridgewater, NJ",
    //     },
    //     {
    //         name: "Bryce",
    //         admin: true,
    //         location: "Alpharetta, GA",
    //     },
    //     {
    //         name: "Isaiah",
    //         admin: false,
    //         location: "Charlotte, NC",
    //     },
    // ];

    return (
        <div className="w-[100%] h-[100%] overflow-hidden">
            <div className="w-full flex flex-row justify-start items-start flex-wrap text-black ml-3 pt-10 overflow-y-auto overflow-x-hidden">
                {users == null ? (
                    <div>Loading...</div>
                ) : users.length === 0 ? (
                    <div>No Users Found</div>
                ) : (
                    users.map((user, index) => (
                        <User user={user} key={index} /> 
                    ))
                )}
                <div className="w-full h-[10px]"></div>
            </div>
        </div>
    );
}
