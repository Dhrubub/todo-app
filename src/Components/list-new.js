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

    const handleEraseUnChecked = (text, index) => {
        setListItems(listItems.filter((items, id) => id !== index ))
    }

    const handleEraseChecked = (text, index) => {
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

    const handleEdit = (newText, index) => {
        let tempArray = [...listItems]
        tempArray.reduce((text, id) => {
            if (id == index) {
                text = newText;
            }
        })
        tempArray[index] = newText
        setListItems(tempArray)

    } 


    
    return (
        <div className="list-container">
            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit();}}>

                <input className="list-input" type="textarea" value={text} onChange={(e)=>setText(e.target.value)}/>
                <input  className="list-submit" type="submit" value="Submit"/>

            </form>
            
            {listItems.length < 1 && completed.length < 1 &&
                <h1>NO TASKS</h1>
            }

            {listItems.length > 0 &&
                <div className="list-item-container">
                    <h1>TODO</h1>
                    <hr />
                    {listItems.map((text, index) => (
                        <ListItem 
                        key={index}
                        text={text}
                        onEditText={(newText)=>handleEdit(newText, index)}
                        onErase={()=>handleEraseUnChecked(text, index)}
                        onCheck={()=>handleCheck(text, index)}
                        />
                    )).reverse()}
                </div>
            }

            {completed.length > 0 &&
                <div className="list-item-container completed-item-container">
                    <h1>COMPLETED</h1>
                    <hr />
                    {completed.map((text, index) => (
                        <ListItem 
                        key={index}
                        text={text}
                        onErase={()=>handleEraseChecked(text, index)}
                        onCheck={()=>handleUnCheck(text, index)} 
                        checked/>
                    )).reverse()}
                </div>
            }

        </div>
    )
}