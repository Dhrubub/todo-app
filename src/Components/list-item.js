import React, {useState, useEffect} from 'react';

import 'font-awesome/css/font-awesome.min.css'

import "./index.css"

export const ListItem = (props) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(props.text);
    const [newText, setNewText] = useState(props.text);

    useEffect(() => {
        setNewText(props.text)
        setText(props.text)
    }, [props.text])

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(newText); 
        setEdit(!edit);
        props.onEditText(newText);

    } 

    return (
            <div className="list-item">
                <div 
                    className={"list-item-check " + (props.checked ? "checked" : "")}
                    onClick={()=>{
                    props.onCheck()}}>
                        {props.checked &&
                            <i className={"fa fa-check "}/>
                        }

                </div>
                <div className={"list-item-delete"} onClick={props.onErase}>
                    <i className="fa fa-trash"/>
                    
                </div>
                {!props.checked &&
                    <div className={"list-item-edit " + (edit ? "editing" : "")} onClick={()=>{setEdit(!edit)}}>{/**;document.getElementById("editText").focus() */}
                    <i className="fa fa-edit"/>
                    </div>
                }
                <div className="list-item-content">
                    {edit &&
                    <form onSubmit={(e)=>{handleSubmit(e)}} onReset={()=>{setEdit(!edit); setNewText(text)}}>
                        <input className="list-item-content-edit" id="editText" type="textfield" value={newText} onChange={(e)=>setNewText(e.target.value)}/>
                        <br/>
                        <input className="list-edit-save" type="submit" value="Save"/>
                        <input className="list-edit-cancel" type="reset" value="Cancel"/>
                     </form>
                        // <textarea 
                        // className="list-item-content-edit" 
                        // onChange={(e)=>setNewText(e.target.value)}>{text}</textarea>
                    
                    }
                    {!edit &&
                    <p className={(props.checked ? "line-through" : "")}>{text}</p>
                    }
                </div>
                {/* {edit &&
                <div className="list-edit-buttons">
                <button 
                    className="list-edit-save"
                    onClick={()=>{
                    setText(newText); 
                    setEdit(!edit);
                    props.onEditText(newText)}}>save</button>
                    
                <button 
                    className="list-edit-cancel"
                    onClick={()=>{setEdit(!edit)}}>cancel</button>
                </div>} */}

                
            
            </div>
            

    )


}