"use client"


import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Post from "@/app/pagesForRedirecting/classes/Post";
import {useInput} from "@/app/hooks/useInput";
import Comment from "@/app/pagesForRedirecting/classes/Comment";

export default function ViewPost() {
    const {viewPost,getRequests,comments,postRequests,tagged,changeTagged,user,posts}=useContext(GlobalContext);
    const [input,setInput] = useInput("");
// console.log(viewPost)
//     console.log(user)
    useEffect(() => {
        if(viewPost) {
            getRequests("PostComments")
        }
    },[viewPost])
    if(!viewPost) return <div>Nie ma posta</div>
    return (<div style={{}} >
        <div style={{backgroundColor: "blanchedalmond", overflow: "scroll", maxHeight: "80vh"}}>
            <Post post={viewPost}></Post>
            {comments && comments.map((comment, index) => <Comment key={comment._id} comment={comment}/>)}

        </div>
        <div>
            {tagged && tagged.text && <div className="flexRow"><p style={{color: "grey"}}> Tagged: {tagged.text}</p>
                <p style={{marginLeft: "10px"}} onClick={() => changeTagged({})}>x</p></div>}
            Text<input id={"inpu"} {...input}/>
            <button onClick={() => {
                postRequests("comment", input.value);
                setInput()
            }}>Comment
            </button>
        </div>
    </div>)
}