import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Beauty from '../components/productdist/Beauty'
import Kids from '../components/productdist/Kids'
import Mens from '../components/productdist/Mens'
import { Womens } from '../components/productdist/Womens'
import Admin from './AdminPenal/Admin'

import Admin_Login from './AdminPenal/Admin_Login'
import Edit from './AdminPenal/Edit'
import { Cart } from './cart/Cart'
import { HomePage } from './HomePage'
import ProductDetails from './ProductDetails/ProductDetails'
import { SearchBar } from './Searchbar/SearchBar'
import Comminity from '../page/Comminity'
import WhyModesensPage from "../page/WhyModesensPage"
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/adminlogin' element={<Admin_Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path="/details/:id" element={<ProductDetails/>}></Route>
        <Route path="/product/:id" element={<Edit/>}></Route>
        <Route path='/men' element={<Mens/>} />
        <Route path='/womens' element={<Womens/>} />

        <Route path='/beauty' element={<Beauty/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/search' element={<SearchBar/>}/>
      
        <Route path='/cart' element={<Cart/>} />
        <Route path='/community' element ={<Comminity />} />
        <Route path='/whycoolmart' element ={<WhyModesensPage />} />
        
      </Routes>
  )
}