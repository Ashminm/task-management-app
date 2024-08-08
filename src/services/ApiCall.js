
import { commonApi } from "./commonApi"

// baseurl
const BASEURL="http://localhost:3000"

// Api call
export const addTask=async(data)=>{
    return await commonApi("POST",`${BASEURL}/add-task`,data,"")
}

export const getTask=async()=>{
    return await commonApi("GET",`${BASEURL}/get-task`,"")
}

export const editTask=async(body,id)=>{
    return await commonApi("PUT",`${BASEURL}/edit-task/${id}`,body)
}

export const deleteTask=async(id)=>{
    return await commonApi("DELETE",`${BASEURL}/delete-task/${id}`)
}

export const getSingleTask=async(id)=>{
    return await commonApi("GET",`${BASEURL}/single-task/${id}`,"")
}
