import editButton from "/public/images/trainingLogCardEditButton.png";
import Image from "next/image";

export default function TrainingLogItem({ log }) {
    const date = new Date(log.date);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return (

        <div className="bg-white shadow-lg items-center rounded-lg mb-4 flex overflow-hidden drop-shadow-lg w-5/6">

        <div className="flex-none rounded-l-lg bg-blue-900 text-white p-6 mr-4">
            <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">{day}</span>
                <small className="text-center block">{month} - {year}</small>
            </div>
        </div>


        <div className="flex-grow">
            <h3 className="font-bold text-lg">
                {log.title}
                <span className="text-gray-500 font-normal text-base inline-block align-baseline ml-2">
                    · {log.hours} hours
                </span>
            </h3>
            <p className="text-gray-500 mt-1">{log.userName} - {log.breed} - {log.animalName}</p>
            <p className="text-gray-800 mt-4">{log.description}</p>
        </div>
    

        <div className="flex-none mr-4">
            <Image className="object-contain ml-6" src={editButton} alt="App Logo" width={50} height={50} />
        </div>
        </div>
    );
  }