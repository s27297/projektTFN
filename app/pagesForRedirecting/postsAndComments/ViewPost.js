"use client"


import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function ViewPost() {
    const {viewPost,getRequests,comments}=useContext(GlobalContext);

    useEffect(() => {
        getRequests("PostComments")
    },[])
    return <div>pust</div>
}