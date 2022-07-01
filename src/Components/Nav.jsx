import React, {useContext} from "react";
import { TASK_STATUS, THEMES } from "../constants/todosConstants";
import { ThemeContext } from "../Contexts/Context";


export const Nav = props => {
    const { status, onSetStatus, setModalVisible, onChangheTheme} = props;
    const theme = useContext(ThemeContext);
    const onClick = id => {
        onSetStatus(id);
    };
    const statusElem = [...TASK_STATUS].map(stat => (
            <li 
                key={stat.id} 
                className={
                    `d-block px-5 rounded-4 ${theme.textColor}  ${status === stat.id ? theme.background : ""}`
                } 
                onClick={()=>onClick(stat.id)}> 
                    {stat.text}
            </li>
       )
    );

    return(
        <nav className="navbar navbar-expand-lg  justify-content-between">
            <div className={`navbar-brand px-4 rounded-5 ${theme.background} ${theme.textColor}`}>
                ToDO
            </div>
            <div className="navbar-nav">
                <button 
                    className={`btn btn-sm rounded-5 px-4 me-5 ${theme.btnColor}`} 
                    onClick={()=>setModalVisible(true)}>
                        + Add Task
                </button>
                <ul className={`d-flex mx-0 my-0 px-0 py-0 border border-1 rounded-5 ${theme.border}`}>
                    {statusElem}
                </ul>
                <button 
                    className={`btn btn-sm rounded-5 px-4 ms-5 ${theme.btnColor}`} 
                    onClick={()=>onChangheTheme(theme === THEMES.light? THEMES.dark : THEMES.light)}>
                    {theme === THEMES.light? "Change to Dark" : "Change to Light"}
                </button>
            </div>
        </nav>
    )
};