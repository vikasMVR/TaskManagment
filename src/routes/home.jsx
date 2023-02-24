import React, { useState } from 'react'
import { LinkBtn } from '../components/utilityconponents/buttons';
import {MenuNavHome} from '../components/navigation'

export default function HomeRoute() {
  
  return (
    <div className='h-full w-full'>
        <MenuNavHome />

        <div className="w-full h-[calc(100vh-64px)] ">
            this is hoem page.
        </div>
    </div>
  )
}
