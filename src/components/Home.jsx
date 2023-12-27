import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const nav = useNavigate();
  const goToAbout = () => {
    nav("/about", {state: {name: "Swan Htet Thet Paing"}})
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className="">
            <h1 className='text-3xl text-blue-500 mb-5'>Home</h1>
            <button onClick={goToAbout} className='p-2 py-1 border border-blue-500'>Go to about</button>
        </div>
    </div>
  )
}

export default Home