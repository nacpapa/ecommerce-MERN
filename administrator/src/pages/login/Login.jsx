import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../../redux/apiCalls"

import "./Login.css"
export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }
  return (
   <>
   <div className='login-container'>
   <input type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }}/>
   <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
   <button onClick={handleClick}>Login</button>
   </div>
   </>
  )
}
