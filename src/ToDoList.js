import React from "react"
import Tasks from "./Tasks";

const ToDoList = () => {

    return (
        <div>
            <div className={"listName"}>
                <p>Todo List</p>
            </div>

            <div className={"enterTask"}>
                <input type={"text"}/>
            </div>

            <div className={"addTaskButton"}>
                <button>Add</button>
            </div>

            <div className={"tasks"}>
                <Tasks/>
            </div>

            <div className={"delete"}>
                <button>Delete All</button>
            </div>
        </div>
    )
}
export default ToDoList