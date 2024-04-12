import Image from "next/image";
import { Inter } from "next/font/google";
import Animal from "./Animal"
import Form from "./Form"
import createNewLogo from "/public/images/createNewLogo.png"
import React, { useEffect, useState } from 'react'
const inter = Inter({ subsets: ["latin"] });
import TopBanner from "../TopBanner/TopBanner";
import { useRouter } from "next/router";

export default function AnimalsList({allAnimals}) {

    const router = useRouter();
    const user = router.query.user;

    const[animalList, setAnimalList] = useState(null);

    const[formStatus, setFormStatus] = useState(false);

    const toggleFormVisibility = () => {
      setFormStatus(!formStatus);
    };

    async function loadAnimals(userID) {
        try {
            if (user) {
                const response = await fetch(`http://localhost:3000/api/animal?userID=${userID}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setAnimalList(result);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    async function loadAllAnimals() {
        try {
            
              const response = await fetch(`http://localhost:3000/api/admin/animals`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const result = await response.json();
              setAnimalList(result);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
      };

    allAnimals ? useEffect(() => {
        loadAllAnimals();
      }, []) :
      useEffect(() => {
        loadAnimals(user ? JSON.parse(user).user : "");
      }, [formStatus]);

    return (
        <div className="w-[100%] h-[100%] overflow-hidden">
            <TopBanner formStatusProp={formStatus} setFormStatusProp={setFormStatus} title={allAnimals ? "All animals" : "Animals"}/>
            {formStatus ?
                <Form type="animal" toggleForm={toggleFormVisibility}/> :
                <div className="w-[100%] flex flex-row justify-start items-center flex-wrap text-black ml-[3%] py-10 overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                    {animalList == null ? <div className="w-full flex justify-center items-center">Loading...</div> : animalList.length === 0 ? <div className="w-full flex justify-center items-center">No Animals Found</div> :
                        (animalList).map((animal, index) =>
                            <Animal animal={animal} key={index} />
                        )}
                </div>
            }
        </div>
    )
}