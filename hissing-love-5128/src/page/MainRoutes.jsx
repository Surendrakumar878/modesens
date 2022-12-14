import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mens from '../components/productdist/Mens'
import Admin from './AdminPenal/Admin'
// import { Admin } from './AdminPenal/Admin'
import Admin_Login from './AdminPenal/Admin_Login'
import { HomePage } from './HomePage'
import ProductDetails from './ProductDetails/ProductDetails'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/adminlogin' element={<Admin_Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path="/details/:id" element={<ProductDetails/>}></Route>
        <Route path='/mens' element={<Mens/>} />
        
      </Routes>
  )
}