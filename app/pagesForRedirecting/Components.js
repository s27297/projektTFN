'use client'

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import Login from "@/app/pagesForRedirecting/forms/Login";
import SignIn from "@/app/pagesForRedirecting/forms/SignIn";
import User from "@/app/pagesForRedirecting/classes/User";
import MyPage from "@/app/pagesForRedirecting/paging/MyPage";
import AllUsers from "@/app/pagesForRedirecting/paging/AllUsers";
import ShowComponentChanging from "@/app/pagesForRedirecting/ShowComponentChanging";
import UserProfile from "@/app/pagesForRedirecting/paging/UserProfile";
import EditUserProfile from "@/app/pagesForRedirecting/forms/EditUserProfile";
import Messages from "@/app/pagesForRedirecting/paging/Messages";
import MessagesBetweenUsers from "@/app/pagesForRedirecting/paging/MessagesBetweenUsers";
import {blue} from "next/dist/lib/picocolors";
import Friends from "@/app/pagesForRedirecting/paging/Friends";
import Settings from "@/app/pagesForRedirecting/paging/Settings";
import MyPosts from "@/app/pagesForRedirecting/postsAndComments/MyPosts";
import AddPost from "@/app/pagesForRedirecting/forms/AddPost";
import UserPosts from "@/app/pagesForRedirecting/postsAndComments/UserPosts";
import ViewPost from "@/app/pagesForRedirecting/postsAndComments/ViewPost";

export default function Components() {
const {page,user}=useContext(GlobalContext)
    // console.log(page);
    // console.log(user)
    return(
        <div style={{height:'100%'}}>
            {page === "logIn" && <Login></Login>}
            {page === "signIn" && <SignIn></SignIn>}
            {user.login &&<div className="flexRow">
                <div style={{width: "20%"}}>
                    <ShowComponentChanging></ShowComponentChanging>
                </div>
                <div style={{width: "80%"}}>
                    {page === "allUsers" && <AllUsers></AllUsers>}
                    {page === "myPage" && <MyPage></MyPage>}
                    {page === "userProfile" && <UserProfile></UserProfile>}
                    {page === "editUserProfile" && <EditUserProfile></EditUserProfile>}
                    {page === "friends" && <Friends></Friends>}
                    {page === "settings" && <Settings></Settings>}
                    {page === "addPost" && <AddPost></AddPost>}
                    {page === "myPosts" && <MyPosts></MyPosts>}
                    {page === "post" && <ViewPost></ViewPost>}
                    {page === "userPosts" && <UserPosts></UserPosts>}
                    {page === "messages" && <div style={{display:"flex", height:"100%"}}><div style={{flex:"30%"}}> <Messages /></div>
                       <div style={{backgroundColor:"red",flex:"70%"}}> <MessagesBetweenUsers /></div></div>}

                </div>
            </div>}
        </div>
    )
}