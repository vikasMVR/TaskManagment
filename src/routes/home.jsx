import React, { useState } from 'react'
import { Btn } from '../components/utilityconponents/buttons';
export default function HomeRoute() {
  const [escuse, setescuse] = useState(null);

  function getEscuse(category) {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`)
      .then((res) => res.json())
      .then((data) => setescuse(data[0]))
  }
  
  return (
    <div>
      <div className="flex flex-col items-center  mx-auto font-mono p-2">
        <h1 className="text-2xl font-semibold text-center">generate an excuse</h1>
        <button type='button' className='bg-indigo-400 border border-amber-400 hover:bg-indigo-500 focus:bg-indigo-600 my-2 p-2 w-40 rounded-lg outline-none border-none' onClick={() => getEscuse('party')}>party</button>
        <button type='button' className='bg-indigo-400 border border-amber-400 hover:bg-indigo-500 focus:bg-indigo-600 my-2 p-2 w-40 rounded-lg outline-none border-none' onClick={() => getEscuse('family')}>family</button>
        <button type='button' className='bg-indigo-400 border border-amber-400 hover:bg-indigo-500 focus:bg-indigo-600 my-2 p-2 w-40 rounded-lg outline-none border-none' onClick={() => getEscuse('office')}>Office</button>
        <div className="my-4 max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold">Escuse: </h1>
          <p className="text-lg text-slate-700">id: {escuse?.id}</p>
          <p className="text-lg text-slate-700">escuse: {escuse?.excuse}</p>
          <p className="text-lg text-slate-700">category: {escuse?.category}</p>
        </div>
      </div>

      <Btn type="button" classes={' hover:bg-slate-600 duration-200 ease-in bg-sky-500 '} >click me</Btn>
    </div>
  )
}
