import Image from "next/image";
import { Inter } from "next/font/google";
import appLogo from '/public/images/appLogo.png'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen">
      <div className="h-[10%] border-b-2 bg pl-[2%] flex flex-row items-center p-[1.2%]">
        <Image src={appLogo} alt="App logo" className="object-contain pr-[1%]"/>
        <h1 className="text-black text-4xl">Progress</h1>
      </div>
    </div>
  );
}
