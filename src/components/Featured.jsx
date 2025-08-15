 import React from 'react'
  import { useState } from 'react';
import Reactlogo from "../Images/Image 3.png";
import Reactlogo1 from "../Images/Image 2.png";
import Reactlogo2 from "../Images/Image 1.png";

function Featured() {
  return (
    <><br/><br/><br/><br/><br/><br/>
    <h1 className='font-bold text-5xl text-center font-custom'>Featured Service that We Provide</h1>

  
    

<div class="flex flex-wrap justify-center gap-0 mt-14 font-custom">
  {/* First img */}
  <div class="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 p-9">
    <div class="bg-blue-500 shadow-md p-4 rounded-xl">
        <img src={Reactlogo} alt="Featured" className="h-auto object-cover " />
      <h2 class="text-2xl text-center font-bold text-white"> Keep tasks in<br/>one place</h2>
      <p class="text-white text-xs text-center leading-normal"><br/>
                Save time, avoid losing work and<br/>
                 information, delegate, and track tasks to<br/>
                 stay on schedule<br/>
            </p>
      
    </div>
  </div>

  {/* Second img */}
  <div class="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 p-9 mt-14">
    <div class="bg-gray-100 shadow-md p-4 rounded-xl">
        <img src={Reactlogo1} alt="Featured" className="h-auto object-cover rounded-lg" />
    
      <h2 class="text-2xl text-center font-bold">Keep tasks in<br/>one place</h2>
      <p class="text-slate-600 leading-normal text-xs text-center"><br/>
                Save time, avoid losing work and<br/>
                 information, delegate, and track tasks to<br/>
                 stay on schedule<br/>
            </p>
      
    </div>
  </div>

  {/* third img */}
  <div class="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 p-9">
    <div class="bg-amber-100 shadow-md p-4 rounded-xl">
        <img src={Reactlogo2} alt="Featured" className="h-auto object-cover rounded-lg" />
      <h2 class="text-2xl text-center font-bold">Keep tasks in<br/>one place</h2>
      <p class="text-slate-600 leading-normal text-xs text-center"><br/>
                Save time, avoid losing work and<br/>
                 information, delegate, and track tasks to<br/>
                 stay on schedule<br/>
            </p>
      
    </div>
  </div>
</div>

    </>
    );
}

export default Featured
    