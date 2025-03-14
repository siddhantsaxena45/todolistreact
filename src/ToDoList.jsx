import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([{ todo: "Task 1", id: uuidv4(), done: false }]);

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if (task.trim()) {
            setTasks(prevTasks => [...prevTasks, { todo: task, id: uuidv4(), done: false }]);
            setTask("");
        }
    };

    const removeTask = (id) => {
        setTasks(prevTasks => prevTasks.filter((t) => t.id !== id));
    };

    const upperCaseAll = () => {
        setTasks(prevTasks => prevTasks.map((t) => {
            return {
                ...t,
                todo: t.todo.toUpperCase()
            };
        }));
    };

    const upperCaseOne = (id) => {
        setTasks(prevTasks => prevTasks.map((t) => {
            if (t.id === id) {
                return {
                    ...t,
                    todo: t.todo.toUpperCase()
                };
            }
            return t;
        }));
    };

    const markAsDoneAll = () => {
        setTasks(prevTasks => prevTasks.map((t) => {
            return {
                ...t,
                done: true
            };
        }));
    };

    const markAsDoneOne = (id) => {
        setTasks(prevTasks => prevTasks.map((t) => {
            if (t.id === id) {
                return {
                    ...t,
                    done: true
                };
            }
            return t;
        }));
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <input
                type="text"
                placeholder="Add a task..."
                value={task}
                onChange={handleTaskChange}
            /> &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t) => (
                    <li key={t.id}>
                        <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.todo}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            <button onClick={() => removeTask(t.id)}>delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => upperCaseOne(t.id)}>UPPER CASE</button>
                            &nbsp;&nbsp;
                            <button onClick={() => markAsDoneOne(t.id)}>mark as done</button>
                        </span>
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UPPER CASE ALL</button>
            &nbsp;&nbsp;
            <button onClick={markAsDoneAll}>Mark as done</button>
        </div>
    );
};

export default ToDoList;