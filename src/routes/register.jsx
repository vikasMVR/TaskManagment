import React from 'react'
import { FaGoogle, } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <RegisterForm />
        </div>
    )
}


export function RegisterForm() {
    return (
        <div className="h-screen ">
            <div className="h-5/6 grid place-content-center">

                <div className=" min-w-[20rem] max-w-[25rem]">
                    <h2 className="text-2xl font-thin font-sans text-center my-6 ">Create an account</h2>
                    <form
                        action="#"
                        method="POST"
                        className='space-y-4 bg-zinc-800 bg-opacity-50 rounded-lg p-4 mb-2'>

                        <div className="space-y-0.5">
                            <label htmlFor="name" className='font-light select-none'>name</label>
                            <input
                                type="text"
                                id="name"
                                // placeholder='full name'
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                            <p className="hidden font-extralight text-sm text-rose-300 select-none">invalid email</p>
                        </div>

                        <div className="">
                            <label htmlFor="email" className='font-light select-none'>email</label>
                            <input
                                type="email"
                                id="email"
                                // placeholder='email'
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                            <p className="hidden font-extralight text-sm text-rose-300 select-none">invalid email</p>
                        </div>

                        <div className="">
                            <label htmlFor="password" className='font-light select-none'>password</label>
                            <input
                                type="password"
                                id="password"
                                // placeholder='password'
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                            <p className="hidden font-extralight text-sm text-rose-300 select-none">invalid email</p>
                        </div>
                        
                        <div className="bg-indigo-500 bg-opacity-60 hover:bg-sky-800 rounded-lg duration-150 ease-in">
                            <button
                                type="submit"
                                className='w-full px-3 py-1.5   '>
                                Sign up
                            </button>
                        </div>

                        <p className="before:contents text-center font-extralight text-sm text-slate-400 select-none">or</p>

                        <div className="rounded-lg bg-amber-500 bg-opacity-80 focus-within:bg-yellow-400 duration-200 ease-in ">
                            <button type='button' className="inline-flex space-x-3 items-center justify-center w-full py-2 ">
                                <FaGoogle className='text-slate-800' />
                                <span className="font-light text-slate-800">Sign up with Google</span>
                            </button>
                        </div>
                    </form>

                    <div className="w-full inline-flex items-center justify-center select-none space-x-1">
                        <span className="text-slate-400 font-light ">Already have an account?</span>
                        <Link to={'/login'}>Sign in</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

