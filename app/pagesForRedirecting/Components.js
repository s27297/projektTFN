'use client'

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Login from "@/app/pagesForRedirecting/forms/Login";
import SignIn from "@/app/pagesForRedirecting/forms/SignIn";
import User from "@/app/pagesForRedirecting/classes/User";
import MyPage from "@/app/pagesForRedirecting/paging/MyPage";
import AllUsers from "@/app/pagesForRedirecting/paging/AllUsers";
import ShowComponentChanging from "@/app/pagesForRedirecting/ShowComponentChanging";

export default function Components() {
const {page}=useContext(GlobalContext)
    // console.log(page);
    return(
        <div>
            {page === "logIn" && <Login></Login>}
            {page === "signIn" && <SignIn></SignIn>}
            <div className="flexRow">
                <div style={{width: "20%"}}>
                    <ShowComponentChanging></ShowComponentChanging>
                </div>
                <div style={{width: "80%"}}>
                    {page === "allUsers" && <AllUsers></AllUsers>}
                    {page === "myPage" && <MyPage></MyPage>}
                </div>
            </div>
        </div>
    )
}