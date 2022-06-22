import React from "react";

function Todo(){
    return(
        <div className="container border rounded mt-1 pb-1">
            <div className="d-flex">
                <div className="rounded bg-light bg-gradient fs-4 text fw-lighter">
                    <p className="text-center fw-normal">Категории</p>
                    <ul>
                        <li className="d-block px-3 rounded-start ">По работе</li>
                        <li className="d-block px-3 rounded-start bg-white">По учебе</li>
                        <li className="d-block px-3 rounded-start">По дому</li>
                        <li className="d-block px-3 rounded-start">И другие</li>
                    </ul>
                </div>
                <div  style={{width:1000}} className="border border-2 border-light">
                    <ul className="px-0 py-0 d-flex  bg-light bg-gradient fs-4 text fw-lighter justify-content-around">
                        <li className="d-flex rounded-top px-3 bg-white">ToDo</li>
                        <li className="d-flex rounded-top px-3">Done</li>
                    </ul>
                    <div > ToDo</div>
                    <div> Done</div>
                </div>
            </div>
        </div>
    )
}
export default Todo;