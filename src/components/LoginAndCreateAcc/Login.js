import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useState } from 'react'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [currEmail, setCurrEmail] = useState("");
  const [currPass, setCurrPass] = useState("");
  const [loginStatus, setLoginStatus] = useState(true);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currEmail,
          password: currPass,
        }),
      });

      console.log(response.status);

      if (response.ok) {
        const user = await response.json();
        console.log("Logged in user:", user);

        //Reroute to animallist page
        router.push({
          pathname: '/animalslist',
          query: { user: JSON.stringify(user)},
        });
      } else {
        console.error("Login failed in response:", response.statusText);
        if (response.status === 500) {
          setLoginStatus(false);
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid Login!!")
    }
  };
    
  return(
      <div className= "w-[70%] flex flex-col items-center">
      <h1 className="text-black text-4xl font-bold">Login</h1>

      <form className="mt-[4%] flex flex-col w-[50%] h-[30%] justify-between">
        <input type="email" className="bg-transparent border-b-2 border-red-600 w-[100%] text-black outline-none" 
          name="Email" placeholder="Email" onChange={(event) => setCurrEmail(event.target.value)}/>
        <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" 
          name="Password" placeholder="Password" onChange={(event) => {setCurrPass(event.target.value); setLoginStatus(true);}}/>
        <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[100] p-[1%] rounded-lg bg-red-600"
          onClick={handleLogin}>{loginStatus ? "Log in" : "Invalid Login!! Try Again"}</button>
      </form>

      <div className="flex flex-row whitespace-nowrap mt-[7%]">
        <p className="text-black">Don't have an account?</p>
        <Link href="/signup" className="pl-[3%] font-bold text-black hover:text-red-600">Sign up</Link>
      </div>

    </div>
  );
}