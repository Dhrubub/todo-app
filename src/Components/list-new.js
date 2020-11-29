import React, {useState} from 'react';
import {ListItem} from "./list-item"

export const ListNew = () => {
    const [listItems, setListItems] = useState([])
    const [completed, setCompleted] = useState([])

    const [text, setText] = useState("")


    const handleSubmit = (props) => {
        setText(text.trim())
        if (text.length > 0){
            setListItems([...listItems, [text]])
            setText("")
        }
    }

    const handleEraseChecked = (text, index) => {
        setListItems(listItems.filter((items, id) => id !== index ))
    }

    const handleEraseUnChecked = (text, index) => {
        setCompleted(completed.filter((items, id) => id !== index ))
    }

    const handleCheck = (text, index) => {
        setListItems(listItems.filter((items, id) => id !== index ))
        setCompleted([...completed, [text]])
    }

    const handleUnCheck = (text, index) => {
        setCompleted(completed.filter((items, id) => id !== index ))
        setListItems([...listItems, [text]])
    }

    

    return (
        <div className="list-container">
            <textarea 
                className="list-input" 
                rows={5} 
                value={text} 
                onChange={(e)=>setText(e.target.value)}
                onKeyDown={(e)=> {
                    if (e.code === "Enter") {
                        e.preventDefault();
                        console.log("enter was pressed")
                        handleSubmit()
                    }}}>
                
            </textarea>
            <button 
                className="list-submit" 
                onClick={() => handleSubmit()}>Submit</button>

            {listItems.length > 0 &&
                <div className="list-item-container">
                    <h1>TODO</h1>
                    <hr />
                    {listItems.map((text, index) => (
                        <ListItem 
                        key={index}
                        text={text}
                        onErase={()=>handleEraseChecked(text, index)}
                        onCheck={()=>handleCheck(text, index)} />
                    )).reverse()}
                </div>
            }

            {completed.length > 0 &&
                <div className="completed-item-container">
                    <h1>COMPLETED</h1>
                    <hr />
                    {completed.map((text, index) => (
                        <ListItem 
                        key={index}
                        text={text}
                        onErase={()=>handleEraseUnChecked(text, index)}
                        onCheck={()=>handleUnCheck(text, index)} 
                        checked/>
                    )).reverse()}
                </div>
            }

        </div>
    )
}