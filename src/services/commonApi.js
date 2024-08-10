import axios from "axios";

export const commonApi=async (method,url,body)=>{

    let urlConf={
        method,
        url,
        data:body,
        Headers:{
            'content-type':"application/json"
        }
    }
    return await axios(urlConf).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}