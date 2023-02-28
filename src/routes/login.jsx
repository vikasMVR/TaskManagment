import React from 'react'
import { FaGoogle, } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'




export function Login() {
    const formik = useFormik({

        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            // console.log(JSON.stringify(values));
            console.log(values)
        },

    });


    return (
        <div className="h-screen ">
            <div className="h-5/6 grid place-content-center">

                <div className=" min-w-[18rem] max-w-[25rem] mx-2">
                    <Link to='/' className='text-4xl font-semibold text-center block '>
                        <span className="text-yellow-400 ">Doit</span>
                    </Link>
                    <h2 className="text-2xl font-thin font-sans text-center my-6 ">Create an account</h2>

                    <form
                        action=""
                        method="POST"
                        onSubmit={formik.handleSubmit}
                        className='space-y-4 bg-zinc-800 bg-opacity-50 rounded-lg p-4'>

                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name='email'
                                placeholder='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                        </div>
                        <div className="">
                            <input
                                type="password"
                                id="password"
                                name='password'
                                placeholder='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full px-3 py-1.5 text-slate-300 rounded-md text-sm font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                                <Link to='/password_reset' className="text-xs ml-1 text-blue-400 font-light">forgot password?</Link>
                        </div>
                        <div className="bg-indigo-500 bg-opacity-60 hover:bg-sky-800 rounded-lg duration-150 ease-in">
                            <button
                                type="submit"
                                className='w-full px-3 py-1.5 font-light '>
                                Sign in
                            </button>                            
                        </div>
                        <p className="before:inline before:content-['-------------------'] after:inline after:content-['-------------------'] before:pr-4 after:pl-4 text-center font-extralight text-base text-slate-400 select-none">or</p>
                        <div className="rounded-lg bg-amber-500 bg-opacity-80 focus-within:bg-yellow-400 duration-200 ease-in ">
                            <button
                                type='button'
                                className={clsx("inline-flex space-x-3 items-center justify-center w-full py-2 ",
                                )}>
                                <FaGoogle className='text-slate-800' />
                                <span className={clsx("font-light text-slate-800",
                                )}>
                                    Sign in with Google
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="w-full inline-flex items-center justify-center select-none space-x-1">
                        <span className="text-slate-400 font-light text-sm">Don't have an account?</span>
                        <Link to={'/register'} className="text-sm text-blue-400">Sign up</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}