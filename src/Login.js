import React from 'react'
import './login.css'
import { useState } from 'react'
import LoginPopup from './components/popup/LoginPopup'
import ClearIcon from '@mui/icons-material/Clear'

const Login = (props) => {
  const [enteredUser, setEnteredUser] = useState('')
  const [enteredPass, setEnteredPass] = useState('')
  const [passStatus, setPassStatus] = useState(true)

  const userTypedHandler = (event) => {
    setEnteredUser(event.target.value)
  }
  const passTypedHandler = (event) => {
    setEnteredPass(event.target.value)
  }

  const checkPass = () => {
    if (enteredUser == 'admin' && enteredPass == '1234') {
      return props.onLogin()
    } else setPassStatus(true)
  }
  return (
    <div className='login'>
      <div className='loginTop'></div>
      <div className='loginContainer'>
        <h1 className='loginTitle'>Login to WMS</h1>
        <div className='loginInput'>
          <input
            type='text'
            placeholder='Username'
            onChange={userTypedHandler}></input>
        </div>
        <div className='loginInput'>
          <input
            type='password'
            placeholder='Password'
            onChange={passTypedHandler}></input>
        </div>
        <div className='loginSubmit'>
          <button onClick={checkPass}>Login</button>
        </div>
        <div className='login'>
          <LoginPopup trigger={passStatus} setTrigger={setPassStatus}>
            <div className='messageContainer'>
              Invalid username or password !!
            </div>
          </LoginPopup>
        </div>
      </div>
    </div>
  )
}

export default Login
