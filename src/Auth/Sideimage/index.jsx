import React from 'react'
import Nav from './Components/sideNav'
import { Outlet } from 'react-router-dom'
const Sideimage = () => {
  return (
    <div className='lg:flex md:flex sm:block'>
      <Nav/>
      <Outlet/>
      
    </div>
  )
}

export default Sideimage
