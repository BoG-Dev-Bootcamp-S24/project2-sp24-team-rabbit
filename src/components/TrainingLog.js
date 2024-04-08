import { useState, useEffect } from 'react';
import TrainingLogItem from './TrainingLogItem';
import Link from 'next/link';
import createNew from "/public/images/createNewLogo.png";
// import Navbar from "./Navbar/Navbar.js";

export default function TrainingLog() {
    const [logs, setLogs] = useState([]);
  
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
      ];
  
      setTimeout(() => {
        setLogs(mockedLogs);
      }, 1000);
    }, []);

    return (
        <div className="container mx-auto p-4">
        <div className="flex justify-between items-center border-b py-2">
            <h1 className="text-xl font-bold text-gray-700">Training logs</h1>
            <Link href="/create-training-log" className="inline-flex items-center text-gray-500 font-bold py-2 px-4 rounded">
                <img src={createNew.src} alt="Create new" className="mr-2" />
                Create new
            </Link>
        </div>
        {logs.length > 0 && (
            <div>
            {logs.map((log) => (
                <TrainingLogItem key={log.id} log={log} />
            ))}
            </div>
        )}
        </div>
        // <div className="flex">
            /* <div className="w-1/5 bg-gray-200"> Sidebar </div> */

        // </div>

    );
}