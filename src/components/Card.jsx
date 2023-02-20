import React from 'react'

import Anish from '../assets/Anish.jfif'

import { SlSocialLinkedin,SlSocialInstagram } from "react-icons/sl";

import { TiSocialTwitter } from "react-icons/ti";

function Card() {
  return (
    <div className='w-full py-[10rem] px-4 bg-azure'>
      <div className='max-w-[1240px] mx-auto grid gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='mx-auto mt-[-3rem] bg-white rounded-full w-28 sh' src={Anish} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              {/* <p className='text-center text-4xl font-bold'>$149</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>SDE at MS</p>
                  
              </div>

              <div className="flex justify-center space-x-10 py-1">
                <SlSocialLinkedin/>
                <TiSocialTwitter size={20}/>
                <SlSocialInstagram/>

              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
        </div>
    </div>
  )
}

export default Card