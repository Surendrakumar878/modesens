import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mens from '../components/productdist/Mens'
import { Womens } from '../components/productdist/Womens'
import Admin from './AdminPenal/Admin'

import Admin_Login from './AdminPenal/Admin_Login'
import Edit from './AdminPenal/Edit'
import { Cart } from './cart/Cart'
import { HomePage } from './HomePage'
import ProductDetails from './ProductDetails/ProductDetails'
import { SearchBar } from './Searchbar/SearchBar'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/adminlogin' element={<Admin_Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path="/details/:id" element={<ProductDetails/>}></Route>
        <Route path="/product/:id" element={<Edit/>}></Route>
        <Route path='/mens' element={<Mens/>} />
        <Route path='/womens' element={<Womens/>} />
        <Route path='/search' element={<SearchBar/>} />
        <Route path='/cart' element={<Cart/>} />
        
      </Routes>
  )
}