import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className="">
            <h1 className='text-3xl text-blue-500'>About</h1>
            <h1 className='text-2xl text-red-500'>{location.state?.name}</h1>
        </div>
    </div>
  )
}

export default About