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

const data01 = [
  { name: 'Used rack', value1: 232 },
  { name: 'Unused rack', value1: 47 },
]
const COLORS = ['#1C3355', '#4B7AC0']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function OverviewChart() {
  return (
    <div>
      <ResponsiveContainer width={260} height={260}>
        <PieChart width={260} height={260}>
          <Pie
            data={data01}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            fill='#8884d8'
            dataKey='value1'>
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
