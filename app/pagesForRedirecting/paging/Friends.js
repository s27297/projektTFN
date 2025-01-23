"use client"


import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Friend from "@/app/pagesForRedirecting/classes/Friend";

export default function Friends() {
    const {getRequests,loading,friends}=useContext(GlobalContext);

    useEffect(() => {
       getRequests("Friends");
    }, []);
    // console.log(friends)

    if(loading)return <div>loading...</div>
    if(!friends.length)return <div>Nie masz przyjacelow</div>
    return <div className="flexRow">
         <div style={{flex:50,borderWidth:"1px"}}>
             <p style={{textAlign:"center"}}>Accepted</p>
             {friends.filter(friend=>friend.accepted===true).map((friend)=><Friend key={friend._id} accept={true} friend={friend}/>)}
         </div>
        <div style={{flex:50,borderWidth:"1px"}}>
            <p style={{textAlign:"center"}}>not accepted</p>
            {friends.filter(friend=>friend.accepted===false).map((friend)=><Friend key={friend._id} accept={false} friend={friend}/>)}
        </div>
    </div>
}