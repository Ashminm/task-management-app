
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

