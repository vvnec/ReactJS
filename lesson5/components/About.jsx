import React, { useEffect, useState } from "react";

const About = () => {

        const [count, setCount] = useState(0)
        
        
            useEffect(()=>{
              console.log('Счетчик изменился:', count);
            }, [count]);
        
        
            return (
              <div className="content">
              <h1>Счетчик: {count}</h1>
              <button onClick={() => setCount(Number(count) - 1)}>Уменьшить</button>
              </div>
            )
};

export default About;