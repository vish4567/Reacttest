import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const Login = () => {
    
    const[userData,setUserData]=useState({name:"",email:"",password:""});
    const router=useNavigate();

    const handlechange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
        
    }

    return(
    <div>
      <h1>Register</h1>
      <form onSubmit={sendDataToBackend}>
    
         <label>Name:</label><br/>
         <input name="name" type="text" onChange={handlechange}/><br/>

         <label>Email:</label><br/>
         <input name="email" type="email" onChange={handlechange}/><br/>

         <label>Password:</label><br/>
         <input name="password" type="password" onChange={handlechange}/><br/>

         <input type="submit" value="Register"/><br/>
      </form>
    </div>
  )
}

export default Login 