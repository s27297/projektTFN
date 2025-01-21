"use client"
import { useState} from "react";
import{createContext} from "react";
import {useInput} from "@/app/hooks/useInput";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [users,setUsers]=useState([]);
    const [filteredUsers,setFilteredUsers]=useState([]);
    const [loading,setLoading]=useState(false);
    const [token,setToken]=useState("");
    const [user,setUser]=useState({});
    const [iAmUser,setIAmUser]=useState({});
    const [page,setPage]=useState("logIn");
    const [name,setName] =useInput("");
    const [wiek,setWiek] =useInput(0);
    const [from0To100,setFrom0To100]=useInput(true);
    const [login,setLogin] =useInput("");
    const [miasto,setMiasto] =useInput("");
    const [filter,setFilter]=useState(false);


    const logIn=(values)=>{
        console.log(token)
        const zaloguj=async (values) => {
             await fetch(`http://localhost:5000/auth/login`,
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {'Content-Type': 'application/json'},
                })
                .then(res => res.json())
                .then(async r => {
                    console.log(r);
                    if (r.success) {
                       setToken(r.token)
                        // console.log(token)
                        setUser(r.user);
                        setIAmUser(r.user);
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
        console.log(type)
        const getFunction=async (value,type)=> {
            switch (type) {
                case "User id":
                    setLoading(true);
                    await fetch(`http://localhost:5000/users/${value}/profile`, {
                        headers: {'Authorization': 'Bearer ' + token},
                    }).then(res => res.json())
                        .then(res => {
                            console.log(res)
                            if (res.success ) {
                                setUser(res.data)
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
                            console.log(res)
                            if (res.success ) {
                                setUsers(res.data)
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
    const changePage=(page)=>{
        setPage(page);
    }
const changeFilter=(value)=>setFilter(value)
const changeFilteredUsers =(us)=> {
    const filtruj=async()=>{
        if(filter){
            new Promise(()=>{
                let newList=[]
                console.log(from0To100)
                users.map(user=>{
                    if( user.name.startsWith(name.value)&&
                        user.login.startsWith(login.value)&&
                        user.miasto.startsWith(miasto.value)&&
                        (wiek.value<1||((user.wiek>(wiek.value)&&from0To100.value==1)||(user.wiek<(wiek.value)&&from0To100.value==0)))
                    )
                        newList.push(user)
                })
                console.log(newList)
                setFilteredUsers(newList)}

            ).catch(err=>console.log(err))
            //      await console.log(newList);
        }
        else{
            setFilteredUsers(users)}
    }
    filtruj()
    console.log(filteredUsers)
}


    return (
        <GlobalContext.Provider value={{logIn,signIn,wiek,from0To100,
        changePage,page,user,getRequests,token,users,name,login,miasto,
            filter,changeFilter,filteredUsers,changeFilteredUsers}}>
            {children}
        </GlobalContext.Provider>
    );
}