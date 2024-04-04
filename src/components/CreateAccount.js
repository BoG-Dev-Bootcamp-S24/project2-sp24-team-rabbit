import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CreateAccount() {
    
    return(
        <div className= "w-[70%] flex flex-col items-center mt-[5%]">
        <h1 className="text-black text-4xl font-bold">Sign up</h1>

        <form className="mt-[4%] flex flex-col w-[50%] h-[50%] content-between">
            <input type="email" className="bg-transparent border-b-2 border-red-600 w-[100%] text-black outline-none" name="Email" placeholder="Full Name"/>
            <input type="email" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" name="Email" placeholder="Email"/>
            <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" name="Password" placeholder="Password"/>
            <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black outline-none" name="Password" placeholder="Confirm Password"/>
            <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[100] p-[1%] rounded-lg bg-red-600"
                onClick={() => false}>Sign up</button>
        </form>

        <div className="flex flex-row whitespace-nowrap mt-[7%]">
          <p className="text-black">Already have an account?</p>
          <Link href="/" className="pl-[3%] font-bold text-black">Sign in</Link>
        </div>

      </div>
    );
}