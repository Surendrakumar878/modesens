import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import ProductDetails from './ProductDetails/ProductDetails'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/details/:id" element={<ProductDetails/>}></Route>
        
      </Routes>
  )
}
