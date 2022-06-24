import React from "react";
import NewTask from "./NewTask";
import DoList from "./DoList";
import Category from "./Category";
import Nav from "./Nav";

function Todo(){
    return(
        <div className="bg-light pt-2" style={{height:1000}}>

            <div className="container">

                <header className="bg-white rounded-3 px-4">
                    <Nav/>
                </header>

                <main className="my-2">
                    <div className="row">

                        <div className="col-3">
                            <div className="bg-white rounded-3 py-4">
                                <Category/>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="bg-white rounded-2 px-4 py-4">
                                <NewTask/>
                                <DoList/>
                            </div>
                        </div>

                    </div>
                </main>
               

            </div>

        </div>
    )
}
export default Todo;