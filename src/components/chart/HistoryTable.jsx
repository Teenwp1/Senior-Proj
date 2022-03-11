import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './historytable.css'
import { Link } from 'react-router-dom'
import { CelebrationOutlined, RowingSharp } from '@mui/icons-material'
import { useState } from 'react'
const columns = [
  { field: 'id', headerName: 'Task ID', width: 245 },
  { field: 'status', headerName: 'Status', width: 245 },

  { field: 'finishdate', headerName: 'Finished Date', width: 245 },
  {
    field: 'finishtime',
    headerName: 'Finished time',

    width: 245,
  },
  {
    field: 'fullName',
    headerName: 'Action',

    width: 90,
    renderCell: (params) => {
      return (
        <>
          <Link to={'/history/' + params.row.id}>
            <button className='historytableView'>view</button>
          </Link>
        </>
      )
    },
  },
]

const rows = [
  {
    id: '0001',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0002',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0003',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0004',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0005',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0006',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0007',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0008',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
  {
    id: '0009',
    status: 'Completed',
    finishdate: '1/1/2022',
    finishtime: '18:00',
  },
]

function HistoryTable(props) {
  const filteredHistory = rows.filter((item) => {
    if (props.onTyped.text.length != 0) {
      return item.id == props.onTyped.text
    }
    return true
  })

  return (
    <div>
      <div className='historytable'>
        <div style={{ height: 540, width: '100%' }}>
          <DataGrid
            rows={filteredHistory}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
          />
        </div>
      </div>
    </div>
  )
}

export default HistoryTable
