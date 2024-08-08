import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import filter from '../assets/15500899.png'

function Tasks() {
  return (
    <div className='bg-[#dab692a9]  h-full p-4'>
      <Header/>
        <div className="h-full mt-4">
          <div>
            <h1 className='text-5xl font-semibold'>Hello, User!</h1>
            <h5 className='font-medium'>Have a nice day</h5>
          </div>
          <div className="mt-4 flex justify-between">
            <div className='w-[80%] md:w-[93%] lg:w-[95%] flex items-center'><SearchIcon sx={{fontSize:'29px'}} /> <input type="text" className='outline-none pe-3 ps-1 py-2 rounded-full w-full bg-transparent' placeholder='Search tasks' /> </div>
            <div className=""><img className='w-[20px]' src={filter} alt="" /></div>
          </div>
          <div className="flex flex-wrap justify-between  h-full ">
          <div className="flex flex-wrap mt-[30px] border-2 border-gray-400 rounded-md lg:w-[59%] md:w-[80%] sm:w-full">
                <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#8f5b3470' }} className='lg:w-[250px] sm:w-[300px] rounded-lg'>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className='text-sm bg-yellow-300 text-yellow-800 px-3 py-1 m-0 rounded-full'>High</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-red-400 hover:bg-gray-950 text-gray-950 hover:text-red-400 transition  rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>Section at the bottom of a document or webpage.</h5>
                      <h6>Section at the bottom of a document or webpage</h6>
                      <p className='text-[13px]'><i class="fa-regular fa-calendar pe-2"></i>15 sep</p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen  bg-green-400 hover:bg-gray-950 text-gray-950 hover:text-green-400 transition p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>2hr</h6>
                          <h6><i class="fa-regular fa-square pe-2"></i>Meet</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
                <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#8a9ea786' }} className='lg:w-[250px] sm:w-[300px] rounded-lg'>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className='text-sm bg-gray-950 text-yellow-400 px-3 py-1 m-0 rounded-full'>Low</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-gray-950 text-lime-50 rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>Section at the bottom of a document or webpage.</h5>
                      <h6>Section at the bottom of a document or webpage</h6>
                      <p className='text-[13px]'><i class="fa-regular fa-calendar pe-2"></i>15 sep</p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen bg-gray-950 text-sky-500 p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>2hr</h6>
                          <h6><i class="fa-regular fa-square pe-2"></i>Meet</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
                <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#35cc4280' }} className='lg:w-[250px] sm:w-[300px] rounded-lg'>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className='text-sm bg-gray-950 text-yellow-400 px-3 py-1 m-0 rounded-full'>Hight</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-gray-950 text-lime-50 rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>Section at the bottom of a document or webpage.</h5>
                      <h6>Section at the bottom of a document or webpage</h6>
                      <p className='text-[13px]'><i class="fa-regular fa-calendar pe-2"></i>15 sep</p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen bg-gray-950 text-sky-500 p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>2hr</h6>
                          <h6><i class="fa-regular fa-square pe-2"></i>Meet</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
                <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#cc353560' }} className='lg:w-[250px] sm:w-[300px] rounded-lg'>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className='text-sm bg-gray-950 text-yellow-400 px-3 py-1 m-0 rounded-full'>Hight</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-gray-950 text-lime-50 rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>Section at the bottom of a document or webpage.</h5>
                      <h6>Section at the bottom of a document or webpage</h6>
                      <p className='text-[13px]'><i class="fa-regular fa-calendar pe-2"></i>15 sep</p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen bg-gray-950 text-sky-500 p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>2hr</h6>
                          <h6><i class="fa-regular fa-square pe-2"></i>Meet</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
          </div>
          <div className="flex flex-wrap border-2 mt-[30px] border-gray-400 rounded-md lg:w-[37%] md:w-80%] sm:w-full">
          <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#8A9EA7' }} className='lg:w-[234px] sm:w-[300px] rounded-lg'>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className='text-sm bg-gray-950 text-yellow-400 px-3 py-1 m-0 rounded-full'>Hight</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-gray-950 text-lime-50 rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>Section at the bottom of a document or webpage.</h5>
                      <h6>Section at the bottom of a document or webpage</h6>
                      <p className='text-[13px]'><i class="fa-regular fa-calendar pe-2"></i>15 sep</p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen bg-gray-950 text-sky-500 p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>2hr</h6>
                          <h6><i class="fa-regular fa-square pe-2"></i>Meet</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
          <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#8A9EA7' }} className='lg:w-[234px] sm:w-[300px] rounded-lg'>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className='text-sm bg-gray-950 text-yellow-400 px-3 py-1 m-0 rounded-full'>Hight</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-gray-950 text-lime-50 rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>Section at the bottom of a document or webpage.</h5>
                      <h6>Section at the bottom of a document or webpage</h6>
                      <p className='text-[13px]'><i class="fa-regular fa-calendar pe-2"></i>15 sep</p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen bg-gray-950 text-sky-500 p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>2hr</h6>
                          <h6><i class="fa-regular fa-square pe-2"></i>Meet</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
          </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Tasks