"use client"

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function MyPage() {
    const {user,getRequests,loading}=useContext(GlobalContext)


    // useEffect(()=>{
    //     getRequests("User id",user._id)
    // },[])
    if(loading)
        return <div>loading...</div>
    return <div>
        <User user={user}></User>
        {/*<button style={{color: "blue", display: "block", margin: "auto"}}*/}
        {/*        onClick={() => editProfile(user)}>*/}
        {/*    Zaedituj konto*/}
        {/*</button>*/}
    </div>
}