import React from 'react'
import img from './assets/Blood donation-amico 1.svg'
import bg from './assets/Beforelogin.svg'
import bgm from './assets/LandingM.svg'
import './Landing.css'

export const Landing = () => {
  return (
    <>
    
    <div className='main relative'>
        <img src={bg} className='lg:block bg-transparent hidden'/>
        <img src={bgm} className='lg:hidden bg-transparent block'/>
        <div className='absolute lg:top-0 xl:left-24 left-20 top-10'>
          <div className='lg:ml-6 lg:pt-20 lg:grid lg:grid-cols-3 gap-4 pb-5'>
              {/* receiver */}
              <div className='text-center mt-10 lg:pt-10'>
                <h2 className='pt-10 mt-10 text-white text-[30px] font-[700]'>Need Blood?</h2>
                <p className='text-white text-[15px] pt-10'>sadjnkdnakjdnajkndajkkdan</p>
                <a href=''>
                  <button className='bg-[#6A0000] text-white px-12 py-3 mt-10'>Proceed</button>
                </a>
              </div>
              {/* image */}
              <div className='lg:block hidden pt-10 mt-10 mb-10'>
                <img src={img}/>
              </div>
              {/* donor */}
              <div className='text-center lg:mt-10 pt-10 '>
                <h2 className='pt-10 mt-10 text-[#360000] text-[30px] font-[700]'>Become a Donor</h2>
                <p className='text-[#360000] text-[15px] pt-10'>sadjnkdnakjdnajkndajkkdakjn</p>
                <a href=''>
                  <button className='border border-[#6A0000] text-[#6A0000] hover:text-white hover:bg-[#6A0000] px-12 py-3 mt-10'>Save life</button>
                </a>
              </div>
            </div>
            <div className='text-center mt-2 pb-20'>
              Already have an account? <div className='text-[#6A0000] font-[500]'>Sign In</div>
            </div>  
          </div>
      
    </div>
  
    </>
  )
}
