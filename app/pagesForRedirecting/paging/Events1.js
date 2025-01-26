'use client'

import {useContext, useEffect, useLayoutEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Event1 from "@/app/pagesForRedirecting/classes/Event1";
import {getExpectedRequestStore} from "next/dist/server/app-render/work-unit-async-storage.external";

export default function Events1(){
    const {events,changePage,loading,getRequests} = useContext(GlobalContext);
    useLayoutEffect(()=>{
        getRequests("Events")


    },[])

if(loading)return <p>loading...</p>;
    if(!events.length){return <div>
        <button onClick={()=>changePage("addEvent")}>Add event</button>
    </div>}
    const eventsSorted=events.sort((a,b)=>new Date(a.date) -new Date(b.date)).filter(event=>new Date(event.date)>Date.now())
    console.log(eventsSorted)

    return <div>
        <button onClick={() => changePage("addEvent")}>Add event</button>
        {eventsSorted.map((event)=>
            <div key={event._id}>
                <Event1 event={event}/>
            </div>
        )}
    </div>

}