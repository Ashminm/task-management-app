import axios from "axios";

export const commonApi=async (method,url,body,header)=>{

    const urlConf={
        method,
        url,
        data:body,
        header:{'Content-Type':'application/json'}
    }
    return await axios(urlConf).then(res=>{return res}).catch(err=>{return err})
}