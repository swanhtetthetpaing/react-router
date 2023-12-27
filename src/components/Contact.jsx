import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const nav = useNavigate();
  const goToBack = () => {
    nav(-1);
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className="">
            <h1 className='text-3xl text-blue-500'>Contact</h1>
            <button onClick={goToBack} className='p-2 py-1 border border-blue-500'>Go to back</button>
        </div>
    </div>
  )
}

export default Contact