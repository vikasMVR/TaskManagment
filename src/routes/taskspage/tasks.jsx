import React from 'react'
import { TitleBar } from '../../components/navigation'
import { Btn, LinkBtn } from '../../components/utilityconponents/buttons'
import { HiOutlineChevronDown, HiOutlineSortAscending, HiOutlinePlus } from 'react-icons/hi'
export default function Tasks() {
  return (
    <div className='h-full w-full'>
      <TitleBar pagetitle={'Tasks'} />
      <div className="w-full h-[calc(100vh-64px)] ">

        <div className="w-full bg-zinc-800 px-6 py-1 grid grid-cols-5">

          <div className="col-span-2 space-x-2">
            <Btn type='button' className={'text-sm font-light px-2 py-1.5 bg-yellow-400 bg-opacity-20 hover:bg-opacity-40 focus:bg-opacity-100 focus:text-black'}>
              Card
            </Btn>
            <Btn type='button' className={'text-sm font-light px-2 py-1.5 bg-yellow-400 bg-opacity-20 hover:bg-opacity-40 focus:bg-opacity-100 focus:text-black'}>
              Table
            </Btn>
          </div>

          <div className="flex col-start-3 justify-self-end col-span-3 space-x-2">
            <Btn type={'button'} className="inline-flex items-center text-sm px-1 py-1.5 bg-yellow-400 bg-opacity-20 hover:bg-opacity-40 focus:bg-opacity-100 focus:text-black">
            <HiOutlinePlus className="text-lg"/>
             <span className="text-sm font-light">Task</span>
            </Btn>
            <Dropdown />
          </div>
        </div>


      </div>
    </div>
  )
}

export function Dropdown({ }) {
  let items = ['Alphabetically', 'Start date', 'End date', 'Priority', 'Last modified'];
  console.log(items)
  return (
    <div className="relative">
      <Btn
        type="button"
        className={'inline-flex justify-center items-center space-x-1 px-1 py-1.5 relative w-full peer bg-yellow-400 bg-opacity-20 hover:bg-opacity-40 focus:bg-opacity-100 focus:text-black'} >
        <HiOutlineSortAscending />
        <span className="text-sm font-light">
          Sort by
        </span>
        <HiOutlineChevronDown />
      </Btn>

      <div className=" hidden peer-focus-within:block w-40 bg-zinc-800 bg-opacity-20 p-2 rounded-b-lg absolute shadow mt-1 top-full right-0 space-y-1">

        {items.map(item => {
          return (
            <Btn key={item}
            onClick={()=> console.log('hellow')}
            className="text-sm font-light w-full bg-transparent hover:bg-yellow-400 hover:bg-opacity-50">
              {item}
            </Btn>
          )
        })}
      </div>

    </div>
  )
}