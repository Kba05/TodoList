import React from "react";
import { TASK_STATUS } from "../constants/todosConstants";

export const Nav = props => {
    const { status, onSetStatus, setModalVisible} = props
    
    const onClick = id => {
        onSetStatus(id);
    }
    
    const statusElem = [...TASK_STATUS].map(stat => (
            <li 
                key={stat.id} 
                className={
                    `d-block px-5 py-1 rounded-4 ${status===stat.id? "bg-light": ""}`
                } 
                onClick={()=>onClick(stat.id)}> 
                    {stat.text}
            </li>
       )
    );

    return(
        <nav className="navbar navbar-expand-lg  justify-content-between">
            <div className="navbar-brand bg-light px-2 rounded-4">
                ToDO
            </div>
            <div className="navbar-nav">
                <button className="btn btn-light btn-sm rounded-4 px-4" onClick={()=>setModalVisible(true)}>+ Add Task</button>
                <ul className="d-flex mx-0 my-0">
                    {statusElem}
                </ul>
            </div>
        </nav>
    )
};