'use client'


import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function AdminPage () {
    const {changePage}=useContext(GlobalContext)

    return(
        <div>
            <button onClick={() => changePage("repports")}>
                show rapports
            </button>
            <br/>
            <button onClick={() => changePage("textsForBan")}>
                show texts for ban
            </button>
        </div>
    )
}