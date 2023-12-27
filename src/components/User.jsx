import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {name} = useParams();
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className="">
            <h1 className='text-3xl text-blue-500'>Hello, {name}</h1>
        </div>
    </div>
  )
}

export default User