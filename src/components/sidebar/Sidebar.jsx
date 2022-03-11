import React from 'react'
import './sidebar.css'
import { Airplay, Feed, Timeline, History, QrCode2 } from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to={'/'} className='link'>
              <li className='sidebarListItem'>
                <Airplay className='sidebarIcon' />
                Menu
              </li>
            </Link>
            <Link to={'/inventory'} className='link'>
              <li className='sidebarListItem'>
                <Feed className='sidebarIcon' />
                Inventory
              </li>
            </Link>
            <Link to={'/forecast'} className='link'>
              <li className='sidebarListItem'>
                <Timeline className='sidebarIcon' />
                Forecast
              </li>
            </Link>
            <Link to={'/history'} className='link'>
              <li className='sidebarListItem'>
                <History className='sidebarIcon' />
                History
              </li>
            </Link>
            <Link to={'/barcode'} className='link'>
              <li className='sidebarListItem'>
                <QrCode2 className='sidebarIcon' />
                Barcode
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
