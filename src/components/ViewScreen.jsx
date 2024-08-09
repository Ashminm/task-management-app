import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleTask } from '../services/ApiCall'
import Card from 'react-bootstrap/Card';

function ViewScreen() {

    const {id}=useParams()
    const [singleTask,setSingleTask]=useState({})

    useEffect(()=>{
        getTask()
    },[])
        const getTask=async()=>{
            const res=await getSingleTask(id)
            if(res.status===200){
                setSingleTask(res.data)
            }else{
                console.log(res.response.data);
                
            }
        }

    // console.log(id);
    // console.log(singleTask);
  return (
   
        <div className={`flex justify-center items-center w-full h-screen ${singleTask.category === "Work" ? "bg-red-200" : singleTask.category === "Home" ? "bg-orange-200" : singleTask.category === "Meet" ? "bg-green-200" : "bg-yellow-200"}`}>
            <Card className='bg-transparent shadow-2xl w-[50rem]'>
      <Card.Header className='py-3'> <Link className='pe-1' to={'/task'}><i class="fa-solid fa-circle-arrow-left fa-xl text-black"></i></Link> Task Details</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p><i class="fa-solid fa-magnifying-glass fa-lg pe-1"></i>
            {' '}
            {singleTask.title}{' '}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Task Title</cite>
          </footer>
          
          <p><i class="fa-brands fa-envira fa-lg pe-1"></i>
            {' '}
            {singleTask.priority}{' '}
          </p>
          <footer className="blockquote-footer">
          <cite title="Source Title">Task Priority</cite>
          </footer>
          <p><i class="fa-regular fa-bookmark fa-lg pe-1"></i>
            {' '}
            {singleTask.description}{' '}
          </p>
          <footer className="blockquote-footer">
          <cite title="Source Title">Task Description</cite>
          </footer>
           <p className=''><span>{singleTask.category === "Work"? <i class="fa-solid fa-briefcase fa-lg pe-1"></i> : singleTask.category === "Home"? <i class="fa-solid fa-house fa-lg pe-1"></i> : singleTask.category === "Meet" ? <i class="fa-solid fa-globe fa-lg pe-1"></i> : <i class="fa-solid fa-wifi fa-lg pe-1"></i> }</span>  {singleTask?.category}</p>
            
          <footer className="blockquote-footer">
          <cite title="Source Title">Task Category</cite>
          </footer>
          <p><i class="fa-regular fa-clock fa-lg pe-1"></i>
            {' '}
            {singleTask.duration}{' '}
          </p>
          <footer className="blockquote-footer">
          <cite title="Source Title">Task Duration</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </div>
    
  )
}

export default ViewScreen