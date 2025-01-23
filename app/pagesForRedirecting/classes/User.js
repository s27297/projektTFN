'use client'

import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function User({user1}){
const {page,changePage,changeViewUserProfile,user,viewUserProfile,postRequests} = useContext(GlobalContext);
// console.log( page)
    return (
        <div style={{display: "block", margin: "auto", textAlign: "center", backgroundColor: "yellow"}}>
        { page==="allUsers" &&
        <div >
            <p onClick={()=>{
                changeViewUserProfile(user1);

                changePage("userProfile");
            }}>Login:{user1.login}</p>
        </div>}
            { page!=="allUsers" &&
                <div>
                    <div style={{display:"flex",justifyContent:"center" }}>
                        <p>Login:{user1.login}</p>
                        {user.login!==viewUserProfile.login &&  <p onClick={()=>postRequests("Add to friends",viewUserProfile.login)}
                           style={{marginLeft:"50px",border:"solid green, 3px", color:"green",backgroundColor:"wheat"}}>+</p>}
                    </div>

                    <p>Id:{user1._id}</p>
                    <p>Imie:{user1.name}</p>
                    <p>Email:{user1.email}</p>
                    <p>Miasto:{user1.miasto}</p>
                    <p>Wiek:{user1.wiek}</p>
                    {(user.login === user1.login || user.Admin) &&
                        <button onClick={() => changePage("editUserProfile")}>Edit Profile

                        </button>}
                   <div style={{justifyContent:"center"}}>
                    <button onClick={() => changePage("userPosts")}>Zobacz moi posty</button>
                   </div>
                </div>}
        </div>

    )
}