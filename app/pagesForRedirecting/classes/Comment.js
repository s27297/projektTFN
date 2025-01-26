"use client"

import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {FaTrash} from "react-icons/fa";

export default function Comment({comment,margin=0}){
const {user,deleteRequests,changeTagged,changeEditCommit,changePage}=useContext(GlobalContext);
// console.log(comment.tags);
//     console.log(margin)
    return <div style={{marginLeft:margin}}>
        {user._id===comment.user && <div>
            <button onClick={() => deleteRequests("comment", comment._id)}><FaTrash/></button>
            <button style={{marginLeft:"10px"}} onClick={() => {
                changeEditCommit(comment);
                changePage("editCommit")
            }}>edit
            </button>
        </div>
            }
            <div className={"flexRow"}><p>Owner: {comment.user}</p>
                <button onClick={() => changeTagged(comment)}>odpowedz nz komentarz</button>
            </div>
            <p>{comment.text}</p>
            {comment.tags && comment.tags.length > 0 && comment.tags.map(tag => <Comment margin={margin + 30}
                                                                                         key={tag._id} comment={tag}/>)}

        </div>
        }