import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTextColor } from './theamSlice'

const Theam = () => {
    const themeColor = useSelector((state)=>state.theme.color)
    const[color, setColor] = useState()

    const dispatch = useDispatch()
  return (
    <div>
    <input type="text" onChange={(e)=>{setColor(e.target.value)}} />
        <button onClick={()=>{dispatch(changeTextColor(color))}} >Change text Color</button>
        <h1 style={{color:themeColor}}>{color}</h1>
    </div>
  )
}

export default Theam