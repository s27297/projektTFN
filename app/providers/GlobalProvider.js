"use client"
import {useMemo, useReducer, useState} from "react";
import{createContext} from "react";
import {useInput} from "@/app/hooks/useInput";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [users,setUsers]=useState([]);
    const [filteredUsers,setFilteredUsers]=useState([]);
    const [loading,setLoading]=useState(false);
    const [token,setToken]=useState("");
    const [user,setUser]=useState({});
    const [friends,setFriends]=useState([]);
    const [page,setPage]=useState("logIn");
    const [name,setName] =useInput("");
    const [wiek,setWiek] =useInput(0);
    const [from0To100,setFrom0To100]=useInput(true);
    const [login,setLogin] =useInput("");
    const [miasto,setMiasto] =useInput("");
    const [posts, setPosts] = useState([])

    const [viewUserProfile,setViewUserProfile]=useState({});
    const [filter,changeFilter]=useReducer(filter=>!filter,false);
    const [messageTo,setMessageTo]=useState({});
    const [messages,setMessages]=useState([]);
    const [darkMode,setDarkMode]=useState(false);
    const [viewPost,setViewPost]=useState({});
    const [comments,setComments]=useState([]);
    // const [userPosts,setUserPosts]=useState("");

    const logIn=(values)=>{
        // console.log(token)
        const zaloguj=async (values) => {
             await fetch(`http://localhost:5000/auth/login`,
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {'Content-Type': 'application/json'},
                })
                .then(res => res.json())
                .then(async r => {
                    // console.log(r);
                    if (r.success) {
                       setToken(r.token)
                        // console.log(token)
                        setUser(r.user);
                        // setIAmUser(r.user);
                        setMessageTo(r.user);
                        // console.log(r.user)
                        // console.log(r.user.darkmode)
                        setDarkMode(r.user.darkmode)
                        setTimeout(() => setPage("myPage"), 10);

                    } else
                        alert(r.message);
                })
                .catch(err => {console.log(err);alert("logowanie nie udalo")})

        }
        zaloguj(values)


    }
    const signIn=async(values)=>{
        const sign=async (values) => {
            await fetch(`http://localhost:5000/users/register`,
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {'Content-Type': 'application/json'},
                })
                .then(res => res.json())
                .then(r => {
                    console.log(r);
                    if(r.success) {
                        setPage("logIn");
                       // setToken(r.token);
                        alert("rejestracja udala")}
                    else
                        alert(r.data)
                })
                .catch(err => {console.log(err);alert("rejestracja nie udala")})

        }
        sign(values)
    }

    const getRequests=async (type,value=null)=>{
        // console.log(type+"    ")
        const getFunction=async (value,type)=> {
            // console.log("get")
            switch (type) {
                case "Messages":
                    if(!users.length )getRequests("Users")
                    setLoading(true);
                    await fetch(`http://localhost:5000/messages/users`, {
                        headers: {'Authorization': 'Bearer ' + token},
                        // body: JSON.stringify({to:messageTo}),
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if (res.success ) {
                                setMessages(res.data)
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;
                case "Users":
                    setLoading(true);
                    await fetch(`http://localhost:5000/users/all`, {
                        headers: {'Authorization': 'Bearer ' + token},
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if (res.success ) {
                                setUsers(res.data)
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;
                    case "Friends":
                        // console.log("rat")
                    setLoading(true);
                    await fetch(`http://localhost:5000/friends`, {
                        headers: {'Authorization': 'Bearer ' + token},
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if (res.success ) {

                                // console.log("qwer")
                              setFriends(res.data)
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;
                case "User":
                    // console.log(value)
                    setLoading(true);
                    await fetch(`http://localhost:5000/users/${viewUserProfile._id}/profile`, {
                        headers: {'Authorization': 'Bearer ' + token},
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if (res.success ) {
                                if(viewUserProfile.login===user.login)
                                    setUser(value)
                                setViewUserProfile(value)
                                getRequests("Users")
                                changePage("userProfile")
                            }
                            else{
                                alert(res.data)
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;
                case "Posts":
                    setLoading(true);
                    // console.log(value)
                    // console.log(`http://localhost:5000/posts?user=${value}`)
                    await fetch(`http://localhost:5000/posts?user=${value}`, {
                        headers: {'Authorization': 'Bearer ' + token},

                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if (res.success ) {

                                setPosts(res.data)
                                // setFriends(res.data)
                            }
                            else {
                                setPosts([])
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;
                case "MyPosts":

                    setLoading(true);
                    await fetch(`http://localhost:5000/posts`, {
                        headers: {'Authorization': 'Bearer ' + token},

                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if (res.success ) {

                                setPosts(res.data)
                                // setFriends(res.data)
                            }
                            else {
                                setPosts([])

                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;
                case "PostComments":
                    console.log("cat")
                    setLoading(true);
                    await fetch(`http://localhost:5000/posts/${viewPost._id}/comments`, {
                        headers: {'Authorization': 'Bearer ' + token},

                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            console.log(res)

                            if (res.success ) {
                               // setPosts(res.data)
                                // setFriends(res.data)
                            }
                            else {
                                setComments([])

                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(setLoading(false))
                    break;


            }
        }
        getFunction(value,type)
    }

    const postRequests= (type,value=null)=>{
        const postFunction=async (value,type)=> {
            switch (type) {
                case "Message":
                    await fetch(`http://localhost:5000/messages`, {
                        method: "POST",
                        headers: {'Authorization': 'Bearer ' + token,"Content-Type":"application/json"},
                        body: JSON.stringify(value),
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                           // console.log(res.data)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(
                            ()=>getRequests("Messages")

                        )
                    break;
                case "Add to friends":
                    await fetch(`http://localhost:5000/friends`, {
                        method: "POST",
                        headers: {'Authorization': 'Bearer ' + token,"Content-Type":"application/json"},
                        body: JSON.stringify({login:value}),
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if(res.success) {
                                alert("zaproszenie wyslano")
                            }
                            else
                                alert(res.data)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    break;
                case "Post":
                    await fetch(`http://localhost:5000/posts`, {
                        method: "POST",
                        headers: {'Authorization': 'Bearer ' + token,"Content-Type":"application/json"},
                        body: JSON.stringify(value),
                    }).then(res => res.json())
                        .then(res => {
                            if(res.success) {
                                changePage("myPosts")
                            }
                            else{alert(res.data)}
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    break;
            }
        }
        postFunction(value,type)
    }

    const putRequests= (type,values=null)=>{
        const putFunction=async (values,type)=> {
            // console.log(values)
            switch (type) {
                case "User Profile":
                    await fetch(`http://localhost:5000/users/${viewUserProfile._id}/profile`,
                    {
                        method: "PUT",
                        body: JSON.stringify(values),
                        headers: {'Authorization': 'Bearer ' + token,"Content-Type":"application/json"},

                    })
                    .then(res => res.json())
                    .then(r => {
                        // console.log(r)
                        if(r.success) {
                            getRequests("User",{...values,_id:viewUserProfile._id})
                        }
                        if(!r.success) {alert(r.data)}
                    })
                    .catch(err => {console.log(err)})

                    break;
                case "Friend":
                    console.log("cat")

                    await fetch(`http://localhost:5000/friends/${values}`, {
                        method:"PATCH",
                        headers: {'Authorization': 'Bearer ' + token},
                    }).then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            if(!res.success)
                                alert(res.data)

                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(getRequests("Friends"))
                    break;
                case "Settings":
                    // console.log("cat")
                    // values=!darkMode
                    console.log(values)
                    await fetch(`http://localhost:5000/users/${user._id}/settings`, {
                        method:"PATCH",
                        headers: {'Authorization': 'Bearer ' + token,"Content-Type":"application/json"},
                        body: JSON.stringify({darkmode:values}),
                    }).then(res => res.json())
                        .then(res => {
                            if(res.success) {
                                setUser({...user,darkmode:values})
                                setDarkMode(values)
                            }
                            else
                                alert(res)

                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        // .finally(getRequests("Friends"))
                    break;
                case "AddLike":
                    // console.log("cat")
                    // values=!darkMode
                    await fetch(`http://localhost:5000/posts/${values}/likes`, {
                        method:"PUT",
                        headers: {'Authorization': 'Bearer ' + token,"Content-Type":"application/json"},
                        body: JSON.stringify({tryToLike:values}),
                    }).then(res => res.json())
                        .then(res => {
                            if(res.success) {
                                // setUser({...user,darkmode:values})
                                // setDarkMode(values)
                                getRequests("Posts",viewUserProfile._id)
                            }
                            else
                                alert(res.data)

                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    // .finally(getRequests("Friends"))
                    break;
            }
        }
        putFunction(values,type)
    }

    const deleteRequests= (type,values=null)=>{
        const deleteFunction=async (values,type)=> {
            console.log("cat")

            switch (type) {
                case "Friend":
                    console.log("cat")

                    await fetch(`http://localhost:5000/friends/${values}`, {
                        method:"DELETE",
                        headers: {'Authorization': 'Bearer ' + token},
                    }).then(res => res.json())
                        .then(res => {
                            console.log(res)
                        if(!res.success)
                                alert(res.data)

                        })
                        .catch((err) => {
                            console.log(err)
                        })
                        .finally(getRequests("Friends"))
                    break;
            }
        }
        deleteFunction(values,type)
    }
    const changePage=(page,post=null)=>{
        if(page==="post") {
            setViewPost(post)
        console.log("cat")
        }
        setPage(page);
    }

const changeFilteredUsers =(us)=> {
    const filtruj=async()=>{
        // console.log(filter)
        if(filter){
    // console.log(miasto.value)
    //         console.log(users)
            new Promise(()=>{
                let newList=[]
                users.map(user=>{
                    if( user.name.startsWith(name.value)&&
                        user.login.startsWith(login.value)&&
                        (!miasto.value||(user.miasto&&user.miasto.startsWith(miasto.value)))&&
                        (wiek.value<1||((user.wiek>(wiek.value)&&from0To100.value==1)||(user.wiek<(wiek.value)&&from0To100.value==0)))
                    )
                        newList.push(user)
                })
                // console.log(newList)
                setFilteredUsers(newList)}

            ).catch(err=>console.log(err))
            //      await console.log(newList);
        }
        else{
            setFilteredUsers(users)}
    }
    filtruj()
    // console.log(filteredUsers)
}
const changeViewUserProfile=(userr)=>{setViewUserProfile(userr)}
const changeMessageTo=user=>setMessageTo(user)

    return (
        <GlobalContext.Provider value={{logIn,signIn,wiek,from0To100,changeFilter,filter,
        changePage,page,user,getRequests,token,users,name,login,miasto,messages,loading,
            filteredUsers,changeFilteredUsers,viewUserProfile,changeViewUserProfile,putRequests,
        messageTo,changeMessageTo,postRequests,friends,deleteRequests,darkMode,posts,viewPost,comments}}>
            {children}
        </GlobalContext.Provider>
    );
}