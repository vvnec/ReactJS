import React, { useEffect, useState } from "react";

const Contact = () => {

    const [count, setCount] = useState(1.3)
            
            
                useEffect(()=>{
                  console.log('Счетчик изменился:', count);
                }, [count]);
            
            
                return (
                  <div className="content">
                  <h1>Счетчик: {count}</h1>
                  <button onClick={() => setCount(Number(count*count).toFixed(2))}>Умножить</button>
                  </div>
                )
}

export default Contact;