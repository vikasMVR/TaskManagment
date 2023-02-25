import React from 'react'
import { HiSearch, HiBell, HiMenu } from 'react-icons/hi'
import { Outlet } from 'react-router-dom'
import { SideNav } from '../components/navigation'
import { Btn } from '../components/utilityconponents/buttons'

export default function DashboardLayout() {
  return (
    <div className=' h-screen  overflow-hidden'>
      <div className="h-full flex ">

        {/* sidebar */}
        <div className="md:w-80">
          <SideNav />
        </div>

        {/* main context */}
        <div className="h-full w-full">          
          <Outlet />
        </div>
      </div>
    </div>
  )
}

