import React from 'react'
import Logo from "../img/large.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar ">
        <div className="container py-[10px] flex justify-between">
            <div className="logo">
                 <img src={Logo} className='w-[120px]' alt="" />
            </div>
            <div className="links flex gap-6 bold items-center">
                <Link to="/?cat=art">
                <h6>ART</h6>
                </Link>

                <Link to="/?cat=science">
                <h6>SCIENCE</h6>
                </Link>

                <Link to="/?cat=technology">
                <h6>TECHNOLOGY</h6>
                </Link>

                <Link to="/?cat=cinema">
                <h6>CINEMA</h6>
                </Link>

                <Link to="/?cat=design">
                <h6>DESIGN</h6>
                </Link>

                <Link to="/?cat=food">
                <h6>FOOD</h6>
                </Link>
                <span className='font-semibold text-[20px] text-gray-500'>Castor</span>
                <span className='font-semibold text-[20px] text-gray-500'>Logout</span>
                <span className='bg-[#b9e7e7] px-6 py-2 rounded-3xl hover:bg-white border-2 border-white hover:text-[#1a8585] hover:border-[#1a8585]'>
                    <Link to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar