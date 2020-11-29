import React, {useState, useEffect} from 'react';

import "./index.css"

export const ListItem = (props) => {
    const [check, setCheck] = useState(false)

    const [edit, setEdit] = useState(false);

    const [newText, setNewText] = useState("");

    const [text, setText] = useState(props.text)


    const [completed, setCompleted] = useState([])

    // const handleClick = () => {
    //     setCheck(!check)
    // } 

    return (
            <div className="list-item">
                <div 
                className={"list-item-check " + (props.checked ? "checked" : "")}
                onClick={()=>{
                    //handleClick(); 
                    props.onCheck()}}>

                </div>
                <div className="list-item-delete" onClick={props.onErase}>
                    <span>X</span>
                    
                </div>
                <div className="list-item-content">
                    {edit &&
                    <textarea className="list-item-content-edit" onChange={(e)=>setNewText(e.target.value)}>{text}</textarea>
                    }
                    {!edit &&
                    <p className={(props.checked ? "line-through" : "")}>{text}</p>
                    }
                </div>
                {!edit &&
                <button onClick={()=>setEdit(!edit)}>edit</button>
                }
                {edit &&
                <div>
                <button onClick={()=>{setText(newText); setEdit(!edit)}}>save</button>
                <button onClick={()=>{setEdit(!edit)}}>cancel</button>
                </div>}

                <hr/>
                
            
            </div>
            

    )


}