"use client"

import {useContext, useRef} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaSignOutAlt, FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

export default function Group({group}){
    const {users,changePage,changeViewUserProfile,changeEditGroup,putRequests,deleteRequests,user}=useContext(GlobalContext);
    const dodajDoGrupy=useRef("")

    // console.log(group.participants[0])
    // console.log(users)
    // console.log(users.find(user1=>user1._id===group.participants[0]))
    const groupMembers=group.participants.map(participant=>participant=users.find(user=>user._id===participant));
    // console.log(groupMembers);
    return <div>
        <div className="flexRow" style={{justifyContent: "center"}}><p
            style={{textAlign: "center"}}>Name: {group.name}</p>
            <FaPencil style={{marginLeft: "5px"}} onClick={() => {
                changeEditGroup(group);
                changePage("editGroup");
            }}/></div>
        <div className="flexRow" style={{justifyContent: "center"}}>
            <p style={{textAlign: "center"}}>Participants</p><FaSignOutAlt style={{marginLeft: "5px"}} onClick={
            ()=>deleteRequests("member",{id:group._id,member:user._id})
        }/></div>
        {groupMembers && groupMembers.map(member =>
            <p key={member._id} onClick={() => {
                changeViewUserProfile(member);
                changePage("userProfile");
            }}>{member.login}</p>
        )}
        <label>Id:<input key={group._id} ref={dodajDoGrupy} style={{border:"solid 1px black"}}/>
            <button onClick={() => {
                putRequests("Add to group", {id: group._id, member: dodajDoGrupy.current.value})
                dodajDoGrupy.current.value = ""
            }}>Add to group
            </button>
        </label>
    </div>
}