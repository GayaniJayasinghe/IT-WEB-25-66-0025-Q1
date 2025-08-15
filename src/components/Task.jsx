import React from 'react'
import { useState } from 'react';
import Reactlogo from "../Images/Image 8.jpg";
function Task() {
  return (
    <>

      <div class="grid lg:grid-cols-2 lg:grid-rows-1 gap-2 mt-40 p-10 ">
        <div className='basis-1/2 md:basis-1/2 md:mr-16'>
          <div class="bg-white lg:ml-16 p-5 w-full h-full justify-center items-start ">
            <img src={Reactlogo} alt="Hero" className="h-auto object-cover rounded-lg" />

          </div>
        </div>

        <div class="basis-1/2 md:basis-1/2 font-custom">

          <h1 class="bg-white font-bold text-6xl text-left  "><br />Why do you need<br />
            task management</h1>
          <p class="text-lg text-gray-400 "><br /><br />Do you waste time organizing sticky notes, searching your email
            <br /> and apps for to-dos, and figuring out what to work on first?
            <br />   Then you need one solution to prioritize your tasks, manage
            <br />your time, and meet your deadlines.<br /><br /><br />
          </p>

          <div className="justify-between">


            <button type="button" class="py-6 px-20 text-2xl text-white focus:outline-1 bg-indigo-500 rounded-full border  dark:border-blue-500  ">  Learn more  </button>

          </div>


          {/* <span class="text-xs italic">A very small detail.</span>  */}
        </div>







      </div>


    </>
  )
}

export default Task 