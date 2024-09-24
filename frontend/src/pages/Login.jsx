import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#b9e7e7]'>
        <h1 className='text-[40px] font-semibold text-teal-800 mb-[20px]'>Login</h1>
        <form action="" className='flex flex-col p-10 bg-white w-1/4 h-2/7 gap-[20px]'>
            <input className='p-[10px] border-solid border-gray-700 border-b-2' type="text" placeholder='username' name="" id="" />
            <input className='p-[10px] border-solid border-gray-700 border-b-2' type="password" placeholder='password' name="" id="" />
            <button className='px-10 py-2 bg-teal-700 text-white'>Login</button>
            <p className='text-center text-red-500 text-1xl font-semibold'>This is an Error!</p>
            <span className='text-center'>Don't you have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login


//light-green color - #b9e7e7