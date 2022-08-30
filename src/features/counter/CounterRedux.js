import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmmount } from './counterSlice'
const CounterRedux = () => {
    const count = useSelector((state)=>state.Counter.count)
    const themeColor = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()
  return (
    <div>
       <button onClick={()=>{dispatch(increment())}}>Add</button>
       <span><h1 style={{color:themeColor}}>Count: {count}</h1></span>
       <button onClick={()=>{dispatch(decrement())}} >Dec</button>
       <button onClick={()=>{dispatch(incrementByAmmount(5))}} >IncrementBy 10</button>
    </div>
  )
}

export default CounterRedux