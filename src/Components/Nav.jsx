import React, {useState} from "react";

function Nav(props){
    const {onFilterByTaskState}= props
    const [navbarList] = useState([{id:"do", text:"do"},{id:"done", text:"done"}]);
    const [active,setActive] = useState([""]);

    const onClick= (id)=>{
        setActive(id);
        onFilterByTaskState(id);
    }
    
    const navbarElem =  navbarList.map(function(navbar){
       return (
            <li 
                key={navbar.id} 
                className={
                    `d-flex px-5 rounded-4 ${active===navbar.id? "bg-light": ""}`
                } 
                onClick={()=>{onClick(navbar.id)}}> 
                {navbar.text}
            </li>
       )
    });

    return(
        <nav className="navbar navbar-expand-lg  justify-content-between">
            <div className="navbar-brand bg-light px-2 rounded-4">
                ToDO List
            </div>
            <div className="navbar-nav">
                <ul className="d-flex mx-0 my-0">
                    {navbarElem}
                </ul>
            </div>
        </nav>
    )
}
export default Nav;