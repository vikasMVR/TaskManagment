import React from 'react'
import { Btn, LinkBtn } from '../components/utilityconponents/buttons'

export default function PageNotFound() {
    return (
        <div>
            <div class="grid h-screen px-4 place-content-center">
                <div class="text-center">
                    <h1 class=" text-gray-200 text-9xl font-extrabold shadow-sm">404</h1>
                    <p class="text-2xl font-bold  sm:text-4xl">Sorry!</p>
                    <p class="my-2 text-gray-500">We can't find that page.</p>
                    <LinkBtn className={'px-3 py-2 mt-4 bg-indigo-500 hover:bg-slate-600 duration-200 ease-in'} link='/'>
                        go to home
                    </LinkBtn>
                </div>
            </div>
        </div>
    )
}