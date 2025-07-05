import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList";
// import "./TodoList.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TodoList(){

    let [tasks, setTasks] = useState([{id: uuidv4(), task: "Code", isDone: false}]);
    let [newTask, setNewTask] = useState([""]);

    let inputNewTask = (event) => {
        setNewTask(event.target.value);
    }

    let addNewTask = () => {
        setTasks([...tasks, {id: uuidv4(), task: newTask, isDone: false}]);
        setNewTask("");
    }

    let deleteTask = (id) => {
        let RemainingTasks = tasks.filter((task) => task.id != id);
        setTasks(RemainingTasks);
    }

    let taskDone = (id) => {
        let updatedTask = tasks.map((task) => {
            return task.id === id ? {...task, isDone: !task.isDone} : task;
            });
        setTasks(updatedTask);
    }

    return (
        <div>
            <div className=" border text-white w-2/5 mx-auto mt-16 p-8 rounded-xl">
                <div>
                <input type="text" placeholder="Enter your task here" value={newTask} onChange={inputNewTask} className="p-2 w-full text-black rounded-xl outline-none"/>
                <button onClick={addNewTask} className="p-2 bg-green-500 w-full mt-2 rounded-xl font-medium">Add Task</button>
                </div>

                <div className="mt-4">
                <h1 className="text-xl font-medium">Here are your tasks</h1>
                    <ul>
                        {
                            tasks.map((task) => (
                                <li key={task.id} style={{textDecoration: task.isDone ? "line-through" : "none"}} className="bg-white text-black p-2 mt-3 flex justify-between rounded-xl">
                                <p>{task.task}</p>
                                <span>
                                <button onClick={() => deleteTask(task.id)}
                                className="bg-red-500 px-2 rounded text-white rounded-xl">Delete</button>

                                <button onClick={() => {taskDone(task.id)}}className="bg-red-500 px-2 rounded text-white ml-2 rounded-xl">Mark as Completed</button>
                                </span>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}