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
import EditCommit from "@/app/pagesForRedirecting/forms/EditCommit";
import Groups from "@/app/pagesForRedirecting/paging/Groups";
import AddGroup from "@/app/pagesForRedirecting/forms/AddGroup";
import EditGroup from "@/app/pagesForRedirecting/forms/EditGroup";
import EditPost from "@/app/pagesForRedirecting/forms/EditPost";
import AddEvent from "@/app/pagesForRedirecting/forms/AddEvent";
import Events1 from "@/app/pagesForRedirecting/paging/Events1";
import EditEvent from "@/app/pagesForRedirecting/forms/EditEvent";
import AdminPage from "@/app/pagesForRedirecting/admin/AdminPage";
import Raports from "@/app/pagesForRedirecting/admin/Raports";
import TextsForBan from "@/app/pagesForRedirecting/admin/TextsForBan";

export default function Components() {
const {page,user}=useContext(GlobalContext)
    // console.log(page);
    // console.log(user)
    return(
        <div style={{height:'100vh'}}>
            {page === "logIn" && <Login></Login>}
            {page === "signIn" && <SignIn></SignIn>}
            {user.login &&<div className="flexRow">
                <div style={{flex: "20"}}>
                    <ShowComponentChanging></ShowComponentChanging>
                </div>
                <div style={{flex: "80"}}>
                    {page === "allUsers" && <AllUsers></AllUsers>}
                    {page === "myPage" && <MyPage></MyPage>}
                    {page === "userProfile" && <UserProfile></UserProfile>}
                    {page === "friends" && <Friends></Friends>}
                    {page === "settings" && <Settings></Settings>}
                    {page === "myPosts" && <MyPosts></MyPosts>}
                    {page === "post" && <ViewPost></ViewPost>}
                    {page === "events" && <Events1></Events1>}
                    {page === "groups" && <Groups></Groups>}
                    {page === "userPosts" && <UserPosts></UserPosts>}
                    {page === "messages" && <div style={{display:"flex", height:"100%"}}><div style={{flex:"30%"}}> <Messages /></div>
                        <div style={{backgroundColor:"red",flex:"70%"}}> <MessagesBetweenUsers /></div></div>}


                    {page === "editUserProfile" && <EditUserProfile></EditUserProfile>}
                    {page === "addPost" && <AddPost></AddPost>}
                    {page === "editCommit" && <EditCommit></EditCommit>}
                    {page === "editEvent" && <EditEvent></EditEvent>}
                    {page === "addGroup" && <AddGroup></AddGroup>}
                    {page === "editGroup" && <EditGroup></EditGroup>}
                    {page === "editPost" && <EditPost></EditPost>}
                    {page === "addEvent" && <AddEvent></AddEvent>}


                    {page === "adminPage" && <AdminPage></AdminPage>}
                    {page === "repports" && <Raports></Raports>}
                    {page === "textsForBan" && <TextsForBan></TextsForBan>}


                </div>
            </div>}
        </div>
    )
}