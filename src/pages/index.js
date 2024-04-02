import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Searchbar />
      <Sidebar />
    </div>

  )
    
}
