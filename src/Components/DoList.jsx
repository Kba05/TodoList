import React from "react";

export const DoList = props => {
    const {datas,toDoneTask} = props;
    const elemOfTodo = [...datas].map(elem => (
            <li key={elem.id} className="list-group-item"> 
                <input 
                    className="form-check-input me-1" 
                    type="checkbox" 
                    onChange={ ()=>{toDoneTask(elem.id)} } 
                    checked={elem.isDone}/>

                <p 
                    className={` d-inline ${elem.isDone? "text-decoration-line-through" : ""} `}>
                    {elem.text}
                </p>
            </li>
        )
    )

    return (
        <ul className="list-group">
            {elemOfTodo}
        </ul>
    )
}