import React from 'react'
import { Nav2 } from '../components/navigation'
import { HiSearch, HiBell, HiMenu } from 'react-icons/hi'


export default function DashboardLayout() {
  return (
    <div className='flex h-screen bg-neutral-900 overflow-hidden'>
      <Nav2 />
      <div className="block h-screen w-full text-white">
        <DashboardSearch />
      </div>
    </div>
  )
}

function DashboardSearch() {
  return (
    <div className="flex items-center  mx-6 my-3 bg-transparent rounded-xl">
      {/* full width navbar */}
      <div className="hidden md:flex w-full  bg-gray-600 bg-opacity-60 rounded-xl px-4 border border-transparent focus-within:border focus-within:border-amber-500 duration ease-in">
        <div className="flex w-full items-center ">
          <HiSearch className=' mr-2 ' />
          <input type="text"
            placeholder='search'
            className="w-5/6 text-mono font-medium text-light py-2 placeholder:text-slate-400 placeholder:focus:select-none text-slate-400 bg-transparent rounded-lg focus:outline-none" />
        </div>
        <div className="flex items-center">
          <button type='button' className='cursor-pointer select-none' ><HiBell className='text-lg mr-4' /></button>
          <button type="button" className='cursor-pointer select-none' ><img src="" alt="avatar" className="bg-gray-800 h-8 rounded-full w-8 overflow-hidden" /></button>
        </div>
      </div>

      {/* small screen navigation and search */}
      <div className="flex justify-between items-center md:hidden w-full  bg-gray-600 bg-opacity-60 rounded-xl px-4 border border-transparent focus-within:border focus-within:border-amber-500 duration ease-in py-1 ">
        <button type="button" className='flex items-center cursor-default  border rounded-lg border-transparent'>
          <HiMenu className='text-lg'/>
        </button>
        <h1 className="text-amber-500 font-mono text-lg">Komplit</h1>
        <div className="flex items-center">
          <button type='button' className='cursor-pointer select-none' ><HiBell className='text-lg mr-4' /></button>
          <button type="button" className='cursor-pointer select-none' ><img src="" alt="avatar" className="bg-gray-800 h-8 rounded-full w-8 overflow-hidden" /></button>
        </div>
      </div>

    </div>
  )
}