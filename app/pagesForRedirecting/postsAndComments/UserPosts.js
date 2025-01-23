"use client"

import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Post from "@/app/pagesForRedirecting/classes/Post";

export default function UserPosts(){
    const {posts,getRequests,loading,changePage,viewUserProfile}=useContext(GlobalContext);
    useEffect(()=>{
        console.log(viewUserProfile._id);

        getRequests("Posts",viewUserProfile._id);
    },[])
    // console.log(posts)
    if(loading) return <div>loading...</div>
    if(!posts.length) return <div><p>ten user nie ma swoich postów</p> </div>
    return <div>

        {posts.map((post,index)=><Post key={post._id} post={post}/>)}
    </div>
}