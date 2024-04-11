import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar/Sidebar";
import TopBanner from "@/components/TopBanner/TopBanner";
import createNewLogo from "/public/images/createNewLogo.png"
import { useState, useEffect } from 'react';
import TrainingLogItem from './TrainingLogItem';
import Link from 'next/link';
import TrainingForm from "./TrainingForm"

export default function TrainingLog({user, allTraining}) {

    const [logs, setLogs] = useState([]);
    const [formStatus, setFormStatus] = useState(false);

    const toggleFormVisibility = () => {
      setFormStatus(!formStatus);
    };
  
    useEffect(() => {
      const mockedLogs = [
        {
          id: 1,
          title: 'Complete sit lessons',
          date: '2023-10-20T14:48:00.000Z',
          userName: 'Nathan',
          animalName: 'Jeff',
          breed: 'Golden Retriever',
          hours: 2,
          description: 'First training session went well.',
        },
        {
            id: 2,
            title: 'Intruder training',
            date: '2023-10-23T14:48:00.000Z',
            userName: 'Philip',
            animalName: 'Isaiah',
            breed: 'Border Collier',
            hours: 4,
            description: 'Unable to do so, improvement needed.',
          },
          {
            id: 3,
            title: 'Potty train',
            date: '2023-10-16T14:48:00.000Z',
            userName: 'Philip',
            animalName: 'Nick',
            breed: 'Chihuahua',
            hours: 1,
            description: 'Pretty alright. Needs some work, but good job overall.',
          },
          {
            id: 4,
            title: 'Teach how to spin',
            date: '2023-10-14T14:48:00.000Z',
            userName: 'Nathan',
            animalName: 'Jeff',
            breed: 'Golden Retriever',
            hours: 5,
            description: 'Jeff spun! The goat.',
          },
          {
            id: 5,
            title: 'Scare away cats',
            date: '2023-10-18T14:48:00.000Z',
            userName: 'Nathan',
            animalName: 'Anna',
            breed: 'Huskie',
            hours: 2,
            description: 'Anna is a dog. Why is she scared of cats!?',
          },
      ];
  
      const sortedLogs = mockedLogs.sort((a, b) => new Date(a.date) - new Date(b.date));

      setTimeout(() => {
        setLogs(mockedLogs);
      }, 100);
    }, []);

    return (
      <div className="w-[100%] overflow-auto">
          <TopBanner formStatusProp={formStatus} setFormStatusProp={setFormStatus} title={allTraining ? "All training" : "Training logs"}/>
          {formStatus ? 
            <TrainingForm type="animal" toggleForm={toggleFormVisibility}/> :
            <div className="w-[100%] flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden pt-6">
              {logs == null ? <div>Loading...</div> : logs[0] == null ? <div>No Training Logs Found</div> :
                logs.filter((currentTrainingItem) => (currentTrainingItem.userName === user || allTraining)).map((log) => ( 
                  <TrainingLogItem key={log.id} log={log} allTraining={allTraining} />
                ))}
            </div>
          }
          <div className="h-[100px]"></div>
      </div>
    );
}
