import Image from "next/image";
import { Inter } from "next/font/google";
import appLogo from '/public/images/appLogo.png'
import quarterCircle from '/public/images/quarterCircle.png';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
      <div className="h-[10%] border-b-2 pl-[2%] flex flex-row items-center p-[1.2%] w-full">
        <Image src={appLogo} alt="App logo" className="object-contain pr-[1%]"/>
        <h1 className="text-black font-bold text-4xl">Progress</h1>
      </div>
      <div className= "w-[70%] flex flex-col items-center">
        <h1 className="text-black text-4xl font-bold">Login</h1>

        <form className="mt-[4%] flex flex-col w-[50%] h-[30%] justify-between">
          <input type="email" className="bg-transparent border-b-2 border-red-600 w-[100%] text-black" name="Email" placeholder="Email"/>
          <input type="password" className="bg-transparent border-b-2 border-red-600 w-[100%] mt-[5%] text-black" name="Password" placeholder="Password"/>
          <button type="submit" className="text-white text-xl font-bold mt-[7%] w-[100] p-[1%] rounded-lg bg-red-600"
            onClick={() => setCurrColor('green')}>Log in</button>
        </form>

        <div className="flex flex-row whitespace-nowrap mt-[7%]">
          <p className="text-black">Don't have an account?</p>
          <button className="pl-[3%] font-bold text-black">Sign up</button>
        </div>

      </div>
        
      <div className="flex justify-start w-[100%]">
        <Image src={quarterCircle} alt="background image" className="object-contain"/>
      </div>
    </div>
  );
}
