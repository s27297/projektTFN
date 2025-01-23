'use client'


import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {useInput} from "@/app/hooks/useInput";

export default function WriteMessage() {
    const {messageTo,postRequests}=useContext(GlobalContext)
    const [input,setInput]=useInput("")
    // console.log(messageTo)
    const handleClick=value=>{
        // console.log(value.value)
        const object={
            // from:user._id,
            to:messageTo._id,
            text:input.value,
        }
       postRequests("Message",object);
        setInput("")

    }
    return(
        <div style={{float:"bottom", border:"solid black 2px"}}>
            <label><textarea id="input" name="input" {...input} style={{width:"80%"}}></textarea>
                <button onClick={()=>handleClick(input)}>
                wyślij
            </button></label>
        </div>
    )
}