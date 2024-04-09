import Image from "next/image";
import { Inter } from "next/font/google";
import Animal from "../components/Animal"
import Form from "../components/Form"
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
        <div className="w-[100%] h-[100%] overflow-y-auto overflow-x-hidden">
            <div className="flex flex-row border-b-2 pt-6 pb-2 h-auto w-[100%] justify-between items-end">
                <p className="ml-6 font-medium text-2xl" style={{color: "rgb(128, 116, 116)"}}>Animals</p>
                {!formStatus && <button className="ml-1 font-medium flex flex-row items-center" style={{color: "rgb(128, 116, 116)"}} onClick={()=>
                    {setFormStatus(true)}}>
                    <Image src={createNewLogo} className="w-[12%]"/>
                    <span className="ml-1 mr-5">Create new</span>
                </button>}          
            </div>
            
            {formStatus ? 
                <Form type="animal"/> :
                <div className="w-[100%] flex flex-row justify-start items-start flex-wrap text-black m-[3%]">
                    {animalList == null ? <div>Loading...</div> : animalList[0] == null ? <div>No Animals Found</div> : 
                        animalList.map((animal, index) => 
                        <Animal animal={animal}/>
                    )}
                </div>
            }

            <div className="w-full h-[50px]">

            </div>

        </div>
    );
}