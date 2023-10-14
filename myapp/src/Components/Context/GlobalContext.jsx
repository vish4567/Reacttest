import React from 'react'
import { createContext,useReducer } from 'react';

export const MyContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
        return{count:state.count+1}

        case "DECREMENT":
        return{count:state.count-1}

        case "RESET":
        return{count:0}
        
        default :
        return state
    }
    
}

const GlobalContext = ({children}) => {

    const initialState={counter:1234};

    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    
        <MyContext.Provider value={{state,dispatch}}>
            {children}
        </MyContext.Provider>


    
  )
}

export default GlobalContext