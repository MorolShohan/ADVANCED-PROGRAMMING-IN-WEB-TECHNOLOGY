import React, { useState, useEffect } from 'react';

export default function CounterComponent () {
    
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    
    const handleIncrement = () => {
        setCount(count + 1);
    };
  
    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

