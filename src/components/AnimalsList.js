import Image from "next/image";
import { Inter } from "next/font/google";
import Animal from "../components/Animal"
import Form from "../components/Form"
import createNewLogo from "/public/images/createNewLogo.png"
import React, { useState } from 'react'
const inter = Inter({ subsets: ["latin"] });
import TopBanner from "./TopBanner";

export default function AnimalsList({user}) {
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
    animalList[1] = {
        imageURL:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",
        name:"Joe",
        breed:"German Shepherd",
        owner:"Philip",
        hours:"38"
    }
    animalList[2] = {
        imageURL: "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
        name:"Isaiah",
        breed:"Pug",
        owner:"John",
        hours:"12"
    }
    animalList[3] = animal
    animalList[4] = animal
    animalList[5] = animal
    animalList[6] = animal

    return (
        <div className="w-[100%] h-[100%] overflow-hidden">
            <TopBanner formStatusProp={formStatus} setFormStatusProp={setFormStatus}/>
            {formStatus ?
                <Form type="animal" /> :
                <div className="w-[100%] flex flex-row justify-start items-start flex-wrap text-black ml-[3%] pt-10 overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                    {animalList == null ? <div>Loading...</div> : animalList[0] == null ? <div>No Animals Found</div> :
                        (animalList).filter((currentAnimal) => (currentAnimal.owner === user)).map((animal, index) =>
                            <Animal animal={animal} key={index} /> 
                        )}
                    <div className="w-full h-[10px]"></div>
                </div>
            }
        </div>
    );
}