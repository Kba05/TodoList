import React, { useState } from "react";
import NewTask from "./NewTask";
import DoList from "./DoList";
import Category from "./Category";
import Nav from "./Nav";

function Todo(){

    const [datas,setData] = useState([
        {
            id:1,
            text:"clean up at home",
            category: "home",
            isDone:true
        },
        {
            id:2,
            text:"go to univer",
            category: "univer",
            isDone:false
        },
        {
            id:3,
            text:"Do tasks",
            category: "work",
            isDone:false
        }
    ]);
    const toDoneTask = (id)=>{
        const IndexOfToDone = datas.map(task=> task.id).indexOf(id);
        datas[IndexOfToDone].isDone = !datas[IndexOfToDone].isDone;
        setData([...datas]);
    }
    const onAddNewTask = (text,categoty)=>{
        const tempNewTask ={
            id: new Date().toDateString(),
            text:text,
            category:categoty,
            isDone:false
        };
        setData([...datas,tempNewTask]);
    }


    const[catList,setNewCat] = useState([
        {id:"default",text:"Выберите категорию"},
        {id:"home", text:"Home Task"},
        {id:"univer", text:"University tasks"},
        {id:"work", text:"Work tasks"},

    ]);
    const toAddNewCat = (newcat) =>{
        setNewCat([...catList,newcat])
    }



    const onFilterByCategory= (category)=>{
        let  arr;
        if(category==="default"){
            arr=datas;
        } else{
            arr = datas.filter(function(elem){
                return elem.category === category
            });
        }
        setFilterData(arr)

    }
    const [filtedData,setFilterData]=useState([...datas]);

    const onFilterByTaskState =(taskState)=>{
        let massive;
        if(taskState==="done"){
            massive = datas.filter(function(elem){
                return elem.isDone
            });  
        }else{
            massive = datas.filter(function(elem){
                return !elem.isDone
            });  
        }
        setFilterData(massive)
    }

    return(
        <div className="bg-light pt-2" style={{height:1000}}>
            <div className="container">

                <header className="bg-white rounded-3 px-4">
                    <Nav onFilterByTaskState={onFilterByTaskState}/>
                </header>

                <main className="my-2">
                    <div className="row">

                        <div className="col-3">
                            <div className="bg-white rounded-3 py-4">
                                <Category catList={catList} toAddNewCat={toAddNewCat} onFilterByCategory={onFilterByCategory} />
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="bg-white rounded-2 px-4 py-4">
                                <NewTask catList={catList} onAddNewTask={onAddNewTask}/>
                                <DoList datas={filtedData} toDoneTask={toDoneTask}/>
                            </div>
                        </div>

                    </div>
                </main>
               

            </div>
        </div>
    )
}
export default Todo;