import React, { useState } from "react";
import { CAT_ID } from "../constants/todosConstants";

export const NewTask =  props => {
    const { catList, onAddNewTask } = props;
    const [ InputText, setInputText ] = useState();
    const [ CategoryFromSelect, setCategory ] = useState();

    const onType = e => {
        setInputText(e.target.value)
    }

    const onSelect = e => {
        setCategory(e.target.value)
    }

    const onClickAddNewTask = () => {
        if(InputText){
            onAddNewTask( InputText, CategoryFromSelect );
            setInputText("");
            setCategory(CAT_ID.default);
        }
    }

    const selectItem = [...catList].map(item => {
       return <option key={item.id} value={item.id} >{item.text}</option>
    })

    return(
        <div className="input-group mb-3">
            <input  className="form-control" type="text" placeholder="Recipient's username" onChange={onType} value={InputText}/>
            <select className="form-select" value={CategoryFromSelect} onChange={onSelect}>
                {selectItem}
            </select>
            <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={onClickAddNewTask}>Add</button>
        </div>
    )
}
