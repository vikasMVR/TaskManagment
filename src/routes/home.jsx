import React, { useState } from 'react'
import { LinkBtn } from '../components/utilityconponents/buttons';
import {MenuNav} from '../components/navigation'

export default function HomeRoute() {
  
  return (
    <div className='h-full w-full'>
        <MenuNav pagetitle={'👋 Welcome Anurag!'}/>

        <div className="w-full h-[calc(100vh-64px)] ">
            this is hoem page.
        </div>
    </div>
  )
}
