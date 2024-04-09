import React from "react";
import Image from "next/image";
import appLogo from "/public/images/appLogo.png";
import { League_Gothic } from 'next/font/google'

export const league_gothic = League_Gothic({
    weight: '400',
    subsets: ['latin'],
})

export default function Logo() {
  return (
    <div className="flex flex-row items-center">
      <Image className="object-contain ml-6 my-6" src={appLogo} alt="App Logo" width={50} height={50} />
      <p className={`text-4xl ml-3 font-bold`}>Progress</p>
    </div>
  );
}
