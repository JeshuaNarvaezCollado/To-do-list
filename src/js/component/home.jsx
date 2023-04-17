import React, { useState } from "react";

const Home = () => {
    const [name, setName] = useState("");
    const [tasks, setTasks] = useState([]);

    let nextTask = tasks.length;

    const addTask = (event) => {
        if (event.key === "Enter") {
            if (name.length !== 0) {
                let tempTask = [...tasks, { id: nextTask, name: name }];
                setTasks(tempTask);
            }
            setName("");
        }
    };

    const removeTask = (item) => {
        let removeList = tasks.filter((task) => item.id !== task.id);
        setTasks(removeList);
    };

    return (
        <div className="container-fluid text-center mt-2">
            <h1 className="h1">To-Do List</h1>
            <div className="main">
                <input
                    className="border-0 rounded-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Add a task here!..."
                    onKeyDown={addTask}
                />

                <ul>
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="w-50 d-flex justify-content-between align-items-center container-fluid rounded-2 my-3"
                        >
                            {task.name}
                            <button
                                className="delete rounded-2 border-1 my-2 p-1"
                                onClick={() => {
                                    removeTask(task);
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="items mx-auto rounded-1">
                    ~ {nextTask} items left ~
                </div>
            </div>
        </div>
    );
};

export default Home;