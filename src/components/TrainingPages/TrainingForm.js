import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useState } from 'react'
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
export default function TrainingForm({ toggleForm }) {
    const [title, setTitle] = useState("");
    const [animal, setAnimal] = useState("");
    const [hours, setHours] = useState("");
    const [month, setMonth] = useState("January");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [note, setNote] = useState("");

    const router = useRouter();
    const user = router.query.user;

    const handleClearOrSave = async () => {
        toggleForm();
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !animal || !hours || !month || !day || !year || !note) {
            alert('Please fill out all fields.');
            return;
        }
        const date = new Date(`${month} ${day}, ${year}`).toISOString();
        const formData = {
            user: JSON.parse(user).user,
            animal: animal,
            title,
            date,
            description: note,
            hours: parseInt(hours),
        };
        try {
            const response = await fetch('http://localhost:3000/api/training', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.text();
            console.log(result);
            toggleForm();
        } catch (error) {
            console.error('Failed to submit the form:', error);
            alert('There was a problem with your submission. Please try again.');
        }
    };
    return(
        <div className="w-full h-full flex flex-col items-center content-start text-black border">
            <div className="w-full h-full overflow-y-auto flex justify-center pb-[10%]">
                <form className="mt-[2%] flex flex-col w-[50%] h-full" onSubmit={handleSubmit}>
                    <h2 className="p-[1%] font-semibold">Title</h2>
                    <input className="bg-transparent border-2 w-[100%] p-[1.5%] text-black rounded-lg mb-[1%]"
                    placeholder="Name" onChange={(event) => setTitle(event.target.value)}/>
                    <h2 className="p-[1%] font-semibold">Select Animal</h2>
                    <input className="bg-transparent border-2 w-[100%] p-[1.5%] text-black rounded-lg mb-[1%]"
                    placeholder="Breed" onChange={(event) => setAnimal(event.target.value)}/>
                    <h2 className="p-[1%] font-semibold">Total hours trained</h2>
                    <input className="bg-transparent border-2 w-[100%] p-[1.5%] text-black rounded-lg mb-[1%]"
                    type="number" placeholder="Total hours trained, i.e. 3, 40, 100" onChange={(event) => setHours(event.target.value)}/>
                    <div className="w-[100%] flex flex-row justify-between">
                        <div className="w-[25%]">
                            <h2 className="m-[1%] font-semibold">Month</h2>
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
                        <button type="button" className="text-xl font-bold mt-[7%] w-[25%] p-[1%] rounded-md border-2 border-red-600 text-red-600 mr-[5%]"
                        onClick={handleClearOrSave}>Return</button>
                        <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[25%] p-[1%] rounded-md bg-red-600"
                        onClick={() => false}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}