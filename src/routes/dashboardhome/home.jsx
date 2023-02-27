import React, { useState } from 'react'
import {TitleBar} from '../../components/navigation'

export default function DashboardHome() {
  
  return (
    <div className='h-full w-full'>
        <TitleBar pagetitle={'👋 Welcome Anurag!'}/>
        <div className="w-full h-[calc(100vh-64px)] ">
            this is hoem page.
        </div>
    </div>
  )
}