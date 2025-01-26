'use client'

import {FaTrash} from "react-icons/fa";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function TextForBan({text}) {
const {deleteRequests,changePage}=useContext(GlobalContext);
    // console.log(text)
    return <div style={{border:"solid red 1px"}}>
        <FaTrash onClick={()=>deleteRequests("TextForBan",text._id)}></FaTrash>
        <p>Post id: {text.postId}</p>
       <div><p>Text commita: {text.text}</p> <FaTrash onClick={()=>deleteRequests("comment",text.commitId)}></FaTrash></div>
        <div className="flexRow"><p>Author of commit: {text.user}</p>
            <button onClick={()=>deleteRequests("ban user",text.user)}> Block user</button></div>
        <p>Ask for ban: {text.userAsked}</p>
        <br/>
    </div>
}