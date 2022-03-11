import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './historyviewtable.css'
import { useParams } from 'react-router'
function createData(id, name, status, destination, date, time) {
  return { id, name, status, destination, date, time }
}
const rows = [
  createData(
    '1239',
    'product1',
    'Dispatched',
    'customer1',
    '1/1/2021',
    '12:32'
  ),
  createData(
    '1229',
    'product2',
    'Dispatched',
    'customer1',
    '1/1/2021',
    '12:33'
  ),
  createData(
    '1279',
    'product1',
    'Dispatched',
    'customer1',
    '1/1/2021',
    '12:42'
  ),
  createData(
    '1230',
    'product2',
    'Dispatched',
    'customer1',
    '1/1/2021',
    '12:52'
  ),
  createData(
    '1539',
    'product1',
    'Dispatched',
    'customer1',
    '1/1/2021',
    '12:54'
  ),
]
export default function HistoryViewTable() {
  const { taskId } = useParams()
  return (
    <div className='historyviewtable'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product Id</TableCell>
              <TableCell align='right'>Product name</TableCell>
              <TableCell align='right'>Status</TableCell>
              <TableCell align='right'>Destination</TableCell>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>{row.name}</TableCell>
                <TableCell align='right'>{row.status}</TableCell>
                <TableCell align='right'>{row.destination}</TableCell>
                <TableCell align='right'>{row.date}</TableCell>
                <TableCell align='right'>{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
