'use client'


import {useContext, useRef} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function AdminPage () {
    const {changePage,deleteRequests,postRequests}=useContext(GlobalContext)
const userForBanOrRefresh=useRef("")
    // console.log(userForBanOrRefresh).cure
    return(
        <div>
            <button onClick={() => changePage("repports")}>
                show rapports
            </button>
            <br/>
            <button onClick={() => changePage("textsForBan")}>
                show texts for ban
            </button>
            <br/>
            <br/>
            <label>Input for id:<input style={{border:"solid 1px black"}} ref={userForBanOrRefresh}/>
                <button onClick={() =>{
                    deleteRequests("BanUser",userForBanOrRefresh.current.value)
                    userForBanOrRefresh.current.value=""
                }}>Ban</button>
                <button onClick={() =>{
                    postRequests("RefreshUser",userForBanOrRefresh.current.value)
                    userForBanOrRefresh.current.value=""
                }}>Refresh</button>

                </label>
        </div>
    )
}

//