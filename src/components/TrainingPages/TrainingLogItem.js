import editButton from "/public/images/trainingLogCardEditButton.png";
import Image from "next/image";

export default function TrainingLogItem({ log, allTraining }) {
    const date = new Date(log.date);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return (

        <div className="bg-white shadow-lg flex items-center rounded-lg mb-4 mt-4 drop-shadow-sm border w-[87%]">
            <div className="flex-none rounded-l-lg bg-red-600 text-white px-6 py-7 mr-4 h-full">
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{day}{}</span>
                    <small className="text-center block">{month} {year}</small>
                </div>
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-xl">
                    {log.title}
                    <span className="text-gray-500 text-xl font-light inline-block align-baseline ml-2">
                        ({log.hours} hour{log.hours!==1 ? "s" : ""})
                    </span>
                </h3>
                <p className="text-gray-700 mt-1"><span className="font-semibold">{log.animal}</span>, {log.breed}{ allTraining && ("  ·  " + log.userName)}</p>
                <p className="text-gray-500 mt-3 text-xs ">{log.description}</p>
            </div>
            <div className="flex-none mr-8">
                <Image className="object-contain ml-6" src={editButton} alt="Edit Button" width={50} height={50} />
            </div>
        </div>
    );
  }