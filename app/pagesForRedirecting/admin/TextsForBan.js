'use client'


import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Message from "@/app/pagesForRedirecting/classes/Message";
import TextForBan from "@/app/pagesForRedirecting/admin/TextForBan";

export default function TextsForBan() {
    const {loading,textsForBan,getRequests}=useContext(GlobalContext)

    useEffect(() => {
      getRequests("textsForBan")
    }, []);
    if(loading)return <div>loading...</div>

    if(!textsForBan.length)
        return <div>nie ma comentow do bana</div>

    return (<div>
        {textsForBan.map(message=>(<TextForBan key={message._id} text={message}/>))}
    </div>)

}