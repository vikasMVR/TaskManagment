import React, { useState } from 'react'
import { HiBell, HiOutlineHome, HiOutlineCog, HiOutlineCalendar, HiOutlineChatAlt2, HiOutlineClipboardList, HiOutlineLogout, HiOutlineSearch } from "react-icons/hi"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Btn, LinkBtn, NavLinkBtn } from './utilityconponents/buttons'


export function SideNav() {
  return (
    <div className="h-full border-r-2 border-dashed grid grid-rows-6 items-center text-center ">
      <div className="py-6 self-start my-1 ">
        <h2 className="text-yellow-400 font-semibold font-mono text-3xl text-left px-4 md:px-12 select-none hidden md:block"><Link to='/'>Doit</Link></h2>
        <h2 className="text-yellow-400 font-semibold font-mono text-3xl text-center md:hidden select-none">D.</h2>
      </div>
      <div className="p-2 md:p-6 text-left space-y-1 row-span-4 self-start" >
        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-20 '}
          link='/dashboard'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineHome className='text-xl' />
          <span className="font-medium hidden md:block">Home</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-20 '}
          link='/tasks'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineClipboardList className='text-xl' />
          <span className="font-medium hidden md:block">My Tasks</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-20 '}
          link='/calendar'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineCalendar className='text-xl' />
          <span className="font-medium hidden md:block">Calendar</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-20 '}
          link='/inbox'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineChatAlt2 className='text-xl' />
          <span className="font-medium hidden md:block">Inbox</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-20 '}
          link='/settings'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineCog className='text-xl' />
          <span className="font-medium hidden md:block">Settings</span>
        </NavLinkBtn>
      </div>
      <div className="p-2 md:px-4 self-end">
        <Btn type={'button'}
          className={"flex items-center space-x-3 md:px-8 py-3 bg-transparent justify-start w-full hover:bg-amber-600 hover:bg-opacity-50"}>
          <HiOutlineLogout className='text-xl' />
          <span className="font-medium hidden md:block">Logout</span>
        </Btn>
      </div>

    </div>
  )
}


export function MenuNav() {
  return (
    <div className="grid grid-cols-3 py-2 px-8 my-3 items-center ">
      <div className="col-span-2 pl-4">
        {/* <span className='text-3xl '>👋 Welcome Anurag! </span> */}
        <div className="max-w-sm">
          <SearchBar />
        </div>
      </div>
      <div className="inline-flex space-x-3 items-center justify-self-end ">
        <HiBell className='text-xl cursor-pointer' />
        <Avatar />
        {/* <span className="font-medium text-sm my-auto">anurag</span> */}
      </div>
    </div>
  )
}

export function SearchBar({...props}) {
  return (
    <div className="w-full ">
      <div className="flex items-center space-x-2 rounded-lg border-2 border-transparent py-2 px-3 bg-zinc-800 focus-within:border-white hover:bg-sky-400 hover:bg-opacity-10 ">
        <HiOutlineSearch className='text-xl' />
        <input
          type="text"
          placeholder='search tasks here...'
          className=' bg-transparent w-full outline-none'
          {...props} />
      </div>
    </div>
  )
}

function Avatar({ imgUrl, ...props }) {
  return (
    <div className="rounded-full p-1 hover:bg-yellow-400 duration-200 hover:bg-opacity-80 ease-in  cursor-pointer">
      <img src={!imgUrl ? "https://tecdn.b-cdn.net/img/new/avatars/2.webp" : imgUrl} alt={"user"} className="rounded-full w-10" {...props} />
    </div>
  )
}