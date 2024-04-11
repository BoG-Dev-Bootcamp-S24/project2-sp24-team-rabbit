import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar/Sidebar";
import TrainingLog from "@/components/TrainingPages/TrainingLog";
import TopBanner from "@/components/TopBanner/TopBanner";
import AllUsersContainer from "@/components/UsersPage/allUsersContainer"
import { useRouter } from "next/router";


export default function allUsers() {
    const router = useRouter();
    const user = router.query.user;
    return (
        <div className="bg-white w-[100%] h-[100%] flex flex-col relative">
          <Navbar searchBar={true}/>
          <div className="w-full h-full flex flex-row">
            <SideBar adminAccess={true} currentPage={"allusers"} user={user}/>
            <div className="flex flex-col w-full h-full">
                <TopBanner formStatusProp={null} setFormStatusProp={null} title={"All users"}/>
                <AllUsersContainer />
            </div>
          </div>
        </div>
    )
}