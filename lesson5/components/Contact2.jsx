import React, { useEffect, useState } from "react";

const Contact2 = () => {

    const [count, setCount] = useState(125)
            
            
                useEffect(()=>{
                  console.log('Счетчик изменился:', count);
                }, [count]);
            
            
                return (
                  <div className="content">
                  <h1>Счетчик: {count}</h1>
                  <button onClick={() => setCount(Number(count/2).toFixed(2))}>Разделить</button>
                  </div>
                )
}

export default Contact2;