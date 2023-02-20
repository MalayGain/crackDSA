import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'



function Navbar() {


    const[nav,setNav]=useState(true)

    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between p-4 items-center h-24'>
        <h1 className="text-3xl font-bold underline ">
          crackDSA
        </h1>

        <ul className=" hidden md:flex text-lg left-0 justify-between">
            <li className="p-4">Home</li>
            <li className="p-4">Learn</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>

            <button className=' md:bg-[#9b5dd5]  rounded-md font-medium  mx-auto px-6 py-4'>Signup</button>
        </ul>

        {/* <button className=' md:bg-[#00df9a]  rounded-md font-medium my-6 mx-auto px-6 py-3'>Signup</button> */}

        <div onClick={handleNav} className="md:hidden">
            {!nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> } 
        </div>



        <div className={!nav?"left-0 fixed top-0 h-full w-[60%] bg-slate-600 ease-in-out duration-500" : "fixed left-[-100%]"}>

            <h1 className="text-3xl font-bold underline  p-4">
            crackDSA
            </h1>

            <ul className="p-4 text-lg">
                <li className="p-4 border-b border-slate-900">Home</li>
                <li className="p-4 border-b border-slate-900">Learn</li>
                <li className="p-4 border-b border-slate-900">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>

        
    </div>
  )
}

export default Navbar