import React, {useState} from "react";
function Nav(){
    const onClick= (id)=>{
        setActive(id)
    }
    const [navbarList] = useState([{id:1, text:"do"},{id:2, text:"done"}]);
    const [active,setActive] = useState([""]);


    const navbarElem =  navbarList.map(function(navbar){
       return (
            <li 
                key={navbar.id} 
                className={
                    active===navbar.id?"d-flex px-5 rounded-4 bg-light": "d-flex px-5 rounded-4"
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