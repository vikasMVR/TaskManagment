import React, { useState } from 'react'
import { LinkBtn } from '../components/utilityconponents/buttons';


export default function HomeRoute() {
  
  return (
    <div className='flex flex-col h-screen space-y-4 items-center justify-center'>
      <p className="font-medium">website creation is in progress. please go to dashboard section</p>
      <LinkBtn type="button" classes={' hover:bg-slate-600 duration-200 ease-in bg-sky-500 '} link='/dashboard' >go to dashboard</LinkBtn>
    </div>
  )
}
