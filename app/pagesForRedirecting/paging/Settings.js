"use client"

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Friend from "@/app/pagesForRedirecting/classes/Friend";

export default function Settings() {
    const {darkMode,putRequests}=useContext(GlobalContext)

    return (
        <div>
            {darkMode && <div><p>darkmode:true</p> <button onClick={()=>putRequests("Settings",false)}>Change</button></div>}
            {!darkMode && <div><p>darkmode:false</p> <button onClick={()=>putRequests("Settings",true)}>Change</button></div>}
        </div>
    )

}