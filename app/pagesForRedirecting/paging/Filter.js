"use client"


import {useInput} from "@/app/hooks/useInput";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default  function Filter() {
const {name,wiek,login,miasto,from0To100,changeFilter}=useContext(GlobalContext)
    // console.log(name)
    return (<div style={{display:"flex", flexDirection:"column"}}>
        <h1>Filter</h1>
        <label>Imie:<input className={"input"} type="text" name="name" id="name" {...name}></input></label>
        <label> login:<input  className={"input"}  type="text" name="login" id="login" {...login}></input></label>
        <label>miasto:<input className={"input"}  type="text" name="miasto" id="miasto" {...miasto}></input></label>
        <label> Wiek:<input className={"input"} type="number" name="wiek" id="wiek" {...wiek}></input></label>
        <div>Wyberz czy sortowanie po wieku musi i być wzrastające czy
        malejące
        <select name="ASCORDESC" id="ASCORDESC" {...from0To100} >
        <option value={1}>Asc</option>
        <option value={0}>Desc</option>
        </select></div>
    <button onClick={()=>changeFilter(false)}>Not use Filter</button>
    </div>)
}