import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/todoSlice";



const TodoList = () => {
    const todos = useSelector(state=>state.todo.todos)
    const dispatch = useDispatch()

    return(
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                     удалить
                </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList