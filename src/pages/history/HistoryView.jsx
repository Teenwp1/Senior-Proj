import React from 'react'
import './historyview.css'
import { useParams } from 'react-router'
import HistoryViewTable from '../../components/chart/HistoryViewTable'
import { useNavigate } from 'react-router-dom'

export default function HistoryView() {
  const { taskId } = useParams()
  const navigate = useNavigate()
  return (
    <div className='historyview'>
      <div className='historyviewTitleContainer'>
        <h1 className='historyviewTitle'>Task ID: {taskId}</h1>
        <button
          onClick={() => {
            navigate('/history')
          }}
          className='backbutton'>
          Back
        </button>
      </div>
      <HistoryViewTable />
    </div>
  )
}
