import React from 'react'
import Logo from "../img/large.png"
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className='mt-[100px] p-[20px] bg-[#b9e7e7] flex items-center justify-between font-[12px]'>
      <img className='w-[50px] rounded-full' src={Logo} alt="" />
      <span className='block w-1/2 flex justify-end gap-2 items-center'>Made with<span className='text-red-500 '><FaHeart /></span> and <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer