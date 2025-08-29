import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-5 md:px-8 lg:px-15'>
        {/* ------------ Left Side ---------------*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-8 m-auto md:py-[8vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Schedule Appointment <br />
                    with <span className='text-[#ef87ac]'>Trusted Doctors</span>
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-medium'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors, schedule your appointments hassle-free.
            </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-[#ef87ac] px-8 py-3 rounded-full text-gray-800 font-medium text-lg m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
        </div>
    
        {/* ------------ Right Side ---------------*/}
        <div className='md:w-1/2 relative flex justify-center items-center'>
            <img className=' w-full max-w-xs md:max-w-full md:absolute bottom-0 h-auto rounded-lg mx-auto ' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header
