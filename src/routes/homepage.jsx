import clsx from 'clsx';
import React from 'react'
import { Link } from 'react-router-dom'
import HomePageNavigation from '../components/navigation/homepageNav'
import { useAuthState } from '../myhooks/useAuthState'
export default function Homepage() {
    const [user] = useAuthState();
    return (
        <div className='w-full bg-zinc-900 '>
            <div className="relative h-screen">
                <div className="h-[200px] relative">
                    <div className="absolute w-full z-10 my-4">
                        <HomePageNavigation /></div>
                    <Wavypatter />
                </div>
                <div className={clsx(" h-[calc(100vh-300px)] relative",)}>
                    <div className="h-full flex flex-col justify-center items-center px-2">
                        <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl text-center space-x-3 sm:space-x-4 md:space-x-6">
                            <span className="text-yellow-400 ">Doit</span>
                            <span>tasks</span>
                            <span>manager</span>
                        </h1>
                        <h3 className="font-medium text-center text-md md:text-xl lg:text-2xl my-4 w-4/6 mx-auto opacity-50">
                            Manage all your daily tasks and projects with ease.
                        </h3>
                        {user ? <div className="my-4 mx-6">
                            <Link className={'bg-slate-600 py-2 px-4'} to='/dashboard'>go to Dashboard</Link>
                        </div> :
                            <div className="flex space-x-4 items-center my-4 mx-6">
                                <Link className={'bg-slate-600 py-2 px-4'} to='/login'>Login</Link>
                                <Link className="bg-yellow-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-100 focus:text-black py-2 px-4 " to='/register'>Get Started</Link>
                            </div>}
                    </div>
                </div>
            </div>

            {/* homepage content goes here */}
            <div className="h-screen bg-slate-800">
            </div>
        </div>
    )
}


const Wavypatter = () => {
    return (
        <div className="custom-shape-divider-top-1678631635">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
    )
}