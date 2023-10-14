import React, { useContext } from 'react'
import {  MyContext } from './Context/GlobalContext'

const Homepage = () => {
    const{state,dispatch}=useContext(MyContext)
  return (
    <div>Homepage
        <h1>Counter:{state.counter}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>


    </div>
  )
}

export default Homepage