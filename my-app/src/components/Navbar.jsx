import React from 'react'
import {FaBars, Fatimes} from 'react-icons/fa'
import Logo from '../assests/Logo.png'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2E4962] text-[#E29E21]'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '200px'}} />
      </div>
    </div>
  )
}

export default Navbar