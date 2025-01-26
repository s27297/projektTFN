"use client"
// import {v4} from "uuid";

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect, useLayoutEffect, useReducer, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Filter from "@/app/pagesForRedirecting/paging/Filter";
import ReportUsera from "@/app/pagesForRedirecting/admin/ReportUsera";

export default function Raports() {
   const {getRequests,loading,reports}= useContext(GlobalContext);


console.log("cat")
    useLayoutEffect(()=>{
        getRequests("Reports")


    },[])
    console.log(reports)
    const keys=Object.keys(reports)
    // keys.map((key)=>{console.log(reports[key])})

    if(loading)
        return <div>loading...</div>
    if(!reports)return <p>brak reportów</p>
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        a
        {keys.map(key => (
            <div key={key}><p style={{textAlign:"center"}}>{key}:</p><ReportUsera reppo={reports[key]}/></div>
        ))}
    </div>
}