import React, { useContext } from 'react'
import { ThemeContext } from '../../Contexts/Context';
import mod from '../Modal/modal.module.css'


export const Modal = (props) => {
    const{visible, onClose, children}=props;
    const theme = useContext(ThemeContext)
    const rootClasses = [mod.myModal];
    const childrenClasses = [mod.myModal__content, theme.background]
    if(visible){
        rootClasses.push(mod.active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={()=>onClose(false)}>
            <div className={childrenClasses.join(" ")} onClick={(e)=>e.stopPropagation()}>
                <button className={`btn float-end ${theme.btnColor}`} type="button" onClick={() => onClose(false)}>X</button>
                {children}
            </div>        
        </div>
    )
}
