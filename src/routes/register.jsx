import clsx from 'clsx'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { HiOutlineRefresh, HiOutlineX } from 'react-icons/hi'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useUserAuth } from '../context/userAuthContext'


export function Register() {
    const { user, SignUp } = useUserAuth();
    const [Ferror, setFerror] = useState(null);
    const [formsubmitting, setformsubmitting] = useState(false);
    const navigate = useNavigate();
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
        onSubmit: async (values) => {
            console.log("values from form: ", values);
            setformsubmitting(true);
            try {
                await SignUp(values.email, values.password);
                navigate('/profile');
            } catch (error) {
                let error_msg = error.code
                    .replaceAll("auth", '')
                    .replaceAll('-', ' ')
                    .replaceAll('/', ' ')
                setFerror(error_msg);
                setformsubmitting(false);
            }
        },
    });
    if (user) {
        return <Navigate to={'/dashboard'} />
    }
    else {

        return (
            <div className="h-screen ">
                <div className="h-5/6 grid place-content-center">

                    <div className=" min-w-[18rem] max-w-[22rem] mx-2 ">
                        <Link to='/' className='text-4xl font-semibold text-center block '>
                            <span className="text-yellow-400 ">Doit</span>
                        </Link>
                        <h2 className="text-2xl font-thin font-sans text-center my-6 ">Create an account</h2>

                        {Ferror &&
                            <p className="w-full inline-flex items-center justify-between bg-rose-600 bg-opacity-60  px-4 mb-2 py-3 rounded-lg font-light text-xs text-rose-300 select-none">
                                <span>{Ferror}</span>
                                <button type='button'
                                    onClick={() => setFerror(null)} >
                                    <HiOutlineX className='text-lg' />
                                </button>
                            </p>}

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                formik.handleSubmit(e);
                            }}
                            className={clsx('space-y-4 bg-zinc-800 bg-opacity-50 rounded-lg p-4 mb-2',
                            )}>

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
                                    disabled={(formik.errors.email && formik.errors.password && formik.errors.confirm_password) || formsubmitting}
                                    className='w-full px-3 py-1.5 disabled:bg-slate-600 disabled:rounded-lg '>
                                    {formsubmitting === true ? <HiOutlineRefresh className='text-white my-1 w-full text-center animate-spin' /> : "Sign up"}
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
}