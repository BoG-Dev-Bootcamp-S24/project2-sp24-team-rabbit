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
import { useState } from "react";

export default function SideBar() {

    const [trainingLogsActive, setTrainingLogsActive] = useState(true);
    const [animalsActive, setAnimalsActive] = useState(false);
    const [allTrainingActive, setAllTrainingActive] = useState(false);
    const [allAnimalsActive, setAllAnimalsActive] = useState(false);
    const [allUsersActive, setAllUsersActive] = useState(false);

    const handleTrainingLogsClick = () => {
        setTrainingLogsActive(true);
        setAnimalsActive(false);
        setAllTrainingActive(false);
        setAllAnimalsActive(false);
        setAllUsersActive(false);
    }
    
    const handleAnimalsClick = () => {
        setTrainingLogsActive(false);
        setAnimalsActive(true);
        setAllTrainingActive(false);
        setAllAnimalsActive(false);
        setAllUsersActive(false);
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
        <div className="p-5 h-full border-r-2 border-gray-100" style={{width: `20%`}}>
            <div onClick={handleTrainingLogsClick} className={`flex border border-white rounded-lg items-center p-2 h-8 cursor-pointer ${trainingLogsActive ? 'bg-red-600' : 'bg-white hover:bg-gray-100'} `}>
                <Image className="ml-2 w-5" src={trainingLogsActive ? activeTrainingLogsLogo : inactiveTrainingLogsLogo}/>
                <p className={`ml-2.5 text-sm font-medium ${trainingLogsActive ? 'text-white' : 'text-gray-600'}`}>Training logs</p>
            </div>
            <div onClick={handleAnimalsClick} className={`flex border border-white rounded-lg items-center p-2 h-8 mt-1 cursor-pointer ${animalsActive ? 'bg-red-600' : 'bg-white hover:bg-gray-100'} `}>
                <Image className="w-5 ml-2" src={animalsActive ? activeAnimalsLogo : inactiveAnimalLogo}/>
                <p className={`ml-2.5 text-sm font-medium ${animalsActive ? 'text-white' : 'text-gray-600'}`}>Animals</p>
            </div>
            <div className="width-full  border-t-2 mb-3 mt-3 " ></div>
            <p className="ml-2.5 font-semibold text-gray-700 mt-1 mb-3 text-sm ">Admin Access</p>
            <div onClick={handleAllTrainingsClick} className={`flex border border-white rounded-lg items-center p-2 h-8 mt-1 cursor-pointer ${allTrainingActive ? 'bg-red-600' : 'bg-white hover:bg-gray-100'} `}>
                <Image className="w-5 ml-2" src={allTrainingActive ? activeAllTrainingLogo : inactiveAllTrainingLogo}/>
                <p className={`ml-2.5 text-sm font-medium ${allTrainingActive ? 'text-white' : 'text-gray-600'}`}>All training</p>
            </div>
            <div onClick={handleAllAnimalsClick} className={`flex border border-white rounded-lg items-center p-2 h-8 mt-1 cursor-pointer ${allAnimalsActive ? 'bg-red-600' : 'bg-white hover:bg-gray-100'} `}>
                <Image className="w-5 ml-2" src={allAnimalsActive ? activeAllAnimalsLogo : inactiveAllAnimalsLogo}/>
                <p className={`ml-2.5 text-sm font-medium ${allAnimalsActive ? 'text-white' : 'text-gray-600'}`}>All animals</p>
            </div>
            <div onClick={handleAllUsersClick} className={`flex border border-white rounded-lg items-center p-2 h-8 mt-1 cursor-pointer ${allUsersActive ? 'bg-red-600' : 'bg-white hover:bg-gray-100'} `}>
                <Image className="w-5 ml-2" src={allUsersActive ? activeAllUsersLogo : inactiveAllUsersLogo}/>
                <p className={`ml-2.5 text-sm font-medium ${allUsersActive ? 'text-white' : 'text-gray-600'}`}>All users</p>
            </div>
        </div>
    )
}