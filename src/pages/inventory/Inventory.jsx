import React, { useState } from 'react'
import './inventory.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InventoryTable from '../../components/chart/InventoryTable'
import { Link, useNavigate } from 'react-router-dom'
import InventorySearchBar from '../../components/searchbar/InventorySearchBar'
import { productTable } from '../../dummyData'

export default function Inventory() {
  let navigate = useNavigate()
  return (
    <div className='inventory'>
      <div className='inventoryTitleContainer'>
        <h1 className='inventoryTitle'>Inventory</h1>
      </div>
      <div className='inventorySearch'>
        <InventorySearchBar
          placeholder='Search for product'
          data={productTable}
        />

        <button className='inventorySearchByButton'>search by location</button>
      </div>
      <div className='inventoryRecommend'>
        <span className='inventoryRecommendTitle'>Recommended: </span>

        <button
          onClick={() => {
            navigate('/inventory/product1')
          }}>
          product 1
        </button>

        <button
          onClick={() => {
            navigate('/inventory/product2')
          }}>
          product 2
        </button>
        <button
          onClick={() => {
            navigate('/inventory/product3')
          }}>
          product 3
        </button>
        <button
          onClick={() => {
            navigate('/inventory/product4')
          }}>
          product 4
        </button>
        <button
          onClick={() => {
            navigate('/inventory/product5')
          }}>
          product 5
        </button>
      </div>
      <div className='inventoryResult'>
        <InventoryTable />
      </div>
    </div>
  )
}
