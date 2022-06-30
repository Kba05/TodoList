import React from 'react'
import mod from '../Modal/modal.module.css'

export const Modal = (props) => {
    const{visible, onClose, children}=props;

    const rootClasses = [mod.myModal];
    if(visible){
        rootClasses.push(mod.active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={()=>onClose(false)}>
            <div className={mod.myModal__content} onClick={(e)=>e.stopPropagation()}>
                <button className="btn float-end" type="button" onClick={() => onClose(false)}>X</button>
                {children}
            </div>        
        </div>
    )
}
