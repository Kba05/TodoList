import React, {useState} from "react"

function Category(props){
    const {catList,toAddNewCat,onFilterByCategory} = props
    const [active,setActive] = useState("home");
    const [newCatId, setNewCatId] = useState('');
    const [newCatText, setNewCatText] = useState('');

    const onClickAddCat=(e)=>{
        e.preventDefault();
        const newcat={
            id:newCatId,
            text:newCatText
        }
        toAddNewCat(newcat);
        setNewCatId("");
        setNewCatText("");
    }

    const onClickToCategory = (id)=>{
        setActive(id);
        onFilterByCategory(id);
    }

    const catElem = catList.map( (cat) => {
        return(
            <li 
                key={cat.id} 
                className={`d-block my-3 py-2 px-2 rounded-start ${active === cat.id? 'bg-light': ""}`} 
                onClick={()=>onClickToCategory(cat.id)}>
                {cat.id==="default" ? "Все" : cat.text}
            </li>
        )

    })
    
    return(
        <>
            <ul>
                {catElem}
            </ul>
            <div className="mx-4">
                <button className="btn btn-outline-success" onClick={onClickAddCat}>+ Add Categoty</button>
                <input type="text" value={newCatId} onChange={(e)=>setNewCatId(e.target.value)} />
                <input type="text" value={newCatText} onChange={(e)=>setNewCatText(e.target.value)} />
            </div>
        </>

    )
}

export default Category