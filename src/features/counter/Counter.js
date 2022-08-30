import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0)
  return (
    <div>
    <button onClick={()=>{setCount(count+1)}}>Inc</button>
    <span>Count: {count}</span>
    <button onClick={()=>{setCount(count-1)}}>Dec</button>
    </div>
  )
}

export default Counter
