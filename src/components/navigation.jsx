import React, { useEffect, useState } from 'react'
import { HiSearch, HiMenuAlt1, HiQuestionMarkCircle, } from "react-icons/hi"
import { Link, NavLink, useLocation } from 'react-router-dom'






export function Nav2(props) {
  const location = useLocation();
  return (
    <div className=" hidden md:block w-60 h-screen  bg-gray-500 bg-opacity-30" >
      <div className="flex flex-col justify-between h-full ">
        <div className="block ">
          <h1 className="block text-2xl text-amber-400 font-mono font-light p-4 select-none border-b border-amber-300" >Komplit</h1>
          <div className="block ">
            <Navtabs to='/dashboard' label="Home" />
            <Navtabs to="/tasks" label="Tasks" />
            <Navtabs to="/inbox" label="Inbox" />
          </div>
        </div>
        <Link to="/help" className=' flex items-center justify-center p-4 bg-amber-500 bg-opacity-20  hover:bg-opacity-100 hover:text-black duration-200 ease-in-out cursor-help' >
          <span className='text-inherit text-sm font-normal font-sans'>Help and Get Started</span>
          <HiQuestionMarkCircle className='text-xl ml-2' />
        </Link>
      </div>
    </div>
  )
}


// helper components
function Navtabs(props) {
  return (
    <NavLink className="block font-medium font-sans select-none py-2 px-4 bg-opacity-30 text-gray-300 hover:text-gray-200 hover:bg-gray-600 hover:bg-opacity-40  ease-in duration-100 "
      {...props} >
      {props.label}
    </NavLink>
  )
}

