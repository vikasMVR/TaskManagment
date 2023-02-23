import React from 'react'
import { HiSearch, HiBell, HiMenu } from 'react-icons/hi'
import { MenuNav, SideNav } from '../components/navigation'
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
          <MenuNav />

          {/* main content goes here */}
          
        </div>
      </div>
    </div>
  )
}

