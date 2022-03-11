import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './inventorytable.css'
import { Edit, Search, MoreHoriz } from '@mui/icons-material'
import { productTable } from '../../dummyData'
import { useParams } from 'react-router'

const columns = [
  { field: 'id', headerName: 'NO.', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 130,
    type: 'date',

    description: 'The date is representing in MM/dd/yyyy format',
  },
  {
    field: 'date',
    headerName: 'Received date',
    width: 160,
    type: 'date',

    description: 'The date is representing in MM/dd/yyyy format',
  },
  { field: 'amount', headerName: 'Amount', width: 150 },
  {
    field: 'location',
    headerName: 'Location',
    sortable: false,
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'edit, inspect, and more option',
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <Edit className='inventorytableEdit' />
          <Search className='inventorytableInspect' />
          <MoreHoriz className='inventorytableMore' />
        </>
      )
    },
  },
]

export default function InventoryTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const { productId } = useParams()

  const filterTask = productTable.filter((item) => {
    if (!productId) {
      return true
    }
    return item.name == productId
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <div className='inventorytable'>
      <h3 className='inventorytableTitle'>Name: {productId}</h3>
      <div className='inventorytableTable'>
        <div style={{ height: 425, width: '100%' }}>
          <DataGrid
            rows={filterTask}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                page: 1,
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

/*const filterTable = (itemId) => {
  const result = product.filter((curData) => {
    return curData.id == itemId
  })
  
}*/
