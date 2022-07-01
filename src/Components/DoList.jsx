import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/Context";


export const DoList = props => {
    const theme = useContext(ThemeContext);
    const {tasks, toDoneTask, onDeleteTask} = props;
    const elemOfTodo = [...tasks].map(elem => (
            <li key={elem.id} className={`list-group-item ${theme.background} ${theme.textColor}`}> 
                <input 
                    className={`form-check-input me-1`} 
                    type="checkbox" 
                    onChange={ ()=>{toDoneTask(elem.id)} } 
                    checked={elem.isDone}/>

                <p className={`d-inline ${theme.textColor} ${elem.isDone ? "text-decoration-line-through" : ""} `}>
                    {elem.text}
                </p>
                <p className="d-inline float-end mx-0 my-0" onClick={()=>onDeleteTask(elem.id)}>X</p>
            </li>
        )
    );

    return (
        <ul className="list-group">
            {elemOfTodo.length === 0 
            ? 
            <div className="text-center my-5">Upss! Now you don't have tasks</div> 
            : 
            elemOfTodo }
        </ul>
    )
}