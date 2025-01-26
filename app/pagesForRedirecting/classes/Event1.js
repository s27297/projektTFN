"use client"

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";

export default function  Event1({event}) {
    const {putRequests,user,changeEditEvent,changePage,deleteRequests}=useContext(GlobalContext);
    return(<div style={{border:"1px solid red"}}>
        <div className="flexRow"><h1 style={{textAlign:"center"}}>{event.name}</h1>
            {user._id===event.creator&&<FaPencil style={{marginLeft:"5px"}}
                onClick={()=>{changeEditEvent(event);changePage("editEvent")}} />}
            {user._id===event.creator&&<FaTrash style={{marginLeft:"5px"}}
                                                 onClick={()=>{deleteRequests("Event",event._id)}} />}</div>
        <p>Data:{event.date}</p>
        <p>Opis:{event.text}</p>
        <p>number of attenders: {event.participants.length}</p>
        <div style={{ justifyContent: "center"}}>
            <button onClick={() => {
                putRequests("attend in event",{id:event._id,member:user._id})
            }}>Attend/Not attend
            </button>

        </div>
    </div>)
}