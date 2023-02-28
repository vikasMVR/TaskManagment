import React, { useState } from 'react'
import { FaGoogle, } from "react-icons/fa"
import { HiOutlineX, } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config'
// import { useNavigate } from 'react-router-dom'


export function Register() {
    const [SSerror, setSSerror] = useState(null);

    async function registerUser(values) {
        try {
            const user = await createUserWithEmailAndPassword(auth, values.email, values.password);
        }
        catch (error) {
            console.log(error.code);
            if(error.code==='auth/email-already-in-use'){
                setSSerror("email invalid or already in use");
            }
            
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('required'),
            password: Yup.string()
                .min(6, 'must be 6 characters or more')
                .max(15, 'must be 15 characters of less')
                .required('required'),
            confirm_password: Yup.string()
                .min(6, 'must be 6 characters or more')
                .max(15, 'must be 15 characters of less')
                .oneOf([Yup.ref('password'), null], "must be equal to password")
                .required('required'),
        }),
        onSubmit: (values) => {
            console.log("values from form: ", values);
            registerUser(values);
        },
    });



    return (
        <div className="h-screen ">
            <div className="h-5/6 grid place-content-center">

                <div className=" min-w-[18rem] max-w-[22rem] mx-2">
                    <Link to='/' className='text-4xl font-semibold text-center block '>
                        <span className="text-yellow-400 ">Doit</span>
                    </Link>
                    <h2 className="text-2xl font-thin font-sans text-center my-6 ">Create an account</h2>

                    {SSerror &&
                        <p className="w-full inline-flex items-center justify-between bg-rose-600 bg-opacity-60  px-4 mb-2 py-3 rounded-lg font-light text-xs text-rose-300 select-none">
                            <span>{SSerror}</span>
                            <button type='button'
                            onClick={()=> setSSerror(null)} >
                            <HiOutlineX className='text-lg' />
                            </button>
                        </p>}

                    <form
                        onSubmit={formik.handleSubmit}
                        className='space-y-4 bg-zinc-800 bg-opacity-50 rounded-lg p-4 mb-2'>



                        <div className="">
                            <label htmlFor="email" className='font-extralight select-none'>email</label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                            {formik.touched.email && formik.errors.email ? (
                                <p className=" font-extralight text-xs text-rose-300 select-none">{formik.errors.email}</p>
                            ) : null}
                        </div>

                        <div className="">
                            <label htmlFor="password" className='font-extralight select-none'>create password</label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                            {formik.touched.password && formik.errors.password ? (
                                <p className=" font-extralight text-xs text-rose-300 select-none">{formik.errors.password}</p>
                            ) : null}
                        </div>

                        <div className="">
                            <label htmlFor="confirm_password" className='font-extralight select-none'>confirm password</label>
                            <input
                                type="password"
                                id="confirm_password"
                                name='confirm_password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirm_password}
                                className="w-full px-3 py-1.5 text-sm text-slate-300 rounded-md font-extralight bg-zinc-900 border border-slate-600 focus:outline focus:outline-blue-300 duration-150 ease-in" />
                            {formik.touched.confirm_password && formik.errors.confirm_password ? (
                                <p className=" font-extralight text-xs text-rose-300 select-none">{formik.errors.confirm_password}</p>
                            ) : null}
                        </div>

                        <div className="bg-indigo-500 bg-opacity-60 hover:bg-sky-800 rounded-lg duration-150 ease-in">
                            <button
                                type="submit"
                                className='w-full px-3 py-1.5   '>
                                Sign up
                            </button>
                        </div>

                        <p className="before:inline before:content-['---------------------'] after:inline after:content-['---------------------'] before:pr-4 after:pl-4 text-center font-extralight text-base text-slate-400 select-none">or</p>

                        <div className="rounded-lg bg-amber-500 bg-opacity-80 focus-within:bg-yellow-400 duration-200 ease-in ">
                            <button type='button' className="inline-flex space-x-3 items-center justify-center w-full py-2 ">
                                <FaGoogle className='text-slate-800' />
                                <span className="font-light text-slate-800">Sign up with Google</span>
                            </button>
                        </div>

                    </form>

                    <div className="w-full inline-flex items-center justify-center select-none space-x-1">
                        <span className="text-slate-400 font-light ">Already have an account?</span>
                        <Link to={'/login'} className="text-sm text-indigo-300">Sign in</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

