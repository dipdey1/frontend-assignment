import React, { useState } from "react";

const ModalContext = React.createContext(null)

export const ModalProvider = (props) => {
    const [modalOpen, setOpenModal] = useState(false)
    const [modalSteps, setModalSteps] = useState("")
    const [jobObject, setJobObject] = useState({
        jobTitle:'',
        companyName:'',
        industry:'',
        location:'',
        remoteType:'',
        expMinimum:0,
        expMaximum:0,
        salaryMinimum:0,
        employeeCount:0,
        applyType:''
    })

    const handleModalOpen = () => {
        setOpenModal(true)
        console.log(modalOpen);
        setModalSteps("step 1")
    }
    const handleStep1 = () => {
        setModalSteps("step 2")
    }
    const handlechangeJobObject = (e,name) => {
        console.log(jobObject);
        console.log(e.target.value);
        setJobObject({...jobObject, [e.target.name]:e.target.value})
    }




 
    const contextData = {handleModalOpen, modalOpen, modalSteps,handleStep1, jobObject,handlechangeJobObject}


return (
    <ModalContext.Provider value={contextData}>
        {props.children}
    </ModalContext.Provider>
    )
}

export const useModal = () => {
    return(
        React.useContext(ModalContext)
    )
}