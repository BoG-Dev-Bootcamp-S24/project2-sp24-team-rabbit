import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useState } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [hours, setHours] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [note, setNote] = useState("");
    
    return(
        <div className="w-full h-full flex flex-col items-center content-start text-black border">
            <div className="w-full h-full overflow-y-auto flex justify-center pb-[10%]">
                <form className="mt-[2%] flex flex-col w-[50%] h-full">
                    <h2 className="p-[1%] font-semibold">Animal Name</h2>
                    <input className="bg-transparent border-2 w-[100%] p-[1.5%] text-black rounded-lg mb-[1%]" 
                    placeholder="Name" onChange={(event) => setName(event.target.value)}/>
                    
                    <h2 className="p-[1%] font-semibold">Breed</h2>
                    <input className="bg-transparent border-2 w-[100%] p-[1.5%] text-black rounded-lg mb-[1%]" 
                    placeholder="Breed" onChange={(event) => setBreed(event.target.value)}/>

                    <h2 className="p-[1%] font-semibold">Total hours trained</h2>
                    <input className="bg-transparent border-2 w-[100%] p-[1.5%] text-black rounded-lg mb-[1%]" 
                    type="number" placeholder="Total hours trained, i.e. 3, 40, 100" onChange={(event) => setHours(event.target.value)}/>

                    <div className="w-[100%] flex flex-row justify-between">
                        <div className="w-[25%]">
                            <h2 className="m-[1%] font-semibold">Birth Month</h2>
                            <select className="bg-transparent border-2 p-[9%] w-[100%] text-slate-500 rounded-lg mb-[1%]" onChange={(event) => setMonth(event.target.value)}>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>

                        <div className="w-[30%]"> 
                            <h2 className="p-[1%] font-semibold">Date</h2>
                            <input className="bg-transparent border-2 w-[100%] p-[7%] text-black rounded-lg mb-[1%]" 
                            type="number" placeholder="20" onChange={(event) => setDay(event.target.value)}/>
                        </div>

                        <div className="w-[40%]"> 
                            <h2 className="p-[1%] font-semibold">Year</h2>
                            <input className="bg-transparent border-2 w-[100%] p-[5%] text-black rounded-lg mb-[1%]" 
                            type="number" placeholder="2024" onChange={(event) => setYear(event.target.value)}/>
                        </div>

                    </div>

                    <h2 className="p-[1%] font-semibold">Note</h2>
                    <textarea className="bg-transparent border-2 w-[100%] h-[20%] p-[1.5%] text-black rounded-lg mb-[1%] word-break: break-word;" 
                    type="text" placeholder="Note" onChange={(event) => setNote(event.target.value)}/>

                    <div className="w-[100%] flex flex-row justify-start mb-20">
                        <button type="submit" className="text-xl font-bold mt-[7%] w-[25%] p-[1%] rounded-md border-2 border-red-600 text-red-600 mr-[5%]"
                        onClick={() => false}>Clear</button>
                        <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[25%] p-[1%] rounded-md bg-red-600"
                        onClick={() => false}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}