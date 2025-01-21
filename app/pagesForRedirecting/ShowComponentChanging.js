"use client"


import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function ShowComponentChanging() {
    const {page,changePage}=useContext(GlobalContext)
    return <div>
        <button onClick={() => changePage("myPage")}>Moja strona</button><br/>
        <button onClick={() => changePage("allUsers")}>All users</button>
    </div>

}