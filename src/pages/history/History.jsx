import React from 'react'
import './history.css'
import HistoryTable from '../../components/chart/HistoryTable'
import { useState } from 'react'

export default function History() {
  const [textTyped, setTextTyped] = useState('')

  const historyTypeHandler = (event) => {
    setTextTyped(event.target.value)
  }

  const searchData = {
    text: textTyped,
  }
  return (
    <div className='history'>
      <div className='historyTitleContainer'>
        <h1 className='historyTitle'>History</h1>
        <div className='historySearch'>
          <input
            type='text'
            placeholder='Enter Task ID'
            value={textTyped}
            onChange={historyTypeHandler}></input>
          <button className='historyLastestButton'>Latest task</button>
        </div>
        <HistoryTable onTyped={searchData} />
      </div>
    </div>
  )
}
