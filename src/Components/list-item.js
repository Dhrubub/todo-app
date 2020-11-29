import React, {useState, useEffect} from 'react';

import "./index.css"

export const ListItem = (props) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(props.text);
    const [newText, setNewText] = useState(props.text);

    useEffect(() => {
        setNewText(props.text)
        setText(props.text)
    }, [props.text])

    return (
            <div className="list-item">
                <div 
                className={"list-item-check " + (props.checked ? "checked" : "")}
                onClick={()=>{
                    props.onCheck()}}>

                </div>
                <div className="list-item-delete" onClick={props.onErase}>
                    <span>X</span>
                    
                </div>
                {!edit && props.canEdit &&
                <button 
                    className="list-item-delete"
                    onClick={()=>setEdit(!edit)}>edit</button>
                }
                <div className="list-item-content">
                    {edit &&
                    <textarea 
                        className="list-item-content-edit" 
                        onChange={(e)=>setNewText(e.target.value)}>{text}</textarea>
                    }
                    {!edit &&
                    <p className={(props.checked ? "line-through" : "")}>{text}</p>
                    }
                </div>
                {edit &&
                <div>
                <button onClick={()=>{
                    setText(newText); 
                    setEdit(!edit);
                    props.onEditText(newText)}}>save</button>
                    
                <button onClick={()=>{setEdit(!edit)}}>cancel</button>
                </div>}

                <hr/>
                
            
            </div>
            

    )


}