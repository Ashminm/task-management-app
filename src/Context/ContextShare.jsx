import React,{useState,createContext} from 'react'

export const addTaskConext = createContext();
export const editTaskConext = createContext();

function ContextShare({children}) {

    const [addResponse,setAddResponse]=useState({})
    const [editResponse,setEditResponse]=useState({})
  return (
    <>
    <addTaskConext.Provider value={{addResponse,setAddResponse}} >
        <editTaskConext.Provider value={{editResponse,setEditResponse}} >
            {children}
        </editTaskConext.Provider>
    </addTaskConext.Provider>
    </>
  )
}

export default ContextShare