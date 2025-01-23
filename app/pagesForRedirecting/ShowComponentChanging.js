"use client"
import {FaUserCircle, FaComment, FaUsers, FaUserFriends, FaNewspaper,} from "react-icons/fa";

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaGear} from "react-icons/fa6";

export default function ShowComponentChanging() {
    const {page,changePage}=useContext(GlobalContext)
    return <div style={{backgroundColor: "blue"}}>

        <button onClick={() => changePage("myPage")}><FaUserCircle style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("allUsers")}><FaUsers style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("messages")}><FaComment style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("groups")}>groups</button>
        <br/>
        <button onClick={() => changePage("friends")}><FaUserFriends style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("events")}>events</button>
        <br/>
        <button onClick={() => changePage("settings")}><FaGear style={{fontSize: "50px"}}/></button>
        <br/>
        <button onClick={() => changePage("myPosts")}><FaNewspaper style={{fontSize: "50px"}}/></button>
    </div>

}