import React, { useEffect, useState } from "react";
import './App.css';
 
function App() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log('✅ Компонент смонтирован');

      return ()=>{
        console.log('❌ Компонент размонтирован');
      };
    }, []);

    useEffect(()=>{
      console.log('Счетчик изменился:', count);
    }, [count]);


    return (
      <div className="content">
      <h1>Счетчик: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      </div>
    )
}

export default App