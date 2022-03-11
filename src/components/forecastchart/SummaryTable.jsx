import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs }
}

const rows = [
  createData(1, 'product1', 12000, 10 + '%'),
  createData(2, 'product1', 12000, 10 + '%'),
  createData(3, 'product1', 12000, 10 + '%'),
  createData(4, 'product1', 12000, 10 + '%'),
  createData(5, 'product1', 12000, 10 + '%'),
]
export default function SummaryTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Outbound</TableCell>
              <TableCell align='right'>Percent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
