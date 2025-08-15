 import React from 'react'
 import { useState } from 'react';
import Reactlogo from "../Images/image 7.jpg";
import Reactlogo1 from "../Images/image 6.jpg"; 
import Reactlogo2 from "../Images/image 9.jpg"; 

function Workflow() {
   return (
    <>
    
   <div class="grid lg:grid-cols-2 lg:grid-rows-1 mt-72 ">
  {/* <div class="bg-blue-200 p-10 font-bold text-6xl h-96 text-left">Task management
and lists Tool</div> */}
<div class="basis-1/2 md:basis-1/2 font-custom lg:ml-72">
 
  <h2 class="font-bold text-5xl text-left ">Seamless Team<br/>
        Workflow & Efficient </h2>
 <p class="text-lg text-gray-400 mt-6"><br/>Do you waste time organizing sticky notes, searching your emai
   <br/> and apps for to-dos, and figuring out what to work on first?
    <br/>   Then you need one solution to prioritize your tasks, manage
    <br/>your time, and meet your deadlines.<br/><br/>
    </p>
    <div className='inline-flex space-x-6 mt-5'>
    <img src={Reactlogo1} alt="Apple" className="h-16 " />
    <img src={Reactlogo2} alt="Apple" className="h-20" />
    </div>
</div>



  <div class="bg-white basis-1/2 md:basis-1/2">
    <img src={Reactlogo} alt="Workflow" className="h-auto object-cover rounded-lg" />

  </div>

 


  {/* <div class="bg-blue-200 p-4 col-span-2">Column 2 (spans 2 columns)</div> */}

  


  
</div>

    
    </>
  )
}

export default Workflow
 