import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
//import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import TaskTable from '../../components/chart/TaskTable'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <TaskTable />
    </div>
  )
}

/*<Chart
data={userData}
title='User Analytics'
dataKey='Active User'
grid
/>*/
