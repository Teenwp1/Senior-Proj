import React from 'react'
import './summaryforecast.css'
import SummaryForecastTable from './SummaryForecastTable'
import SummaryForecastGraph from './SummaryForecastGraph'

export default function SummaryForecast() {
  return (
    <div className='summaryforecast'>
      <div className='summaryForecastContainerTop'>
        <h3 className='summaryForecastTitle'>Product_Name</h3>
        <SummaryForecastTable />
      </div>
      <div className='summaryForecastContainerBottom'>
        <h3 className='summaryForecastTitle'>Forecast of Product_Name</h3>
        <SummaryForecastGraph />
      </div>
    </div>
  )
}
