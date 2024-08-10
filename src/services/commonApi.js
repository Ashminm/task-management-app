import axios from "axios";

export const commonApi=async (method,url,body)=>{

    const urlConf={
        method,
        url,
        data:body,
    }
    return await axios(urlConf).then(res=>{return res}).catch(err=>{return err})
}