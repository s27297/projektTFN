"use client"
// import {v4} from "uuid";

import User from "@/app/pagesForRedirecting/classes/User";
import {useContext, useEffect, useLayoutEffect} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Filter from "@/app/pagesForRedirecting/paging/Filter";

export default function AllUsers() {
    const {users,getRequests,loading,filter,changeFilter
    ,name,changeFilteredUsers,filteredUsers,
    login,wiek,miasto,from0To100}=useContext(GlobalContext)

// console.log("cat")
    useEffect(()=>{
        getRequests("Users")


    },[])

    useEffect(()=>{
        changeFilteredUsers()

    },[users,name.value,filter,login.value,wiek.value,miasto.value,from0To100.value])
    if(loading)
        return <div>loading...</div>
    if(!users)return <p>brak userow</p>
    return <div style={{display:'flex',flexDirection:'column'} }>
        {filter&& <Filter key="Filter"/>}
        {!filter && <button onClick={()=>changeFilter(true)}>Use filtr</button>}
        <br key="br/"/>
        {filteredUsers.map(user => (<div key={user._id}>
            <User key={user._id} user={user}></User>
            <br key={user.id}/>
        </div>))}
    </div>
}