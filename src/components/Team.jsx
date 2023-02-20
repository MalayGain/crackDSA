import React from 'react'
import Card from './Card'


function Team() {
  return (
    <div className='m-16'>
        <div className='text-2xl font-bold p-4 text-blue-500'> Meet Our Eduactors</div>
         <div className=" md:flex">
            <Card/>
            <Card/>
            <Card/>
         </div>


         <div className='text-2xl font-bold p-4 text-blue-500'> Meet Our Tech Team</div>
         <div className=" md:flex">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
         </div>
    </div>
  )
}

export default Team