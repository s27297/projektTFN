"use client"

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function UserProfile() {
    const {viewUserProfile,loading}=useContext(GlobalContext)
    if(loading)
        return <div>loading...</div>
    return <div>
        <User user1={viewUserProfile}></User>
    </div>
}