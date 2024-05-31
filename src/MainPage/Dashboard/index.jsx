import React from 'react'
import DashboardLayout from './Component/DashboardLayout'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout >
      <Outlet/>
      </DashboardLayout >
    </div>
  )
}

export default Dashboard 
