import React from 'react';
import landing from '../assets/landing.png'
import Button from '@mui/material/Button';

function Landing() {
  return (
    <div className='bg-[#dab692a9] h-[48rem] overflow-hidden'>
      <div className="text-center p-[8%] pb-0">
        <p className='uppercase text-[12px] font-bold'><span className='border-1 border-gray-800 p-2 rounded-full px-3'>Master your day</span></p>
        <h1 className='lg:text-7xl md:text-6xl font-semibold capitalize'>
          Manage your daily <br /> tasks
        </h1>
        <div className="pt-3">
        <button className='bg-[#8F5B34] text-white py-2 px-4 me-4 rounded-full'>
            Get Start <i class="fa-solid fa-arrow-right-long"></i>
        </button>
        <button className=' border-1 border-[#8F5B34] text-black py-2 px-4 rounded-full '>
            Add Task <i class="fa-solid fa-plus"></i>
        </button>
        </div>
      </div>
      <div className="">
        <img className='hidden lg:block' src={landing} alt="" />
      </div>
    </div>
  );
}

export default Landing;
