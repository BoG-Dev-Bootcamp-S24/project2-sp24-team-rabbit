import Image from "next/image";
import { Inter } from "next/font/google";
import Animal from "../components/Animal"
const inter = Inter({ subsets: ["latin"] });

export default function AnimalsList() {
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
            <button>New</button>

            <div className="w-[100%] flex flex-row justify-start items-start flex-wrap text-black m-[3%]">
                {animalList == null ? <div>Loading...</div> : animalList[0] == null ? <div>No Animals Found</div> : 
                    animalList.map((animal) => 
                    <Animal animal={animal}/>
                )}
            </div>

        </div>
    );
}