"use client"
// import {v4} from "uuid";

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Filter from "@/app/pagesForRedirecting/paging/Filter";
import Group from "@/app/pagesForRedirecting/classes/Group";

export default function Groups() {
    const {groups,getRequests,loading,changePage,putRequests}=useContext(GlobalContext)

// console.log("cat")
    useEffect(()=>{
        getRequests("Groups")


    },[])
if(loading) return <div>loading...</div>
   if(!groups.length>0)
       return <div>
           <button onClick={() => changePage("addGroup")}>stworz gruppe</button>
           <br/>
           nie masz żadnej grupy</div>
    return <div>
        <button onClick={() => changePage("addGroup")}>stworz gruppe</button><br/>
            {groups.map((group,index)=><div style={{border:"solid green 1px"}} key={group._id}>
                <Group group={group}></Group>
                <br/>

            </div>)}
    </div>
}