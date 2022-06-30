import React, { useMemo, useState } from "react";
import { CAT_ID } from "../constants/todosConstants";

export const NewTask =  props => {
    const { catList, onAddNewTask} = props;
    const [ InputText, setInputText ] = useState('');
    const [ CategoryFromSelect, setCategory ] = useState(CAT_ID.default);
    const [ emptyInput, setEmptyInput] = useState();
    const [ defaultCategory, setDefaultCategory] = useState();
    useMemo(()=>{
        setEmptyInput(InputText.length === 0 ? true : false);
        setDefaultCategory(CategoryFromSelect === CAT_ID.default ? true : false );
    },[InputText, CategoryFromSelect]);

    const onClickAddNewTask = () => {
        if(!emptyInput && !defaultCategory){
            onAddNewTask( InputText, CategoryFromSelect );
            setInputText("");
            setCategory(CAT_ID.default);
        }
    };

    const selectItem = [...catList].map(item => {
       return <option disabled={item.id === CAT_ID.default} key={item.id} value={item.id}>
                {item.text}
              </option>
    });

    return(
        <>
            <div className="my-5">
                <p className="text-center">Add Your task</p>
                <input className="form-control mb-3" type="text" placeholder="Task" onChange={e => setInputText(e.target.value)} value={InputText}/>
                <select className="form-select mb-3" value={CategoryFromSelect} onChange={e => setCategory(e.target.value)}>
                    {selectItem}
                </select>
                <button className="btn btn-outline-success float-end" type="button" onClick={onClickAddNewTask}>Add</button>
            </div>
            <div className="py-3">{emptyInput ? "- Please fill input with your task" : ""}</div> 
            <div>{defaultCategory ? "- Please choose category for your task" : ""}</div>
        </> 
    )
}
