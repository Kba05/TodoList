import React, { useState } from "react";
import { CAT_ID } from "../constants/todosConstants";

export const NewTask =  props => {
    const { catList, onAddNewTask, onClose} = props;
    const [ InputText, setInputText ] = useState('');
    const [ CategoryFromSelect, setCategory ] = useState(CAT_ID.default);

    const onClickAddNewTask = () => {
        if(InputText){
            onAddNewTask( InputText, CategoryFromSelect );
            setInputText("");
            setCategory(CAT_ID.default);
        }
    }

    const selectItem = [...catList].map(item => {
       return <option disabled={item.id===CAT_ID.default} key={item.id} value={item.id}>
                {item.text}
              </option>
    })

    return(
        <div>
            <p className="text-center">Add Your task</p>
            <input className="form-control mb-3" type="text" placeholder="Task" onChange={e => setInputText(e.target.value)} value={InputText}/>
            <select className="form-select mb-3" value={CategoryFromSelect} onChange={e => setCategory(e.target.value)}>
                {selectItem}
            </select>
            <button className="btn btn-outline-success" type="button" onClick={onClickAddNewTask}>Add</button>
            <button className="btn btn-outline-danger float-end" type="button" onClick={() => onClose(false)}>Close</button>
        </div>
    )
}
