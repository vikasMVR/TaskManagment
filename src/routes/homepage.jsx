import React from 'react'
import { Link } from 'react-router-dom'
import HomePageNavigation from '../components/navigation/homepageNav'

export default function Homepage() {
    return (
        <div className='w-full bg-zinc-900 '>
            <div className="sticky w-full top-0 py-2  bg-zinc-800 bg-opacity-50 backdrop-blur-sm z-10 after:h-40 after:w-60 after:bg-zinc-800 ">
                <HomePageNavigation />
            </div>

            <div className=" h-[calc(100vh-100px)] relative">
                <div className="h-full flex flex-col justify-center items-center px-2">
                    <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl text-center space-x-3 sm:space-x-4 md:space-x-6">
                        <span className="text-yellow-400 ">Doit</span>
                        <span>tasks</span>
                        <span>manager</span>
                    </h1>
                    <h3 className="font-medium text-center text-md md:text-lg lg:text-2xl my-4 w-4/6 mx-auto opacity-50">
                        Manage all your daily tasks and projects with ease.
                    </h3>
                    <div className="flex space-x-4 items-center my-4 mx-6">
                        <Link className={'bg-slate-600 py-2 px-4'} to='/login'>Login</Link>
                        <Link className="bg-yellow-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-100 focus:text-black py-2 px-4 " to='/register'>Get Started</Link>
                    </div>
                </div>
            </div>

           {/* homepage content goes here */}

        </div>
    )
}


