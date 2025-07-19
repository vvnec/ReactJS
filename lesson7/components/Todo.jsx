import React, { useState } from "react";

export default function Todo(){
    
    const[input, setInput] = useState('');
    const[tasks, setTasks] = useState([]);

    const handleAdd = () =>{
        if(!input.trim()) return;
        const newTask = {
            id: Date.now(),
            text: input,
        };
        setTasks([...tasks, newTask]);
        setInput('');
    };

    const handleRemove = (id) =>{
        setTasks(tasks.filter((task) => task.id !==id));
    };

    return(
        <div>
            <h1>My ToDo List</h1>
            <input
             placeholder="Enter task"
             value = {input}
             onChange={(e)=>setInput(e.target.value)}             
             />
             <button onClick={handleAdd}>Add</button>
             <ul>
                {tasks.map((task)=>
                <li key={task.id}>
                    {task.text}
                <button onClick={()=>handleRemove(task.id)}>Delete</button>
                </li>
                )}
             </ul>
        </div>
        
    )
}
