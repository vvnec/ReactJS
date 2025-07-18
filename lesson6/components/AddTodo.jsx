import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../redux/todoSlice';


const AddTodo = () =>{
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        if(!text.trim()) return
        dispatch(addTodo(text));
        setText("")
    }


    return(
        <div>
            <input 
            type="text"
            placeholder="Добавить задачу..."
            value={text}
            onChange={e=>setText(e.target.value)} />
        <button onClick={handleAdd}>Добавить</button>
        </div>
    )
}

export default AddTodo