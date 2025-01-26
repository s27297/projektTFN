"use client"
import {
    FaUserCircle,
    FaComment,
    FaUsers,
    FaUserFriends,
    FaNewspaper,
    FaSignOutAlt,
    FaFrog,
    FaFire,
} from "react-icons/fa";

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaGear, FaUsersRectangle} from "react-icons/fa6";

export default function ShowComponentChanging() {
    const {page,changePage,logout,user}=useContext(GlobalContext)
    // console.log(user.darkmode)??
    let color="white"
    if(user.darkmode===true){
        color = "black"
    }
    return <div style={{backgroundColor: "blue",color:color}}>

        <button onClick={() => changePage("myPage")}><FaUserCircle style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("allUsers")}><FaUsers style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("messages")}><FaComment style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("groups")}><FaUsersRectangle  style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("friends")}><FaUserFriends style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("events")}><FaFire style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("settings")}><FaGear style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("myPosts")}><FaNewspaper style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => logout()}><FaSignOutAlt style={{fontSize: "50px"}}/></button>

    </div>

}