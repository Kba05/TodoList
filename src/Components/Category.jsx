import React, {useContext} from "react"
import { ThemeContext } from "../Contexts/Context"

export const Category = props =>{
    const theme = useContext(ThemeContext);
    const { catList, active, onSetActive } = props;
    const catElem = [...catList].map( cat => (
            <li 
                key={cat.id} 
                className={`d-block my-3 py-2 px-2 rounded-start ${theme.textColor} ${active === cat.id ? theme.background : ""}`} 
                onClick={ () => onSetActive(cat.id) }>
                {cat.id==="default" ? "All of Tasks" : cat.text}
            </li>
        )
    );
    return(
        <ul>
            {catElem}
        </ul>

    );
}