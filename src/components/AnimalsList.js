import Image from "next/image";
import { Inter } from "next/font/google";
import Animal from "../components/Animal"
import createNewLogo from "/public/images/createNewLogo.png"
import React, { useState } from 'react'
const inter = Inter({ subsets: ["latin"] });

export default function AnimalsList() {
    const[formStatus, setFormStatus] = useState(false);
    let animalList = null;
    //set animalList = database list
    animalList = []

    let animal = {
        imageURL:"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        name:"Jeff",
        breed:"Golden Retriever",
        owner:"Nathan",
        hours:"20"
    }

    animalList[0] = animal
    animalList[1] = animal
    animalList[2] = animal
    animalList[3] = animal
    animalList[4] = animal
    animalList[5] = animal
    animalList[6] = animal

    return(
        <div className="w-[100%]">
            <div className="w-[100%] border-b-2 pl-[2%] py-[1%] px-[10%] flex justify-between">
                <h1 className="text-lg font-bold text-slate-500">Animals</h1>
                {!formStatus && <button className="text-slate-500 w-[10.5%] flex justify-between items-center whitespace-nowrap" onClick={()=>
                    {setFormStatus(true)}}>
                    <Image src={createNewLogo} className="w-[18%]"/>
                    Create New
                </button>}
            </div>
            
            {formStatus ? 
                <div>
                    Form
                </div> :
                <div className="w-[100%] flex flex-row justify-start items-start flex-wrap text-black m-[3%]">
                    {animalList == null ? <div>Loading...</div> : animalList[0] == null ? <div>No Animals Found</div> : 
                        animalList.map((animal) => 
                        <Animal animal={animal}/>
                    )}
                </div>
            }

        </div>
    )
}