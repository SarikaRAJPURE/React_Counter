import React, { useEffect } from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    // first select element
    // addEventListener(click, () => {})

    useEffect(()=>{
        // make that call to database when count changes
    },[count])
    const handleIncrement = () => {
        console.log("running increment");
        // logic to change count
        let newCount = count+1;
        setCount(newCount)
        //make a call to database
    }

    const handleDecrement = () => {
        console.log("running decrement");
        // count--
        // count = count -1
        setCount(count - 1)
        //make a call to database
    }
    
    const handleReset=()=>{
        //let count = 0;
        setCount(0);
    }
  return (
    <div style={{marginTop: "40px"}}>
        <span>Current Count: {count}</span>
        <section>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    </div>
  )
}

export default Counter