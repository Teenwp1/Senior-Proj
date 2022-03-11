import React from 'react'
import SummaryChart from '../../components/forecastchart/SummaryChart'
import './forecast.css'
import SummaryForecast from '../../components/forecastchart/SummaryForecast'

export default function Forecast() {
  return (
    <div className='forecast'>
      <div className='forecastTitleContainer'>
        <h1 className='forecastTitle'>Forecast</h1>
        <SummaryChart />
        <div className='forecastSearch'>
          <input type='text' placeholder='Search for product'></input>
          <button className='forecastSearchButton'>search product</button>
        </div>
        <SummaryForecast />
      </div>
    </div>
  )
}
