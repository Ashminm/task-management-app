import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="flex justify-between items-start ">
        <span><i class="fa-solid fa-bars-staggered fa-xl"></i></span>
        <div className="flex items-center">
        <span><i class="fa-regular fa-bell fa-xl me-3"></i></span>
        <span><Link to={'/'}><i class="fa-solid fa-circle-user text-4xl text-black"></i></Link></span>
        </div>
      </div>
    </div>
  )
}

export default Header