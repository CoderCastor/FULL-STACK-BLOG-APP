import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#b9e7e7]'>
        <h1 className='text-[40px] font-semibold text-teal-800 mb-[20px]'>Register</h1>
        <form action="" className='flex flex-col p-10 bg-white w-1/4 h-2/7 gap-[20px]'>
            <input required className='p-[10px] border-b-gray-900' type="text" placeholder='username' name="" id="" />
            <input required className='p-[10px] border-b-gray-900' type="email" placeholder='email' name="" id="" />
            <input required className='p-[10px] border-none border-r' type="password" placeholder='password' name="" id="" />
            <button className='px-10 py-2 bg-teal-700 text-white'>Login</button>
            <p className='text-center text-red-500 text-1xl font-semibold'>This is an Error!</p>
            <span className='text-center'>Do you have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register