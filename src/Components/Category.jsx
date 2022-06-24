import React, {useState} from "react"

function Category(){
    const[catList,setNewCat] =useState([
        {id:"home", text:"Home Task"},
        {id:"univer", text:"University tasks"},
        {id:"work", text:"Work tasks"},

    ])
    const [active,setActive] = useState("home");

    const [newCatId, setNewCatId] = useState('');
    const [newCatText, setNewCatText] = useState('');

    const OnClickAdd=(e)=>{
        e.preventDefault();
        const newcat={
            id:newCatId,
            text:newCatText
        }
        setNewCat([...catList,newcat]);
        setNewCatId("");
        setNewCatText("");
    }

    const catElem =catList.map((cat)=>{
        const activeClass = active === cat.id? 'bg-light': ""
        const catClass = `d-block my-3 py-2 px-2 rounded-start ${activeClass}`;
        return(
            <li key={cat.id} className={catClass} onClick={()=>setActive(cat.id)}>
                {cat.text}
            </li>
        )
    })
    return(
        <ul>
            {catElem}
            <li className="d-block">
                <button className="btn btn-outline-success" onClick={OnClickAdd}>+ Add Categoty</button>
                <input type="text" value={newCatId} onChange={(e)=>setNewCatId(e.target.value)} />
                <input type="text" value={newCatText} onChange={(e)=>setNewCatText(e.target.value)} />
            </li>
        </ul>
    )
}
export default Category