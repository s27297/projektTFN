"use client"
// import {v4} from "uuid";

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect, useLayoutEffect, useMemo, useReducer, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Filter from "@/app/pagesForRedirecting/paging/Filter";

const createUsers1=(user,messages,users)=>{
    let users1=[user._id]
    messages.map(message=>{
        if(!users1.includes(message.from)){
            users1.push(message.from)
        }
        if(!users1.includes(message.to)){
            users1.push(message.to)
        }
    })
    // console.log(users1)
    let users2=[]
    // console.log(users)
    users1.map(u=>{
        if((users.find(us=>us._id===u)))
            users2.push(users.find(us=>us._id===u))})
    // console.log(users2)
    return users2
}

export default function Messages() {

    const {getRequests,loading,messages,users,user,changeMessageTo,messageTo}=useContext(GlobalContext)
// console.log(messageTo)


// console.log("cat")
    useEffect(()=>{
        getRequests("Messages")


    },[])


        // const cats=-useMemo(()=>createUsers1(user,messages,users),[messages, user,users])
    const users2=createUsers1(user,messages,users)
    // console.log(cats)
    if(loading)
        return <div>loading...</div>
    if(!users2.length)
        return <div>lista pusta</div>
    // console.log(users1)
    // console.log(users2)
    // console.log(users1.key())
    return <div style={{display: 'flex', flexDirection: 'column'}}>

        {users2.map(user1 => (<div className={"scroll"} key={user1.login}>
           <p key={user1.login} onClick={()=>changeMessageTo(user1)}>{user1.login}</p>
            <br/><br/>
        </div>))}
    </div>
}