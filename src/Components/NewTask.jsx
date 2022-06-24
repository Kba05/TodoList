import React from "react";

function NewTask(){
    return(
        <div className="input-group mb-3">
            <input  className="form-control"  type="text"placeholder="Recipient's username"/>
            <button className="btn btn-outline-success" type="button" id="button-addon2">Add</button>
        </div>
    )
}
export default NewTask;