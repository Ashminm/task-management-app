import React from 'react';
import landing from '../assets/landing.png'
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className='bg-[#dab692a9] h-[48rem] overflow-hidden'>
      <div className="text-center p-[8%] pb-0">
        <p className='uppercase text-[10px] font-bold'><span className='border-1 border-gray-800 p-2 rounded-full px-3'>Master your day</span></p>
        <h1 className='text-[60px]  font-semibold capitalize'>
          Manage your daily <br /> tasks
        </h1>
        <div className="pt-3">
        <Link to={'/task'}><button className='bg-stone-950 text-white py-2 px-4 me-4 rounded-full duration-300 hover:bg-[#8f5b34c9] '>
            Get Start <i class="fa-solid fa-arrow-right-long ps-2"></i>
        </button></Link>
        <Link to={'/addtask'}><button className=' border-1 border-black text-black py-2 px-4 rounded-full hover:bg-[#8f5b345e] duration-300'>
            Add Task <i class="fa-solid fa-plus ps-2"></i>
        </button></Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <img className='hidden lg:block' src={landing} alt="" />
      </div>
    </div>
  );
}

export default Landing;
