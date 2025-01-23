"use client"
// import {v4} from "uuid";

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect, useLayoutEffect, useReducer, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Filter from "@/app/pagesForRedirecting/paging/Filter";
import Message from "@/app/pagesForRedirecting/classes/Message";
import WriteMessage from "@/app/pagesForRedirecting/forms/WriteMessage";

export default function MessagesBetweenUsers() {

    const {getRequests,loading,messages,users,user,changeMessageTo,messageTo}=useContext(GlobalContext)
    // console.log(messageTo)
// console.log(messages)
    // useEffect(()=>{
    //     getRequests("Messages")
    //
    //
    // },[])
const filteredMessages=messages.filter(message=>
    ((message.from===messageTo._id||message.to===messageTo._id) &&user.login!==messageTo.login)||
    message.from===messageTo._id&&message.to===messageTo._id)
    // console.log(filteredMessages)
    if(loading)
        return <div>loading...</div>
    if(!filteredMessages||!filteredMessages.length)
        return <div><p>nie ma wiadomosci</p>
            <WriteMessage/>
    </div>
    return <div style={{backgroundColor:"red"}} className={"scroll"}>
        {filteredMessages.map(message=>(<Message key={message._id} message={message}/>))}


        <WriteMessage/>
    </div>
}