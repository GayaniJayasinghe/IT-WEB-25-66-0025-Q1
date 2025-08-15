 import React from 'react'
 import { useState } from 'react';
// import Reactlogo from "../Images/image 4.jpg";
// import Reactlogo1 from "../Images/image 5.jpg";
import Reactlogo from "../Images/Image 4.jpg";
import Reactlogo1 from "../Images/Image 2.png";
import Reactlogo2 from "../Images/Image 5.jpg";
function Trust() {
   return (
    <>

 <h1 className='font-bold font-custom text-5xl text-center mt-10'>Trust us and feel free to try our service </h1>

<div className="flex flex-col font-custom md:flex-row items-center md:items-start px-4 md:px-20 gap-y-6 md:gap-x-8">
  {/* First Image */}
  <img
    src={Reactlogo}
    alt="Featured"
    className="h-40 md:h-auto ms-20 mt-10 object-cover rounded-lg"
  />

  {/* Number */}
  <h1 className="text-center text-9xl mt-4 ml-32 mr-48 md:mt-48 font-custom text-blue-600 font-bold">
    100000
  </h1>

  {/* Second Image */}
  <img
    src={Reactlogo2}
    alt="Featured"
    className="h-40 md:h-auto object-cover  rounded-lg mt-36"
  />
</div>



    
    </>
  )
}

export default Trust