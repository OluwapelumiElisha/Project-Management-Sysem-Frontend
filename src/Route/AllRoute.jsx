import Header from '@/MainPage/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
  
const AllRoute = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
    </div>
  )
}

export default AllRoute
