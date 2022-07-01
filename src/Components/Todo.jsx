import React, { useState, useMemo } from "react";
import { NewTask } from "./NewTask";
import { DoList } from "./DoList";
import { Category } from "./Category";
import { Nav } from "./Nav"
import { Modal } from "./Modal/Modal";
import { todos } from "../__mocks__/todos";
import { CATEGORY, CAT_ID, STATUS, THEMES } from "../constants/todosConstants";
import { ThemeContext } from "../Contexts/Context"

export const Todo = () => {

    const [ datas, setData ] = useState([...todos]); 
    const [ active, setActive ] = useState(CAT_ID.default);
    const [ status, setStatus ] = useState(STATUS.do);
    const [ modalVisible, setModalVisible]  = useState(false);
    const [ theme, setTheme] = useState(THEMES.light);

    const filteredByCategory = useMemo(() => {
        if(active === CAT_ID.default){
            return [...datas];
        } else{
            return [...datas].filter(elem => elem.category === active);
        }
    },[active,datas]);

    const filteredByCategoryAndStatus = useMemo(() => {
        if(status === STATUS.done){
            return [...filteredByCategory].filter(elem => elem.isDone);  
        } else {
            return [...filteredByCategory].filter(elem => !elem.isDone);  
        };
    },[status, filteredByCategory]);

    const toDoneTask = id => {
        const tempArr = [...datas];
        const IndexOfToDone = tempArr.map(task => task.id).indexOf(id);
        tempArr[IndexOfToDone].isDone = !tempArr[IndexOfToDone].isDone;
        setData(tempArr);
    };

    const onDeleteTask = id =>{
        const newArr = [...datas].filter(elem => elem.id !== id);
        setData(newArr);
    };

    const onAddNewTask = (text,category) => {
        const tempNewTask = {
            id: Math.floor(Math.random( ) * (999+1)),
            text,
            category,
            isDone : false
        };
        setData(prevState => [...prevState, tempNewTask]);
        setActive(category);
        setStatus(STATUS.do);
        setModalVisible(false);
    };

    return(
        <>
            <ThemeContext.Provider value={theme}>
                <Modal visible={modalVisible} onClose={setModalVisible}>
                    <NewTask catList={CATEGORY} onAddNewTask={onAddNewTask}/> 
                </Modal>

                <div className={`${theme.background} pt-2`} style={{height:1000}}>
                    <div className="container">

                        <header className={`${theme.cardBackground} rounded-3 px-4`}>
                            <Nav 
                                status={status} 
                                onSetStatus={setStatus}
                                setModalVisible={setModalVisible}
                                onChangheTheme={setTheme}/>
                        </header>

                        <main className="my-2">
                            <div className="row">

                                <div className="col-3">
                                    <div className={`${theme.cardBackground} rounded-3 py-4`}>
                                        <Category 
                                            catList={CATEGORY} 
                                            active={active}
                                            onSetActive={setActive}/>
                                    </div>
                                </div>

                                <div className="col-9">
                                    <div className={`${theme.cardBackground} ${theme.textColor} rounded-2 px-4 py-4`}>
                                        <p>List of tasks:</p>
                                        <DoList tasks={filteredByCategoryAndStatus} toDoneTask={toDoneTask} onDeleteTask={onDeleteTask}/>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
       
    )
}