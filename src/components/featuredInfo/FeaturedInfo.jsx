import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import KpiChart from '../chart/KpiChart'
import { red } from '@mui/material/colors'
import OverviewChart from '../chart/OverviewChart'
import { Alert } from '@mui/material'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Overview</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredRack'>Rack usage: 232/279</span>
        </div>

        <div className='featuredSub'>Product remaining: 12,825 units</div>
        <OverviewChart />
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>KPIs</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>325</span>
          <span className='featuredMoneyRate'>
            -1.40% <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
        <KpiChart />
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Tasks completed</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>1,780</span>
          <span className='featuredMoneyRate'>
            +4.00% <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  )
}
