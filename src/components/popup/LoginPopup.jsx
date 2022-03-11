import React, { useState } from 'react'
import './loginpopup.css'

function LoginPopup(props) {
  return props.trigger ? (
    <div className='loginpopup'>
      <div className='loginpopup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default LoginPopup
