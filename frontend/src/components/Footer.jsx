import React from 'react'
import Logo from "../img/logo.png"

function Footer() {
  return (
    <footer className='mt-[100px] p-[20px] bg-[#b9e7e7] flex items-center justify-between font-[12px]'>
      <img className='w-[50px]' src={Logo} alt="" />
      <span>Made with Love and <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer