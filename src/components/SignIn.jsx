import React, { useRef } from 'react'
import { useSearchParams } from 'react-router-dom';

const SignIn = () => {
  const [search, setSearch] = useSearchParams();
  const nameRef = useRef();
  const ageRef = useRef();
  const formSubmit = () => {
    setSearch({name: nameRef.current.value, age: ageRef.current.value})
  }
  const getSearchQuery = () => {
    console.log(search.get("name"), search.get("age"));
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className="">
            <h1 className='text-3xl text-blue-500'>SignIn</h1>
            <form action="">
              <input ref={nameRef} type="text" name="" id="" className='border border-gray-500' />
              <input ref={ageRef} type="number" name="" id="" className='border border-gray-500' />
              <button onClick={formSubmit} type='button' className='p-2 py-1 border border-blue-500'>Send</button>
              <button onClick={getSearchQuery} type='button' className='p-2 py-1 border border-blue-500'>Get</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn