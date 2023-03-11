import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa"
import { HiOutlineRefresh, HiOutlineX } from 'react-icons/hi'
import { Link, Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { InputField } from '../components/form-inputs'
import { useUserAuth } from '../context/userAuthContext'


export default function Login() {
    const { user, SignIn } = useUserAuth();
    const [formstate, setformstate] = useState({ submitting: false, error: null });

    const handleFormSubmit = async (values) => {
        console.log(values);
        setformstate({ ...formstate, submitting: true })
        try {
            await SignIn(values.email, values.password)
            setformstate({ ...formstate, submitting: false })
        } catch (error) {
            let errmsg = error.code.replaceAll('auth/', '').replaceAll('-', ' ')
            setformstate({ ...formstate, submitting: false, error: errmsg })
        }
    }
    if (user) {
        return <Navigate to='/dashboard' />
    }
    if (!user) {
        return (
            <div className="h-screen ">
                <div className="h-5/6 grid place-content-center">
                    <div className=" min-w-[18rem] max-w-[25rem] mx-2">
                        <Link to='/' className='text-4xl font-semibold text-center block '>
                            <span className="text-yellow-400 ">Doit</span>
                        </Link>
                        <h2 className="text-xl font-thin font-sans text-center my-4 ">Sign in to your account</h2>

                        {formstate.error &&
                            <p className="w-full inline-flex items-center justify-between bg-rose-600 bg-opacity-60  px-4 mb-2 py-3 rounded-lg font-light text-xs text-rose-300 select-none">
                                <span>{formstate.error}</span>
                                <button type='button'
                                    onClick={() => setformstate({ ...formstate, error: null })} >
                                    <HiOutlineX className='text-lg' />
                                </button>
                            </p>}
                        <div className="bg-zinc-800 rounded-lg py-4">
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string(),
                                    // .required('required'),
                                    password: Yup.string(),
                                    // .required('required')
                                })}
                                onSubmit={(values, { }) => {
                                    handleFormSubmit(values);
                                }}
                            >
                                <Form >
                                    <InputField
                                        label="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                    />
                                    <InputField
                                        label="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                    />

                                    <div className="px-2 my-3">
                                        <button type="submit" className={"px-3 py-2 mt-3 w-full bg-slate-600 hover:bg-slate-700 rounded-md duration-150 ease-in"} >
                                            {formstate.submitting ? <HiOutlineRefresh className='text-lg w-full text-center animate-spin' /> : 'Sign in'}
                                        </button>
                                    </div>
                                    <span className={clsx(
                                        "my-2",
                                        "flex justify-center select-none",
                                        "font-extralight  font-mono text-gray-500 text-sm",
                                        "before:content-['--------']",
                                        "before:px-4 after:px-4",
                                        "after:content-['--------']",
                                    )}>or</span>

                                    <div className="px-2">
                                        <button
                                            type='button'
                                            className={clsx("inline-flex space-x-3 items-center justify-center w-full py-2 ",
                                                "rounded-lg bg-amber-500 bg-opacity-80 focus-within:bg-yellow-400 duration-200 ease-in",
                                            )}>
                                            <FaGoogle className='text-slate-800' />
                                            <span className={clsx("font-light text-slate-800",
                                            )}>
                                                Sign in with Google
                                            </span>
                                        </button>
                                    </div>

                                </Form>
                            </Formik>
                        </div>
                        <div className="w-full inline-flex items-center justify-center select-none space-x-1">
                            <span className="text-slate-400 font-light text-sm">Don't have an account?</span>
                            <Link to={'/register'} className="text-sm text-blue-400">Sign up</Link>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

