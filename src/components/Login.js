import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    
    return(
        <div className= "w-[70%] flex flex-col items-center">
        <h1 className="text-black text-4xl font-bold">Login</h1>

        <form className="mt-[4%] flex flex-col w-[50%] h-[30%] justify-between">
          <input type="email" className="bg-transparent border-b-2 border-red-600 w-[100%] text-black outline-none" name="Email" placeholder="Email"/>
          <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" name="Password" placeholder="Password"/>
          <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[100] p-[1%] rounded-lg bg-red-600"
            onClick={() => false}>Log in</button>
        </form>

        <div className="flex flex-row whitespace-nowrap mt-[7%]">
          <p className="text-black">Don't have an account?</p>
          <Link href="/signup" className="pl-[3%] font-bold text-black">Sign up</Link>
        </div>

      </div>
    );
}