import React from 'react'
import { useState } from 'react';
import Reactlogo from "../Images/hero image.jpg";
function Hero() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-1 p-12">
        <div className='basis-1/2 md:basis-1/2'>
          <div className="text-gray-900 bg-white font-custom mt-48">

            <h1 className=" lg:px-20 text-7xl font-extrabold">Task management <br />and lists Tool</h1>
            <br /><br />
            <p className="text-lg md:text-lg lg:text-lg text-gray-400 lg:px-20">
              We believe that designing products and services in close <br />
              partnership with our clients is the only way to have a real <br />
              impact on their business..
            </p>

            <div className="justify-self-auto mt-12 gap-2">
              <input type="text" placeholder="Name@company.com"

                className="text-center py-4 max-w-72 h-20 w-full lg:ml-20 text-lg text-gray-300 bg-white rounded-full border dark:border-gray-300"
              />
              <button
                type="button"
                className="py-6 pl-10 pr-10 lg:ml-6 text-nowrap text-lg text-white bg-blue-500 rounded-full border hover:text-white  dark:bg-blue-500 dark:text-white dark:border-blue-500"
              >
                Try it free
              </button>

            </div>
          </div>
        </div>
        <div className='basis-1/2 md:basis-1/2'>
          <div className=" bg-white justify-center items-center  mt-16">
            <img src={Reactlogo} alt="Mng" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>




      </div>


    </>
  )
}

export default Hero
