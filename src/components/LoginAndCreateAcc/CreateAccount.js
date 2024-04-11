import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useState } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function CreateAccount() {
    const [currName, setCurrName] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    const [currPass, setCurrPass] = useState("");
    const [currVerifyPass, setCurrVerifyPass] = useState("");
    const [admin, setAdmin] = useState(false);
    
    return(
        <div className= "w-[70%] flex flex-col items-center mt-[5%]">
        <h1 className="text-black text-4xl font-bold">Sign up</h1>

        <form className="mt-[4%] flex flex-col w-[50%] h-[50%] content-between">
            <input type="text" className="bg-transparent border-b-2 border-red-600 w-[100%] text-black outline-none" 
                name="Name" placeholder="Full Name" onChange={(event) => setCurrName(event.target.value)}/>
            <input type="email" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" 
                name="Email" placeholder="Email" onChange={(event) => setCurrEmail(event.target.value)}/>
            <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" 
                name="Password" placeholder="Password" onChange={(event) => setCurrPass(event.target.value)}/>
            <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" 
                name="ConfrimPassword" placeholder="Confirm Password" onChange={(event) => setCurrVerifyPass(event.target.value)}/>
            <div className="flex items-center">
                <input onClick={() => setAdmin(!admin)} type="checkbox" className="border border-red-600 accent-red-600 mt-4 checked:bg-rd-600 h-5 w-5"/>
                <div className="text-black ml-3 mt-3.5"> Admin Access </div>
            </div>
            <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[100] p-[1%] rounded-lg bg-red-600"
                onClick={() => false}>Sign up</button>
        </form>

        <div className="flex flex-row whitespace-nowrap mt-[7%]">
          <p className="text-black">Already have an account?</p>
          <Link href="/" className="pl-[3%] font-bold text-black hover:text-red-600">Sign in</Link>
        </div>

      </div>
    );
}