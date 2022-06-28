import React from "react"

export const Category = props =>{
    const { catList, onFilterByCategory, active, onSetActive } = props

    const onClickToCategory = id =>{
        onSetActive(id);
        onFilterByCategory(id);
    }

    const catElem = [...catList].map( cat => (
            <li 
                key={cat.id} 
                className={`d-block my-3 py-2 px-2 rounded-start ${active === cat.id? 'bg-light': ""}`} 
                onClick={ () => onClickToCategory(cat.id) }>
                {cat.id==="default" ? "Все" : cat.text}
            </li>
        )
    )
    
    return(
        <>
            <ul>
                {catElem}
            </ul>
        </>

    )
}