import { Form, Formik } from 'formik'
import { useState } from 'react'
import { HiOutlineRefresh, HiOutlineX } from 'react-icons/hi'
import { Link, Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { InputField } from '../components/form-inputs'
import { useAuthState } from '../myhooks/useAuthState'


export default function Register() {
    const [user,SignUp] = useAuthState();
    const [formstate, setformstate] = useState({ submitting: false, error: null });
    const handleFormSubmit = async (values) => {
        setformstate({...formstate,submitting:true})
        try {
            await SignUp(values.email, values.password);            
        } catch (error) {
            let error_msg = error.code
                .replaceAll("auth/", '')
                .replaceAll('-', ' ')          
            setformstate({...formstate,submitting:false,error:error_msg})
        }
    }
    if (user) {
        return <Navigate to={'/profile'} />
    }
    else {
        return (
            <div className="h-screen ">
                <div className="h-5/6 grid place-content-center">
                    <div className=" min-w-[18rem] max-w-[22rem] mx-2 ">
                        <Link to='/' className='text-4xl font-semibold text-center block '>
                            <span className="text-yellow-400 ">Doit</span>
                        </Link>
                        <h2 className="text-xl font-thin font-sans text-center my-4">Create an account</h2>
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
                                    confirm_password: '',
                                }}
                                validationSchema={Yup.object({
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
                                })}
                                onSubmit={(values) => {
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
                                    <InputField
                                        label="Confirm Password"
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                    />
                                    <div className="px-2 my-3">
                                        <button type="submit" className={"px-3 py-2 mt-3 w-full bg-slate-600 hover:bg-slate-700 rounded-md duration-150 ease-in"} >
                                            {formstate.submitting ? <HiOutlineRefresh className='text-lg w-full text-center animate-spin' /> : 'Sign up'}
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
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