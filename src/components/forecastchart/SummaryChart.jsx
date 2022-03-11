import React from 'react'
import './summarychart.css'
import SummaryTable from './SummaryTable'
import SummaryGraph from './SummaryGraph'

export default function SummaryChart() {
  return (
    <div className='summaryChart'>
      <div className='summaryChartContainerLeft'>
        <h3 className='summaryChartTitle'>Overview</h3>
        <SummaryTable />
      </div>
      <div className='summaryChartContainerRight'>
        <h3 className='summaryChartTitle'>Total Inbound-Outbound</h3>
        <SummaryGraph />
      </div>
    </div>
  )
}
