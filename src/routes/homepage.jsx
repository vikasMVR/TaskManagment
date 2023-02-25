import React from 'react'
import { NavLink } from 'react-router-dom'
import { LinkBtn } from '../components/utilityconponents/buttons'
export default function Homepage() {
    return (
        <div className='w-full bg-zinc-900'>
            
            <div className="h-screen relative ">
                <div className="absolute w-full top-0">
                    <HomeNav />
                </div>
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
                        <LinkBtn className={'py-2 px-4'} link='/login'>Login</LinkBtn>
                        <LinkBtn className="bg-yellow-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-100 focus:text-black py-2 px-4 " link='/register'>Get Started</LinkBtn>
                    </div>
                </div>
            </div>

            <div className="h-screen w-full">
                <div className="flex flex-col items-center justify-center px-6 py-4 h-full">
                    <p className="font-normal text-xl">the website is not yet complete. you can move directly to the dashboard seciton</p>
                    <LinkBtn link={'/dashboard'} > go to dashboard</LinkBtn>
                </div>
            </div>
        </div>
    )
}

function HomeNav() {
    return (
        <nav className="w-full ">
            <div className=" mx-8 h-20">
                <div className="flex items-center space-x-2 sm:space-x-8 justify-center h-full">
                    <NavLink to={'#'} end
                        className={" text-lg hover:text-yellow-400 duration-200 ease-in border-b-2 border-transparent hover:border-yellow-400 focus:border-yellow-400 px-2 text"}>
                        sectionOne
                    </NavLink>
                    <NavLink to={'#'} end
                        className={" text-lg hover:text-yellow-400 duration-200 ease-in border-b-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 px-2"}>
                        Contribute
                    </NavLink>
                    <NavLink to={'#'} end
                        className={"text-lg hover:text-yellow-400 duration-200 ease-in border-b-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 px-2"}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
