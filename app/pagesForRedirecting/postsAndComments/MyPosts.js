"use client"

import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Post from "@/app/pagesForRedirecting/classes/Post";

export default function MyPosts(){
    const {posts,getRequests,loading,changePage}=useContext(GlobalContext);

    useEffect(()=>{
        getRequests("MyPosts");
    },[])
    console.log(posts)
if(loading) return <div>loading...</div>
    if(!posts.length) return <div><button onClick={()=>changePage("addPost")}>Dodaj post</button> <p>Nie masz postów</p> </div>
    return <div>
        <button onClick={() => changePage("addPost")}>Dodaj post</button><br/>

        {posts.map((post,index)=><Post key={post._id} post={post}/>)}
    </div>
}