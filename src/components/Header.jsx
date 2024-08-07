import React from 'react'

function Header() {
  return (
    <div>
      <div className="flex justify-between items-start ">
        <span><i class="fa-solid fa-bars-staggered fa-xl"></i></span>
        <span><i class="fa-solid fa-circle-user text-5xl"></i></span>
      </div>
    </div>
  )
}

export default Header