import React, {useState} from "react";
import { TASK_STATUS } from "../constants/todosConstants";

export const Nav = props => {
    const {onFilterByTaskState} = props
    const [active,setActive] = useState();

    const onClick = id => {
        setActive(id);
        onFilterByTaskState(id);
    }
    
    const statusElem = [...TASK_STATUS].map(status => (
            <li 
                key={status.id} 
                className={
                    `d-flex px-5 rounded-4 ${active===status.id? "bg-light": ""}`
                } 
                onClick={()=>onClick(status.id)}> 
                {status.text}
            </li>
       )
    );

    return(
        <nav className="navbar navbar-expand-lg  justify-content-between">
            <div className="navbar-brand bg-light px-2 rounded-4">
                ToDO List
            </div>
            <div className="navbar-nav">
                <ul className="d-flex mx-0 my-0">
                    {statusElem}
                </ul>
            </div>
        </nav>
    )
};