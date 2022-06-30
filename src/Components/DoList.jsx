import React from "react";

export const DoList = props => {
    const {tasks,toDoneTask,onDeleteTask} = props;
    const elemOfTodo = [...tasks].map(elem => (
            <li key={elem.id} className="list-group-item"> 
                <input 
                    className="form-check-input me-1" 
                    type="checkbox" 
                    onChange={ ()=>{toDoneTask(elem.id)} } 
                    checked={elem.isDone}/>

                <p className={` d-inline ${elem.isDone? "text-decoration-line-through" : ""} `}>
                    {elem.text}
                </p>
                <p className="d-inline float-end mx-0 my-0" onClick={()=>onDeleteTask(elem.id)}>X</p>
            </li>
        )
    )

    return (
        <ul className="list-group">
            {elemOfTodo}
        </ul>
    )
}