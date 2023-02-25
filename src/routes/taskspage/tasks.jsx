import React from 'react'
import { MenuNav } from '../../components/navigation'

export default function Tasks() {
  return (
    <div className='h-full w-full'>
        <MenuNav pagetitle={'Tasks'}/>

        <div className="w-full h-[calc(100vh-64px)] ">
            this is tasks page.
        </div>
    </div>
  )
}
