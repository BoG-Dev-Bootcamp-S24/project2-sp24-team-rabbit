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
import { useRouter } from "next/router";

export default function TrainingLog({allTraining}) {

    const [logs, setLogs] = useState(null);

    const [formStatus, setFormStatus] = useState(false);
    const toggleFormVisibility = () => {
      setFormStatus(!formStatus);
    };

    const router = useRouter();
    const user = router.query.user;

    async function loadLogs(userID) {
      try {
          if (user) {
              const response = await fetch(`http://localhost:3000/api/training?userID=${userID}`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const result = await response.json();
              result.sort((a, b) => new Date(a.date) - new Date(b.date));
              result.reverse();
              setLogs(result);
          }
      } catch (error) {
          console.error('Failed to fetch data:', error);
      }
    };

    async function loadAllLogs() {
      try {
          
            const response = await fetch(`http://localhost:3000/api/admin/trainings`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            result.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
          
              if (dateA.getFullYear() !== dateB.getFullYear()) {
                  return dateB.getFullYear() - dateA.getFullYear();
              } else if (dateA.getMonth() !== dateB.getMonth()) {
                  return dateB.getMonth() - dateA.getMonth();
              } else {
                  return dateB.getDate() - dateA.getDate();
              }
          });
            // result.reverse();
            setLogs(result);
      } catch (error) {
          console.error('Failed to fetch data:', error);
      }
    };

    allTraining ? useEffect(() => {
      console.log("All training active")
      loadAllLogs();
    }, []) :
    useEffect(() => {
      loadLogs(user ? JSON.parse(user).user : "");
    }, [formStatus]);

    
    return (
      <div className="w-[100%] overflow-auto">
          <TopBanner formStatusProp={formStatus} setFormStatusProp={setFormStatus} title={allTraining ? "All training" : "Training logs"}/>
          {formStatus ?
            <TrainingForm type="animal" toggleForm={toggleFormVisibility}/> :
            <div className="w-[100%] flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden pt-6">
              {logs == null ? <div>Loading...</div> : logs.length === 0 ? <div>No Training Logs Found</div> :
                logs.map((log) => (
                  <TrainingLogItem key={log.id} log={log} allTraining={allTraining} />
                ))}
            </div>
          }
          <div className="h-[100px]"></div>
      </div>
    );
}