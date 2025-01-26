"use client"

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaThumbsUp, FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

export default function Post({post}){
    const {putRequests,changePage,page,changeEditPost,user,deleteRequests}=useContext(GlobalContext);
    console.log(post)
    return <div style={{backgroundColor: "greenyellow", marginBottom: "10px"}}>
        <div className="flexRow"><h1>{post.header}</h1>
            {page==='post'&&post.user===user._id&&<FaPencil style={{marginLeft:"5px"}} onClick={() =>
            {changeEditPost(post)
            changePage("editPost")
            }}/>}
            {page==='post'&&post.user===user._id&&<FaTrash style={{marginLeft:"15px"}} onClick={() =>
            deleteRequests("post",post._id)}/>}
        </div>
        <p>{post.text}</p>
        {post.likes&&   <p>likes:{post.likes.length}</p>}
        <button onClick={() => putRequests("AddLike", post._id)}><FaThumbsUp style={{fontSize: "20px"}}/></button>


    </div>
}