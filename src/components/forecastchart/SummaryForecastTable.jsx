import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('October 2564', 159, 6.0, 24, 4.0),
  createData('November 2564', 237, 9.0, 37, 4.3),
  createData('December 2564', 262, 16.0, 24, 6.0),
  createData('January 2565', 305, 3.7, 67, 4.3),
  createData('Febuary 2565', 356, 16.0, 49, 3.9),
  createData('March 2565', 356, 16.0, 49, 3.9),
  createData('April 2565', 356, 16.0, 49, 3.9),
]
export default function SummaryForecastTable() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Month</StyledTableCell>
              <StyledTableCell align='center'>Actual Sales</StyledTableCell>
              <StyledTableCell align='center'>Forecast</StyledTableCell>
              <StyledTableCell align='center'>Difference</StyledTableCell>
              <StyledTableCell align='center'>YoY</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell margin-left='20px' component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.calories}</StyledTableCell>
                <StyledTableCell align='center'>{row.fat}</StyledTableCell>
                <StyledTableCell align='center'>{row.carbs}</StyledTableCell>
                <StyledTableCell align='center'>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
