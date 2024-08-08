import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { editTask } from '../services/ApiCall';

function EditTask({taskItem}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePriorityChange = (event, newValue) => {
    if (newValue !== null) {
      setEditTasks({ ...editTasks, priority: newValue });
    }
 
  };

  const [editTasks,setEditTasks]=useState({
    title:taskItem.title,description:taskItem.description,duration:taskItem.duration,priority:taskItem.priority,category:taskItem.category
  })

  // console.log(editTasks);
  
 const handleEditTask=async()=>{
  const {title,description,duration,priority,category}=editTasks
  if(!title || !description || !duration || !priority || !category){
    alert("Plese fill the detailse!!")
  }else{
    const body= {title,description,duration,priority,category}
    const Result=await editTask(body,taskItem._id)
    if(Result.status===200){
      alert("Successfully edit")
      handleClose()
    }else{
      console.log(Result.response.data);
      
    }
  }
 }
  
  
  return (
    <div>
      <h6 onClick={handleClickOpen}><i class="fa-solid fa-pen  bg-green-300 hover:bg-gray-950 text-gray-950 hover:text-green-400 transition p-2 rounded-full"></i></h6>
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
                      {"Edit Task"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <form>
                        <div className="mb-3">
                          <label className='text-sm font-semibold'>Title</label><br />
                          <input type="text" onChange={(e)=>setEditTasks({...editTasks,title:e.target.value}) } defaultValue={taskItem?.title} className='bg-gray-300 py-2 px-4 ps-2 outline-none rounded-md w-full' placeholder='Social Media Campaign' />
                        </div>
                        <div className="mb-3">
                          <label className='text-sm font-semibold'>Description</label><br />
                          <textarea  onChange={(e)=>setEditTasks({...editTasks,description:e.target.value}) } rows={4} defaultValue={taskItem?.description} className='resize-none bg-gray-300 py-2 px-4 ps-2 outline-none rounded-md w-full' placeholder='Enter task description'></textarea>
                        </div>
                        <div className="mb-3 flex justify-between">
                        <div className="">
                        <label className='text-sm font-semibold'>Priority</label><br />
                            <ToggleButtonGroup
                              color="primary"
                              value={editTasks.priority}
                              defaultValue={taskItem?.priority}
                              exclusive
                              onChange={handlePriorityChange}
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
                          <select onChange={(e)=>setEditTasks({...editTasks,duration:e.target.value}) } defaultValue={taskItem?.duration}  className='form-control bg-gray-300 py-[12px]'>
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
                          <select onChange={(e)=>setEditTasks({...editTasks,category:e.target.value}) }  defaultValue={taskItem?.category}  className='form-control bg-gray-300'>
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
                      <Button onClick={handleEditTask}  autoFocus>
                        Edit
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>

    </div>
  )
}

export default EditTask