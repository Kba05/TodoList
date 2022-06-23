import React from "react";

function Todo(){
    return(
        <div className="bg-light pt-2" style={{height:1000}}>

            <div className="container">

                <header className="bg-white rounded-3 px-4">
                    <nav className="navbar navbar-expand-lg  justify-content-between">
                        <div className="navbar-brand bg-light px-2 rounded-4">
                            ToDO List
                        </div>
                        <div className="navbar-nav">
                            <ul className="d-flex mx-0 my-0">
                                <li className="d-flex px-5 rounded-4">do</li>
                                <li className="d-flex px-5 rounded-4 bg-light">done</li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className="my-2">
                    <div className="row">

                        <div className="col-3">
                            <div className="bg-white rounded-3 py-4">
                                <ul>
                                    <li className="d-block my-3 py-2 px-2 rounded-start bg-light">
                                        Home tasks
                                    </li>
                                    <li className="d-block my-3 py-2 px-2 rounded-start">
                                        University tasks
                                    </li>
                                    <li className="d-block my-3 py-2 px-2 rounded-start">
                                        Work tasks
                                    </li>
                                    <li className="d-block my-3 py-2 px-2 rounded-start">
                                        + Add Categoty
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="bg-white rounded-2 px-4 py-4">
                                <div className="input-group mb-3">
                                    <input  className="form-control"  type="text"placeholder="Recipient's username"/>
                                    <button className="btn btn-outline-success" type="button" id="button-addon2">Add</button>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" />
                                        First checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" />
                                        Second checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" />
                                        Third checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" />
                                        Fourth checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" />
                                        Fifth checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" />
                                       Sixts checkbox
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </main>
               

            </div>

        </div>
    )
}
export default Todo;