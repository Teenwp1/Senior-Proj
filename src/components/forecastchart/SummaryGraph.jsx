import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    Inbound: 4000,
    Outbound: 2400,
  },
  {
    name: 'Feb',
    Inbound: 3000,
    Outbound: 1398,
  },
  {
    name: 'Mar',
    Inbound: 2000,
    Outbound: 9800,
  },
  {
    name: 'Apr',
    Inbound: 2780,
    Outbound: 3908,
  },
  {
    name: 'May',
    Inbound: 1890,
    Outbound: 4800,
  },
  {
    name: 'Jun',
    Inbound: 2390,
    Outbound: 3800,
  },
  {
    name: 'Jul',
    Inbound: 3490,
    Outbound: 4300,
  },
  {
    name: 'Aug',
    Inbound: 3490,
    Outbound: 4300,
  },
  {
    name: 'Sep',
    Inbound: 3490,
    Outbound: 4300,
  },
  {
    name: 'Nov',
    Inbound: 3490,
    Outbound: 4300,
  },
  {
    name: 'Dec',
    Inbound: 3490,
    Outbound: 4300,
  },
]

export default function SummaryGraph() {
  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}>
          <XAxis dataKey='name' />

          <Tooltip />
          <Legend
            verticalAlign='top'
            height={25}
            align='right'
            iconType='plainline'
          />
          <Line type='monotone' dataKey='Outbound' stroke='#1C3355' />

          <Line type='monotone' dataKey='Inbound' stroke='#EF8549' />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
