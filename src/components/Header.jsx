import React, { useState } from 'react';

// import './App.css';
import { CiMenuBurger } from "react-icons/ci";
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav class="bg-white mt-12">
        <div className="h-16 items-center flex justify-between ">
          <div className="text-5xl text-blue-600 font-extrabold px-20 font-custom tracking-tighter ml-10">     
          
            Taskia
          </div>
          {/* Desk top */}
            <div className="hidden sm:block" >
              {/* <a href=""className="text-gray-100 text-lg px-4">
                Home
              </a>
              <a href=""className="text-gray-100 text-lg px-4">
                About
              </a>
              <a href=""className="text-gray-100 text-lg px-4">
                Contact
              </a>
              <a href=""className="text-gray-100 text-lg px-4">
               AAA
              </a> */}
              <button type="button" class="py-2.5 px-8 me-20 mb-7 text-lg mt-12 mr-16 font-medium text-blue-600 focus:outline-1 bg-white rounded-full border border-blue-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-white dark:bg-white dark:text-blue-500 dark:border-blue-500 dark:hover:text-white dark:hover:bg-gray-700">  Try free  </button>

            </div>
            <button onClick={() => setIsOpen(!isOpen)} className='block sm:hidden px-4 text-3xl text-blue-500 '><CiMenuBurger /></button>
             </div>
              

   {/* Mobile */}
            
              <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-white space-y-2 pd-3`} >
              {/* <a href=""className="text-gray-600 text-lg px-4 block">
                Home
              </a>
              <a href=""className="text-gray-600 text-lg px-4 block">
                About
              </a>
              <a href=""className="text-gray-600 text-lg px-4 block">
                Contact
              </a>
              <a href=""className="text-gray-600 text-lg px-4 block">
               AAA
              </a> */}
              <button type="button" class="py-2.5 px-8 me-20 mb-2 mt-4 ml-20 text-lg mr-16 font-medium text-blue-600 focus:outline-1 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-white dark:bg-white dark:text-blue-500 dark:border-blue-500 dark:hover:text-white dark:hover:bg-gray-700">  Try free  </button>
             
            </div>       
  
</nav>

    </>
  )
}

export default Header
