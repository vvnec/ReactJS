import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todos: [], 

}

const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const newTodo ={
            id: Date.now(),
            text: action.payload
        }

        state.todos.push(newTodo)
    },
    removeTodo: (state, action) =>{
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
},


})

export const { addTodo, removeTodo} =  todoSlice.actions

export default todoSlice.reducer
