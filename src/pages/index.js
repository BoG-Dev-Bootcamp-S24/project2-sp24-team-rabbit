import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black w-52">
      <h1 className="text-sm">hello</h1>
    </div>
  );
}
