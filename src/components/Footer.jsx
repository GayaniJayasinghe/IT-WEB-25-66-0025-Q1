 import React from 'react'
 import { useState } from 'react';

function Footer() {
    return (
        <>
            <hr class="border-t border-gray-300 my-4"></hr>
            <div className='flex flex-col  mt-10 mb-48 font-custom'>
                <h1 className='font-bold font-custom text-5xl text-center mt-32'>Get better work done </h1>
                <h2 className='font-custom text-2xl text-center  text-gray-700-400 mt-6'>See why millions of people across 195 <br />countries use Dash</h2>

                <div className="flex flex-wrap justify-center mt-12 sm:px-2 lg:px-20 h-auto sm:h-16 gap-4">
                    <input type="Text"  placeholder="Name@company.com"
                        className=" flex text-center text-lg py-4 pl-10 pr-10 max-w-72 h-20 w-full  text-gray-400 bg-white rounded-full border  focus:outline-non  focus:ring-4 dark:focus:ring-white dark:bg-white dark:border-gray-300"
                    />
                
                    <button
                        type="button"
                        className="py-2.5 px-6 sm:px-8 lg:px-12 text-lg font-medium text-white bg-blue-500 rounded-full border hover:text-white focus:outline-1 focus:ring-4 dark:bg-blue-500 dark:text-white dark:border-blue-500"
                    >
                        Try it free
                    </button>

                </div>
            </div>
        </>
    )
}

export default Footer