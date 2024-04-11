import React from "react";
import Image from "next/image";
import inactiveTrainingLogsLogo from "/public/images/inactiveTrainingLogs.png";
import activeTrainingLogsLogo from "/public/images/activeTrainingLogo.png";
import inactiveAnimalLogo from "/public/images/inactiveAnimalLogo.png";
import activeAnimalsLogo from "/public/images/activeAnimalsLogo.png";
import inactiveAllTrainingLogo from "/public/images/inactiveAllTrainingLogo.png";
import activeAllTrainingLogo from "/public/images/activeAllTrainingLogo.png";
import inactiveAllAnimalsLogo from "/public/images/inactiveAllAnimalsLogo.png";
import activeAllAnimalsLogo from "/public/images/activeAllAnimalsLogo.png";
import inactiveAllUsersLogo from "/public/images/inactiveAllUsersLogo.png";
import activeAllUsersLogo from "/public/images/activeAllUsersLogo.png";
import profilePic from "/public/images/pfp.jpg"
import { useState } from "react";
import logoutLogo from "/public/images/logoutLogo.png"
import SidebarButton from "./SidebarButton";
import LogOut from "./LogOut";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar({adminAccess, currentPage, user}) {

    const router = useRouter();

    const [trainingLogsActive, setTrainingLogsActive] = useState(currentPage === "traininglogs");
    const [animalsActive, setAnimalsActive] = useState(currentPage === "animalslist");
    const [allTrainingActive, setAllTrainingActive] = useState(currentPage === "alltraining");
    const [allAnimalsActive, setAllAnimalsActive] = useState(currentPage === "allanimals");
    const [allUsersActive, setAllUsersActive] = useState(currentPage === "allusers");

    const handleTrainingLogsClick = () => {
        setTrainingLogsActive(true);
        setAnimalsActive(false);
        setAllTrainingActive(false);
        setAllAnimalsActive(false);
        setAllUsersActive(false);
        router.push({
            pathname: '/traininglogs',
            query: { user },
          });
    }
    
    const handleAnimalsClick = () => {
        setTrainingLogsActive(false);
        setAnimalsActive(true);
        setAllTrainingActive(false);
        setAllAnimalsActive(false);
        setAllUsersActive(false);
        router.push({
            pathname: '/animalslist',
            query: { user },
          });
    }

    const handleAllTrainingsClick = () => {
        setTrainingLogsActive(false);
        setAnimalsActive(false);
        setAllTrainingActive(true);
        setAllAnimalsActive(false);
        setAllUsersActive(false);
    }

    const handleAllAnimalsClick = () => {
        setTrainingLogsActive(false);
        setAnimalsActive(false);
        setAllTrainingActive(false);
        setAllAnimalsActive(true);
        setAllUsersActive(false);
    }

    const handleAllUsersClick = () => {
        setTrainingLogsActive(false);
        setAnimalsActive(false);
        setAllTrainingActive(false);
        setAllAnimalsActive(false);
        setAllUsersActive(true);
    }

    return (
        <div className="p-5 h-[715px] border-r-2 border-gray-100 flex flex-col w-full justify-between" style={{width: `18%`}}>
            <div className="w-full">
                <SidebarButton onClickFunc={handleTrainingLogsClick} inactiveImgSrc={inactiveTrainingLogsLogo} activeImgSrc={activeTrainingLogsLogo} activeBool={trainingLogsActive} text={"Training logs"}/>
                <SidebarButton onClickFunc={handleAnimalsClick} inactiveImgSrc={inactiveAnimalLogo} activeImgSrc={activeAnimalsLogo} activeBool={animalsActive} text={"Animals"}/>
                

                {   adminAccess &&
                    <>
                        <div className="width-full  border-t-2 mb-3 mt-3 " ></div>
                        <p className="ml-2.5 font-semibold text-gray-700 mt-1 mb-3 text-sm ">Admin access</p>
                        <Link href="/alltraining">
                            <SidebarButton onClickFunc={handleAllTrainingsClick} inactiveImgSrc={inactiveAllTrainingLogo} activeImgSrc={activeAllTrainingLogo} activeBool={allTrainingActive} text={"All training"}/>
                        </Link>
                        <Link href="/allanimals">
                            <SidebarButton onClickFunc={handleAllAnimalsClick} inactiveImgSrc={inactiveAllAnimalsLogo} activeImgSrc={activeAllAnimalsLogo} activeBool={allAnimalsActive} text={"All animals"}/>
                        </Link>
                        <Link href="/allusers">
                            <SidebarButton onClickFunc={handleAllUsersClick} inactiveImgSrc={inactiveAllUsersLogo} activeImgSrc={activeAllUsersLogo} activeBool={allUsersActive} text={"All users"}/>
                        </Link>
                    </>
                }
            </div>
            <LogOut name={user ? JSON.parse(user).fullName : ''} adminBool={adminAccess} pfp={profilePic}/>
        </div>
    )
}