import React from 'react'
import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import './database.css'
function DataBase() {
  const [products, setProducts] = useState([])
  const createProduct = async () => {}
  const productsRef = collection(db, 'products')
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsRef)
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(products.name)
    }
    getProducts()
  }, [])
  return (
    <div className='database'>
      <input placeholder='Name...' />
      <input type='number' placeholder='Price...' />
      <button onClick={createProduct}>Create</button>
      {products.map((product) => {
        return (
          <div>
            <h1>Name: {product.name}</h1>
            <h1>Price: {product.price}</h1>
          </div>
        )
      })}
      nd
    </div>
  )
}

export default DataBase
