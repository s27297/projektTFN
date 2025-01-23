'use client'
"use strict"


import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaCheck, FaTrash} from "react-icons/fa";

export default function Friend({friend,accept}) {
    const {user,users,changeViewUserProfile,changePage,deleteRequests,putRequests}=useContext(GlobalContext);
    // console.log(user.login)
    return(<div >
        <div className="flexRow" style={{height:'50px'}}>
            {user.login !== friend.login1 && <p onClick={() => {
                changeViewUserProfile(users.find(u => u.login = friend.login1));
                changePage("userProfile");
            }}>{friend.login1}</p>}

            {user.login !== friend.login2 && <p onClick={() => {
                changeViewUserProfile(users.find(u => u.login = friend.login2));
                changePage("userProfile");
            }}>{friend.login2}</p>}

            <button onClick={() => deleteRequests("Friend", friend._id)}><FaTrash style={{fontSize:50}}/></button>
            {!accept&&<button onClick={() => putRequests("Friend", friend._id)}><FaCheck style={{fontSize:50}}/></button>}
        </div>

    </div>)
}