import React from "react";

const Tasks = () => {
    let taskName = null
    return (
        <div id={"task"}>
            {taskName}
            <input className={"isComplete"} type={"checkbox"}/>
        </div>
    )
}
export default Tasks