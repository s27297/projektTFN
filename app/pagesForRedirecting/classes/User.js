'use client'

import {useContext, useEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function User({user}){
const {page} = useContext(GlobalContext);
// console.log( page)

    return (
        <div style={{display: "block", margin: "auto", textAlign: "center", backgroundColor: "yellow"}}>
        { page==="allUsers" &&
        <div >
             <p>Id:{user._id}</p>
            {/*<p>Imie:{user.name}</p>*/}
            {/*<p>Email:{user.email}</p>*/}
            <p>Login:{user.login}</p>

        </div>}
            { page!=="allUsers" &&
                <div>
                    <p>Id:{user._id}</p>
                    <p>Imie:{user.name}</p>
                    <p>Email:{user.email}</p>
                    <p>Login:{user.login}</p>
                    <p>Miasto:{user.miasto}</p>
                    <p>Wiek:{user.wiek}</p>

                </div>}
        </div>

    )
}