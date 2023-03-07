import clsx from 'clsx'
import { signOut } from "firebase/auth"
import React from 'react'
import {
  HiBell, HiOutlineCalendar,
  HiOutlineChatAlt2, HiOutlineClipboardList, HiOutlineCog, HiOutlineHome, HiOutlineQuestionMarkCircle, HiOutlineSearch
} from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../content/userAuthContext'
import { auth } from '../firebase-config'
import { Btn, NavLinkBtn } from './utilityconponents/buttons'


export function SideNav() {
  return (
    <div className=" hidden h-full sm:grid grid-rows-6 items-center border-dashed border-r-4  border-r-yellow-300 border-opacity-30">
      <div className="py-4 self-start">
        <h2 className="text-yellow-400 font-bold font-mono text-4xl text-left px-4 md:px-12 select-none hidden md:block"><Link to='/'>Doit</Link></h2>
        <h2 className="text-yellow-400 font-bold font-mono text-4xl text-center md:hidden select-none"><Link to='/'>D.</Link></h2>
      </div>
      <div className="p-2 md:p-6 text-left space-y-1 row-span-4 self-start" >

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10'}
          link='/dashboard'
          end
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineHome className='text-xl' />
          <span className="font-light hidden md:block">Home</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/tasks'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineClipboardList className='text-xl' />
          <span className="font-light hidden md:block">My Tasks</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/calendar'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineCalendar className='text-xl' />
          <span className="font-light hidden md:block">Calendar</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/inbox'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineChatAlt2 className='text-xl' />
          <span className="font-light hidden md:block">Inbox</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/settings'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineCog className='text-xl' />
          <span className="font-light hidden md:block">Settings</span>
        </NavLinkBtn>
      </div>
      <div className="p-2 md:px-4 self-end">
        <Btn type={'button'}
          className={"flex items-center space-x-3 md:px-8 py-3 bg-transparent justify-start w-full hover:bg-sky-400 hover:bg-opacity-40 hover:cursor-help"}>
          {/* <HiOutlineLogout className='text-xl' />
          <span className="font-medium hidden md:block">Logout</span> */}
          <HiOutlineQuestionMarkCircle className='text-xl ' />
          <span className="font-meduim hidden md:block">Help</span>
        </Btn>
      </div>
    </div>
  )
}

export function TitleBar({ pagetitle }) {
  const { SignOut } = useUserAuth();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 py-3 px-2 md:px-6  items-center ">
      <div className=" flex col-span-2 space-x-1 items-center">
        <span className='font-light select-none text-xl md:text-2xl '>{pagetitle}</span>
      </div>
      <div className="inline-flex col-span-2 space-x-3 items-center justify-self-end ">
        <div className=" max-w-[160px] sm:max-w-xs">
          <SearchBar />
        </div>
        <HiBell className='text-xl cursor-pointer' />
        <Btn
          className={"bg-transparent "}
          onClick={() => {
            return (<Dropdown />)
          }}><Avatar /></Btn>
      </div>
    </div >
  )
}

function Dropdown() {
  const { SignOut } = useUserAuth();
  const navigate = useNavigate();
  return (
    <div className="absolute">
      <div className="w-40 rounded bg-transparent space-y-1">
        <Link to={'/profile'}
          className="font-light text-sm px-3 py-2" >
          profile
        </Link>
        <button
          onClick={() => { SignOut(); navigate('/login') }}
          className="font-light text-sm px-3 py-2" >
          profile
        </button>
      </div>
    </div>
  )
}


export function SearchBar({ ...props }) {
  return (
    <div className="sm:w-full">
      <div className={clsx(
        "flex items-center space-x-2 px-2 py-1 bg-zinc-800 rounded-lg focus-within:outline-1 focus-within:outline hover:bg-sky-400 hover:bg-opacity-20 duration-200 ease-in",
      )}>
        <Btn className="rounded-lg p-0 bg-transparent cursor-default  "
        >
          <HiOutlineSearch className='text-xl ' />
        </Btn>
        <input
          type="text"
          placeholder='search tasks here...'
          className={clsx('bg-transparent w-full outline-none')}
          {...props} />
      </div>
    </div>
  )
}

function Avatar({ imgUrl, ...props }) {
  return (
    <div className="rounded-full p-1 w-8 overflow-clip hover:bg-yellow-400 duration-200 hover:bg-opacity-80 ease-in  cursor-pointer select-none">
      <img src={!imgUrl ? "https://tecdn.b-cdn.net/img/new/avatars/2.webp" : imgUrl} alt={"user"} className="rounded-full w-8 " {...props} />
    </div>
  )
}

