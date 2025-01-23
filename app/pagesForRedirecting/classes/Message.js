'use client'

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function Message({message}) {
const {user}=useContext(GlobalContext);
    // console.log(message)
    return(
        <div style={{paddingLeft:'10px',paddingRight:'10px'}}>
            {user._id===message.from&&<p style={{textAlign:"right", backgroundColor:"blue"}}>{message.text}</p>}
            {user._id!==message.from&&<p style={{backgroundColor:"blue"}} >{message.text}</p>}
            <br/>
        </div>
    )
}