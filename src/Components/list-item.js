import React, {useState, useEffect} from 'react';

import "./index.css"

export const ListItem = (props) => {
    const [check, setCheck] = useState(false)

    const [edit, setEdit] = useState(false);


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
                    <textarea>{props.edit}</textarea>
                    }
                    {!edit &&
                    <p className={(props.checked ? "line-through" : "")}>{props.text}</p>
                    }
                </div>
                <button onClick={()=>setEdit(!edit)}>edit</button>
                <hr/>
                
            
            </div>
            

    )


}