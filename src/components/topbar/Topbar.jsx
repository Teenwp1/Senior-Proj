import React from 'react'
import './topbar.css'
import { Logout, AccountCircle } from '@mui/icons-material'
import { useNavigate } from 'react-router'

export default function Topbar(props) {
  let navigate = useNavigate()
  const logOutHandler = () => {
    navigate('')
    props.onLogout()
  }
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'></div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <AccountCircle />
          </div>

          <span className='user'>User_Name</span>
          <div className='topbarIconContainer'>
            <Logout onClick={logOutHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}
