
import React, { useEffect, useState } from 'react'

const Counter = () => {
    // const [count,setCount]=useState(0);
    // console.log(count);
     
    let count=0;
    useEffect(()=>{
        console.log(count);
    },[] )
    
  return (

    <div>
        <h1>Counter App</h1>
        <h3>count:{count}</h3>
        {/* <button onClick={() => setCount(count + 1)} style={{background:"lightgreen"}}>Increment</button>
       */}

       <button onClick={()=>count+1}>Click Me</button>
    </div>
  )
}

export default Counter
