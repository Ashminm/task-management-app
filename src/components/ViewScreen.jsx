import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleTask } from '../services/ApiCall'


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
    <div>
        <div className={`w-full h-screen ${singleTask.category === "Work" ? "bg-red-200" : singleTask.category === "Home" ? "bg-orange-200" : singleTask.category === "Meet" ? "bg-green-200" : "bg-yellow-200"}`}>
           <p>{singleTask.title}</p>
        </div>
    </div>
  )
}

export default ViewScreen