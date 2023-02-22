import './Rsignup.css'
import React,{ useState } from 'react';
import img from './assets/Ambulance-pana 1.svg'

export const RSignup = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-10'>
        <div className='lg:block hidden text-center pt-10 mx-auto'>
            <img src={img} className='pt-20'/>
        </div>
         <div className='bg-[#F3DEE0] lg:pt-20 text-center h-screen'>
             <h2 className='text-[40px] text-[#C53F3F] font-[600] pt-10'>Create Profile</h2>
            <div>
              <form className='mt-10'>

              </form>
          </div>
    </div>
  </div>
  )
}