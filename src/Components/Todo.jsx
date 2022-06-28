import React, {  useState, useEffect,} from "react";
import {NewTask} from "./NewTask";
import {DoList} from "./DoList";
import {Category} from "./Category";
import {Nav} from "./Nav"
import { todos } from "../__mocks__/todos";
import { CATEGORY, CAT_ID, STATUS } from "../constants/todosConstants";

export const Todo = () => {

    const [ datas, setData ] = useState([...todos]); 
    const [ filtedData, setFilterData ] = useState([...datas]);
    const [ active, setActive ] = useState(CAT_ID.default);
    const [ status, setStatus] = useState(STATUS.do);

    useEffect(()=>{
        const onFilterByTaskState = () => {
            let massive;
    
            if(active === CAT_ID.default){
                massive = [...datas];
            } else{
                massive = [...datas].filter(elem => elem.category === active);
            }
    
            if(status === STATUS.done){
                massive = [...massive].filter(elem => elem.isDone);  
            } else {
                massive = [...massive].filter(elem => !elem.isDone);  
            };
            setFilterData(massive);
        }
        onFilterByTaskState();
    },[active,status,datas]);

    const toDoneTask = id => {
        const tempArr = [...datas];
        const IndexOfToDone = tempArr.map(task => task.id).indexOf(id);
        tempArr[IndexOfToDone].isDone = !tempArr[IndexOfToDone].isDone;
        setData(tempArr);
    };

    const onAddNewTask = (text,category) => {
        const tempNewTask = {
            id: Math.floor(Math.random( ) * (999+1)),
            text,
            category,
            isDone : false
        };
        setData(prevState => [...prevState, tempNewTask]);
    };

    return(
        <div className="bg-light pt-2" style={{height:1000}}>
            <div className="container">

                <header className="bg-white rounded-3 px-4">
                    <Nav 
                        status={status}
                        onSetStatus={setStatus}/>
                </header>

                <main className="my-2">
                    <div className="row">

                        <div className="col-3">
                            <div className="bg-white rounded-3 py-4">
                                <Category 
                                    catList={CATEGORY} 
                                    active={active}
                                    onSetActive={setActive}/>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="bg-white rounded-2 px-4 py-4">
                                <NewTask catList={CATEGORY} onAddNewTask={onAddNewTask}/>
                                <DoList datas={filtedData} toDoneTask={toDoneTask}/>
                            </div>
                        </div>

                    </div>
                </main>
               

            </div>
        </div>
    )
}