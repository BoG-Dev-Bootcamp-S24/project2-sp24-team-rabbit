import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar";
import TopBanner from "@/components/TopBanner";
import createNewLogo from "/public/images/createNewLogo.png"
import { useState, useEffect } from 'react';
import TrainingLogItem from './TrainingLogItem';
import Link from 'next/link';
import TrainingForm from "../components/TrainingForm"



export default function TrainingLog() {

    const [logs, setLogs] = useState([]);
    const[formStatus, setFormStatus] = useState(false);
  
    useEffect(() => {
      const mockedLogs = [
        {
          id: 1,
          title: 'Complete Sit Lessons',
          date: '2023-10-20T14:48:00.000Z',
          userName: 'User 1',
          animalName: 'Animal 1',
          breed: 'Breed 1',
          hours: 2,
          description: 'First training session went well.',
        },
        {
            id: 2,
            title: 'Complete Sit Lessons',
            date: '2023-10-20T14:48:00.000Z',
            userName: 'User 1',
            animalName: 'Animal 1',
            breed: 'Breed 1',
            hours: 2,
            description: 'First training session went well.',
          },
          {
            id: 2,
            title: 'Complete Sit Lessons',
            date: '2023-10-20T14:48:00.000Z',
            userName: 'User 1',
            animalName: 'Animal 1',
            breed: 'Breed 1',
            hours: 2,
            description: 'First training session went well.',
          },
          {
            id: 2,
            title: 'Complete Sit Lessons',
            date: '2023-10-20T14:48:00.000Z',
            userName: 'User 1',
            animalName: 'Animal 1',
            breed: 'Breed 1',
            hours: 2,
            description: 'First training session went well.',
          },
          {
            id: 2,
            title: 'Complete Sit Lessons',
            date: '2023-10-20T14:48:00.000Z',
            userName: 'User 1',
            animalName: 'Animal 1',
            breed: 'Breed 1',
            hours: 2,
            description: 'First training session went well.',
          },
          
      ];
  
      setTimeout(() => {
        setLogs(mockedLogs);
      }, 100);
    }, []);

    return (<div className="w-[100%] h-[100%] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end">
            <p className="ml-6 font-medium text-2xl" style={{color: "rgb(128, 116, 116)"}}>Training log</p>
            <button className="ml-1 font-medium flex flex-row items-center" style={{color: "rgb(128, 116, 116)"}} onClick={() =>
                    { setFormStatus(true) }}>
                <Image src={createNewLogo} className="w-[12%]"/>
                <span className="ml-1 mr-5">Create new</span>
            </button> 
        </div>
        {formStatus ? <TrainingForm type="animal" /> : 
        <div className="w-[100%]">
        {logs.length > 0 && (
            <div className="w-auto">
            {logs.map((log) => (
                <TrainingLogItem key={log.id} log={log} />
            ))}
            </div>
        )}
        </div>
        }

    </div>)
}

