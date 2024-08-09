import React from 'react';
import landing from '../assets/landing.png'
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className='bg-[#dab692a9] h-[48rem] flex justify-center items-center overflow-hidden'>
      <div className="text-center p-[8%]">
        <p className='uppercase text-[10px] font-bold'><span className='border-1 border-gray-800 p-2 rounded-full px-3'>Master your day</span></p>
        <h1 className='text-[60px]  font-semibold capitalize'>
          Manage your daily <br /> tasks
        </h1>
        <div className="pt-3">
        <Link to={'/task'}><button className='bg-gray-900 text-lime-50 py-2 px-4 me-4 rounded-full duration-300 hover:bg-transparent hover:text-gray-900 border-1 border-gray-950 '>
            Get Start <i class="fa-solid fa-arrow-right-long ps-2"></i>
        </button></Link>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
