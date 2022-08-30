import React from 'react'
import { useSelector } from 'react-redux'


const Coin = () => {
    const count1 = useSelector((state)=>(state.Counter.count))
    const themeColor = useSelector((state)=>(state.theme.color))
    
  return (
    <div>
    {/*<button onClick={()=>(dispatch(increment()))} >IncCoin</button>*/}
     <span style={{color: themeColor }}>Coin: {count1}</span>
    {/* <button onClick={()=>(dispatch(decrement()))} >DecCoin</button>*/}
    </div>
  )
}

export default Coin