import React, { useState } from "react";
import './App.css';

// export default function App() {
function App() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(Number(count) + 1)       
    }
    const increment2 = () => {
    setCount(Number(count) - 1)       
    }
    const increment3 = () => {
    setCount(Number(count*count).toFixed(2))       
    }
    const increment4 = () => {
    setCount(Number(count/2).toFixed(2))       
    }
    const increment5 = () => {
    setCount(0)       
    }

    return (
        <>
        <div className="content">
            <h1>{count}</h1>
            <button onClick={increment}>Увеличить</button>
            <button onClick={increment2}>Уменьшить</button>
            <button onClick={increment3}>Умножить</button>
            <button onClick={increment4}>Разделить на 2</button>
            <button onClick={increment5}>Отчистить</button>
        </div>
        </>
    )
}

export default App