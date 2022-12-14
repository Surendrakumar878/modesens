import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './AdminPenal/Admin'
// import { Admin } from './AdminPenal/Admin'
import Admin_Login from './AdminPenal/Admin_Login'
import { HomePage } from './HomePage'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/adminlogin' element={<Admin_Login/>} />
        <Route path='/admin' element={<Admin/>} />
        {/* <Route path='/' element={<HomePage/>} /> */}
        
      </Routes>
  )
}
