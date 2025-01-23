"use client"

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaThumbsUp} from "react-icons/fa";

export default function Post({post}){
    const {putRequests,changePage}=useContext(GlobalContext);
    return <div style={{backgroundColor: "greenyellow", marginBottom: "10px"}}>
        <h1>{post.header}</h1>
        <p>${post.text}</p>
        <p>likes:{post.likes.length}</p>
        <button onClick={() => putRequests("AddLike", post)}><FaThumbsUp style={{fontSize: "20px"}}/></button>
       <div style={{justifyContent:"center"}}><button onClick={() => {
           console.log("cat")
           changePage("post",post)
       }}>Zobacz komentarze</button></div>

    </div>
}