import './Donorsignup.css'
import React,{ useState } from 'react'
import img from './assets/Group 17.svg'

export const Donorsignup = () => {
 return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-10'>
    <div className='lg:block hidden text-center pt-10 mx-auto'>
        <img src={img} className='pt-20'/>
    </div>
    <div className='bg-[#F3DEE0] lg:pt-20 text-center h-screen'>
        <h2 className='text-[40px] text-[#C53F3F] font-[600] pt-10'>Create Profile</h2>
        <form className='mt-5 pt-5'>
        </form>
    </div>
    </div>
  )
}
