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
    const [ active, setActive ] = useState(CAT_ID.home);
    const [ status, setStatus] = useState(STATUS.done);

    useEffect(()=>{
        // onFilterByCategory(active);
        onFilterByTaskState(status);
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

    const onFilterByCategory = category => {
        // let  arr;
        // if(category === CAT_ID.default){
        //     arr = [...datas];
        // } else{
        //     arr = [...datas].filter(elem => elem.category === category);
        // }
        // setFilterData(arr);
    };

    const onFilterByTaskState = () => {
        let massive;
        if(status === STATUS.done){
            massive = [...datas].filter(elem => elem.isDone && elem.category === active);  
        } else {
            massive = [...datas].filter(elem => !elem.isDone && elem.category === active);  
        }
        
        setFilterData(massive);
    }

    return(
        <div className="bg-light pt-2" style={{height:1000}}>
            <div className="container">

                <header className="bg-white rounded-3 px-4">
                    <Nav 
                        // onFilterByTaskState={onFilterByTaskState}
                        status={status}
                        onSetStatus={setStatus}/>
                </header>

                <main className="my-2">
                    <div className="row">

                        <div className="col-3">
                            <div className="bg-white rounded-3 py-4">
                                <Category 
                                    catList={CATEGORY} 
                                    onFilterByCategory={onFilterByCategory}  
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