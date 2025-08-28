import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-900 font-medium'>ABOUT US</p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to HealthSchedule, your reliable partner in simplifying healthcare management.
At HealthSchedule, we recognize how stressful it can be to balance appointments, follow-ups, and personal health records. That’s why we’ve designed a platform that helps you schedule doctor visits and organize your healthcare needs with ease and confidence.</p>
          <p>HealthSchedule is built on a commitment to innovation and care.
We constantly work to improve our platform, leveraging modern technology to deliver a smooth, user-friendly experience. Whether you’re booking a consultation, managing prescriptions, or keeping track of ongoing treatments, HealthSchedule ensures you stay in control of your health journey.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at HealthSchedule is to empower individuals with a seamless healthcare experience. We strive to connect patients and healthcare providers more efficiently, ensuring you can access the right care, at the right time—without hassle.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p className='text-gray-800 font-semibold'>WHY CHOOSE US</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
