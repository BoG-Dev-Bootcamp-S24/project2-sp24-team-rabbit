// src/components/Sidebar.js

import React, { useState } from 'react';

function Sidebar() {

    const [isHoveringTrainingLogs, setIsHoveringTrainingLogs] = useState(false);
    const [isHoveringAnimals, setIsHoveringAnimals] = useState(false);
    const [isHoveringAllTraining, setIsHoveringAllTraining] = useState(false);
    const [isHoveringAllAnimals, setIsHoveringAllAnimals] = useState(false);
    const [isHoveringAllUsers, setIsHoveringAllUsers] = useState(false);

    return (
        <div className="w-64 h-screen bg-white shadow-md flex flex-col justify-between">
          {/* Top Section with Links */}
          <div>
            
            <a
                href="/training-logs"
                className="flex items-center justify-start p-3 hover:bg-red-600 text-gray-700 hover:text-white rounded-md ml-2"
                onMouseEnter={() => setIsHoveringTrainingLogs(true)}
                onMouseLeave={() => setIsHoveringTrainingLogs(false)}
            >
                <img
                    src={isHoveringTrainingLogs ? "/images/activeTrainingLogo.png" : "/images/inactiveTrainingLogs.png"}
                    alt="Training Logs Icon"
                    className="mr-2"
                    width="24"
                    height="24"
                />
                    Training logs
            </a>
      
            <a 
                href="/animals" 
                onMouseEnter={() => setIsHoveringAnimals(true)}
                onMouseLeave={() => setIsHoveringAnimals(false)}
                className={`flex items-center justify-start p-3 ${isHoveringAnimals ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-white'} rounded-md ml-2`}
            >
                <img 
                    src={isHoveringAnimals ? "/images/activeAnimalsLogo.png" : "/images/inactiveAnimalLogo.png"} 
                    alt="Animals Icon" 
                    className="mr-2" 
                    width="24" 
                    height="24" 
                />
                Animals
            </a>


      
            <hr className="border-t mx-3 border-gray-300" />
      
            <div className="px-3 mt-3">
                <div className="text-lg font-semibold mb-2 text-gray-600">Admin access</div>
                <div className="space-y-1">
                    {/* All Training Link */}
                    <a 
                        href="/admin/training" 
                        onMouseEnter={() => setIsHoveringAllTraining(true)}
                        onMouseLeave={() => setIsHoveringAllTraining(false)}
                        className={`flex items-center p-2 ${isHoveringAllTraining ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-white'} rounded-md`}
                    >
                        <img 
                            src={isHoveringAllTraining ? "/images/activeAllTrainingLogo.png" : "/images/inactiveAllTrainingLogo.png"} 
                            alt="All Training Icon" 
                            className="mr-2" 
                            width="24" 
                            height="24" 
                        />
                            All training
                        </a>
    
                    <a 
                        href="/admin/animals" 
                        onMouseEnter={() => setIsHoveringAllAnimals(true)}
                        onMouseLeave={() => setIsHoveringAllAnimals(false)}
                        className={`flex items-center p-2 ${isHoveringAllAnimals ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-white'} rounded-md`}
                    >
                        <img 
                            src={isHoveringAllAnimals ? "/images/activeAllAnimalsLogo.png" : "/images/inactiveAllAnimalsLogo.png"} 
                            alt="All Animals Icon" 
                            className="mr-2" 
                            width="24" 
                            height="24" 
                        />
                            All animals
                    </a>
      
                    <a 
                        href="/admin/users" 
                        onMouseEnter={() => setIsHoveringAllUsers(true)}
                        onMouseLeave={() => setIsHoveringAllUsers(false)}
                        className={`flex items-center p-2 ${isHoveringAllUsers ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-white'} rounded-md`}
                    >
                        <img 
                            src={isHoveringAllUsers ? "/images/activeAllUsersLogo.png" : "/images/inactiveAllUsersLogo.png"} 
                            alt="All Users Icon" 
                            className="mr-2" 
                            width="24" 
                            height="24" 
                        />
                            All users
                    </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section with User Info */}
          <div className="px-3 pt-2">
            <hr className="border-t mx-3 my-2 border-gray-300" /> {/* Reduced top and bottom margin */}
            <div className="flex justify-between items-center pb-2"> {/* Reduced bottom padding */}
              <div className="flex items-center">
                <div className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center text-white mr-3">
                  <span className="font-bold">L</span>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-semibold text-gray-600">Long Lam</p>
                  <p className="text-sm text-gray-600">Admin</p>
                </div>
              </div>
              <a href="/logout" className="flex items-center">
                <img src="/images/logoutLogo.png" alt="Logout" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
      );
    }
    
    export default Sidebar;
    

  