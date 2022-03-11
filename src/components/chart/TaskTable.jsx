import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './tasktable.css'
import { handleBreakpoints } from '@mui/system'

export default function TaskTable() {
  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'Order ID', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    { field: 'driver', headerName: 'Driver name', width: 180 },
    {
      field: 'license',
      headerName: 'License plate',
      width: 170,
    },
    {
      field: 'due',
      headerName: 'Due',
      width: 170,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/' + params.row.id}>
              <button className='tasktableEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='tasktableDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className='tasktable'>
      <h3 className='tasktableTitle'>Today Tasks</h3>
      <div style={{ height: 370, width: '100%' }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

//<Link to={'/user' + params.row.id}>
