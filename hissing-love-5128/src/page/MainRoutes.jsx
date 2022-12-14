import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './AdminPenal/Admin'
// import { Admin } from './AdminPenal/Admin'
import Admin_Login from './AdminPenal/Admin_Login'
import { HomePage } from './HomePage'
import ProductDetails from './ProductDetails/ProductDetails'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />

        
      </Routes>
  )
}
