import React from 'react'
import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const data = [
  { name: 'Complete', value: 500 },
  { name: 'Pending', value: 300 },
  { name: 'Late', value: 100 },
]
const COLORS = ['#096D0E  ', '#D06612 ', '#BA3619']

export default function KpiChart() {
  return (
    <div>
      <PieChart width={280} height={260}>
        <Pie
          data={data}
          cx={130}
          cy={110}
          innerRadius={70}
          outerRadius={90}
          paddingAngle={5}
          dataKey='value'>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}
