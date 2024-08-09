import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

function TaskView({task}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
         <h6 onClick={handleClickOpen}><i class="fa-regular fa-eye  bg-sky-200 hover:bg-gray-950 text-gray-950 hover:text-sky-200 duration-500 p-2 rounded-full"></i></h6>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={false}  // Disable the default maxWidth
      sx={{ maxWidth: '380px',margin:'auto' }}
     
      >
        <DialogTitle id="alert-dialog-title">
        <h3>Quick View</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h4>{task.title}</h4>
           <p>{task.description}</p>
           <div className="flex justify-between">
           <p className={`text-md w-full content-center px-3 py-1 me-4 rounded-full ${task.priority == "High" ? "bg-red-300": task.priority === "Medium" ? "bg-orange-300" : "bg-yellow-300"}`}>{task?.priority}</p>
           <p className={`text-md w-full content-center px-3 py-1 me-4 rounded-full ${task.duration == "30sec" ? "bg-red-300": task.duration === "1hr" ? "bg-orange-300" : task.duration == "2hr" ? "bg-sky-300" : "bg-yellow-300"}`}>{task?.duration}</p>
           <p className={`text-md w-full content-center px-3 py-1 me-4 rounded-full ${task.category == "Work" ? "bg-red-300": task.category === "Home" ? "bg-orange-300" : "bg-yellow-300"}`}>{task?.category}</p>
           </div>
           <p className='mt-4'><Link className='bg-gray-400 px-4 py-3  duration-500 rounded-md hover:bg-gray-300 text-gray-950' style={{textDecoration:'none'}} to={`/FullScreen/${task?._id}`}>FullScreen View <i class="fa-solid fa-up-right-and-down-left-from-center ps-2"></i></Link></p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TaskView