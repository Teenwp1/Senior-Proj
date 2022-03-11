import React from 'react'
import { useParams } from 'react-router'
import './task.css'
import { userRows } from '../../dummyData'
import { TaskRounded } from '@mui/icons-material'

function Task() {
  const { taskId } = useParams()

  return (
    <div className='task'>
      <div className='taskTitleContainer'>
        <h3>Task ID: {taskId}</h3>
        <button className='taskAddButton'>Update</button>
      </div>
      <div className='taskContainer'>
        <div className='taskShow'></div>
        <div className='taskUpdate'></div>
      </div>
    </div>
  )
}

export default Task
