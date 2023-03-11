import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
    return (
        <div>
            <div className="grid h-screen px-4 place-content-center">
                <div className="text-center">
                    <h1 className=" text-gray-200 text-9xl font-extrabold shadow-sm">404</h1>
                    <p className="text-2xl font-bold  sm:text-4xl">Sorry!</p>
                    <p className="my-2 text-gray-500">We can't find that page.</p>
                    <Link className={'px-3 py-2 mt-4 bg-indigo-500 hover:bg-slate-600 duration-200 ease-in'} to='/'>
                        go to home
                    </Link>
                </div>
            </div>
        </div>
    )
}