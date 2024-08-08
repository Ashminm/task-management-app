import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { addTask, getTask } from '../services/ApiCall';

function Tasks() {
  const [allTask,SetAlltask]=useState([])
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTaskData({title:"",description:"",duration:"",priority:"",category:""})
  };

  const [alignment, setAlignment] = React.useState('Low');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const [taskData,setTaskData]=useState({
    title:"",description:"",duration:"",priority:"",category:""
  })

  // console.log(taskData);
  
  const handlePriorityChange = (event, newValue) => {
    if (newValue !== null) {
      setTaskData({ ...taskData, priority: newValue });
    }
    handleChange()
  };

const handleAddTask=async(e)=>{
  e.preventDefault()
  if(!taskData.title || !taskData.description || !taskData.duration || !taskData.priority || !taskData.category){
    alert("Enter all fileds!")
  }else{
    const res=await addTask(taskData)
    if(res.status === 200){
      console.log(res)
    console.log('Suceesfull!!');
    setTaskData({title:"",description:"",duration:"",priority:"",category:""})
    }else{
      alert(res.response.data)
    }
     
  }

handleClose();
}

const gettask=async()=>{
  const Result=await getTask()
  SetAlltask(Result.data)
  
}
useEffect(()=>{
  gettask()
},[])
// console.log(allTask);



  return (
    <div className='bg-[#dab6924b]  h-full p-4'>
      <Header/>
        <div className="h-full mt-4">
          <div>
            <h1 className='text-5xl font-semibold'>Hello, User!</h1>
            <h5 className='font-medium'>Have a nice day</h5>
          </div>
          <div className="mt-4 flex justify-between">
            <div className='w-[80%] md:w-[93%] lg:w-[95%] flex items-center'><SearchIcon sx={{fontSize:'29px'}} /> <input type="text" className='outline-none pe-3 ps-1 py-2 rounded-full w-full bg-transparent' placeholder='Search tasks' /> </div>
            <div className=""><i class="fa-solid fa-sliders fa-xl"></i></div>
          </div>
          <div className="flex flex-wrap justify-between  h-full ">
          <div className="mt-[30px] border-2 border-gray-400 rounded-md lg:w-[59%] md:w-[80%] sm:w-full">
            <div className="w-full p-3 pt-4">
             <div className="flex justify-between">
             <h5>Tasks </h5>
             <div className="flex justify-between w-24">
              <p className='cursor-pointer border-1 border-gray-400 rounded-full px-[5px] pt-0.5'><i class="fa-solid fa-sliders"></i></p>
              <p className='cursor-pointer border-1 border-gray-400 rounded-full px-[5px] pt-0.5'><i class="fa-solid fa-arrow-rotate-left"></i></p>
              <p className='cursor-pointer border-1 border-gray-400 rounded-full px-[5px] pt-0.5' onClick={handleClickOpen}><i class="fa-solid fa-plus"></i></p>
                <React.Fragment>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="xs"
                    fullWidth
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Add Task"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <form>
                        <div className="mb-3">
                          <label className='text-sm font-semibold'>Title</label><br />
                          <input type="text" onChange={(e)=>{setTaskData({...taskData,title:e.target.value})}} className='bg-gray-300 py-2 px-4 ps-2 outline-none rounded-md w-full' placeholder='Social Media Campaign' />
                        </div>
                        <div className="mb-3">
                          <label className='text-sm font-semibold'>Description</label><br />
                          <textarea onChange={(e)=>{setTaskData({...taskData,description:e.target.value})}} name="" id="" className='resize-none bg-gray-300 py-2 px-4 ps-2 outline-none rounded-md w-full' placeholder='Enter task description'></textarea>
                        </div>
                        <div className="mb-3 flex justify-between">
                        <div className="">
                        <label className='text-sm font-semibold'>Priority</label><br />
                            <ToggleButtonGroup
                              color="primary"
                              value={taskData.priority}
                              exclusive
                              onChange={handlePriorityChange} // Attach the handler here
                              aria-label="Priority"
                              className='w-full'
                            >
                              <ToggleButton value="Low" className='lowercase'>Low</ToggleButton>
                              <ToggleButton value="Medium">Medium</ToggleButton>
                              <ToggleButton value="High">High</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div >
                          <label htmlFor=""className='text-sm font-semibold'><i class="fa-regular fa-clock"></i></label><br />
                          <select name="" id="" onChange={(e)=>{setTaskData({...taskData,duration:e.target.value})}} className='form-control bg-gray-300 py-[12px]'>
                            <option selected disabled className='form-control'>Dur..</option>
                            <option value="30sec" className='form-control'>30sec</option>
                            <option value="1hr" className='form-control'>1hr</option>
                            <option value="2hr" className='form-control'>2hr</option>
                            <option value="3hr" className='form-control'>3hr</option>
                          </select>
                        {/* <input type="text" onChange={(e)=>{setTaskData({...taskData,duration:e.target.value})}} className='bg-gray-300 py-[12px] px-4 ps-3 outline-none rounded-md w-[70px]' placeholder='2hr' /> */}
                        </div>
                        </div>
                        <div >
                          <label htmlFor="" className='text-sm font-semibold'>category</label>
                          <select name="" id="" onChange={(e)=>{setTaskData({...taskData,category:e.target.value})}} className='form-control bg-gray-300'>
                            <option selected className='form-control'>--Select--</option>
                            <option value="Meet" className='form-control'>Meet</option>
                            <option value="Work" className='form-control'>Work</option>
                            <option  value="Home" className='form-control'>Home</option>
                          </select>

                        </div>
                        </form>



                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleAddTask} autoFocus>
                        Add
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>

             </div>
             </div>
            </div>
                <div className="flex flex-wrap overflow-y-scroll">
                  {
                    allTask?
                    allTask.map(item=>(
                  <div className="m-2">
                <Card sx={{ maxWidth: 345 ,borderRadius: '6px',backgroundColor:'#eb81086b' }} className={`lg:w-[250px] sm:w-ful rounded-lg ${item.category === "Work" ? "bg-red-300" : item.category === "Home" ? "bg-orange-300" : item.category === "Meet" ? "bg-green-300" : "bg-yellow-300"}`}>
                <CardActionArea>
                  <div className="flex justify-between items-center p-[9px] pb-0">
                    <p className={`text-sm text-yellow-800 px-3 py-1 m-0 rounded-full ${item.priority == "High" ? "bg-red-300": item.priority === "Medium" ? "bg-orange-300" : "bg-yellow-300"}`}>{item?.priority}</p>
                    <DeleteIcon fontSize="large" className='p-2 bg-red-400 hover:bg-gray-950 text-gray-950 hover:text-red-400 transition  rounded-full' />
                  </div>
                  <CardContent className='pb-2'>
                    <div>
                      <h5>{item?.title}</h5>
                      <h6>{item?.description.slice(0,52)}</h6>
                      <p className='text-[13px]'><i className="fa-regular fa-calendar pe-2"></i>{new Date(item.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </p>
                      <div className="flex justify-between items-end">
                        <h6><i class="fa-solid fa-pen  bg-green-400 hover:bg-gray-950 text-gray-950 hover:text-green-400 transition p-2 rounded-full"></i></h6>
                        <div className="flex">
                          <h6 className='me-3'><i class="fa-regular fa-clock pe-2"></i>{item?.duration}</h6>
                          <h6><i class="fa-solid fa-list pe-2"></i>{item?.category}</h6>
                        </div>
                      </div>
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
                    )):
                    <p>No Tasks</p>
                  }
                </div>
          </div>
          <div className="border-2 mt-[30px] border-gray-400 rounded-md lg:w-[37%] md:w-80%] sm:w-full">
          <div className="w-full p-3 pt-4">
             <div className="flex justify-between">
             <h5>Completed </h5>
             <div className="flex justify-between w-24">
              <p className='cursor-pointer border-1 border-gray-400 rounded-full px-[5px] pt-0.5'><i class="fa-solid fa-sliders"></i></p>
              <p className='cursor-pointer border-1 border-gray-400 rounded-full px-[5px] pt-0.5'><i class="fa-solid fa-arrow-rotate-left"></i></p>
              <p className='cursor-pointer border-1 border-gray-400 rounded-full px-[5px] pt-0.5'><i class="fa-solid fa-trash-can"></i></p>
             </div>
             </div>
            </div>
          <div className="flex flex-wrap">
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
        </div>
      <Footer />
    </div>
  )
}

export default Tasks