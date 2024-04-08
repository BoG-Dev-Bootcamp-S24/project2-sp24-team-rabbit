import Image from "next/image";
import { Inter } from "next/font/google";
import Animal from "../components/Animal"
const inter = Inter({ subsets: ["latin"] });

export default function AnimalsList() {
    //pass in true as a prop if page requires searchBar

    let animal = {
        imageURL:"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        name:"Jeff",
        breed:"Golden Retriever",
        owner:"Nathan",
        hours:"20"
    }
    
    return(
        <div className="h-[100%] flex flex-row justify-between items-center p-[1.2%] w-full">
            <Animal animal={animal}/>
        </div>
    );
}