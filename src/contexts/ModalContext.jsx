import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalContext = React.createContext(null)

export const ModalProvider = (props) => {
    const baseURL = "https://658a7e53ba789a9622372a43.mockapi.io/api/v1/jobDescription"
    const [modalOpen, setOpenModal] = useState(false)
    const [modalSteps, setModalSteps] = useState("")
    const [jobObject, setJobObject] = useState({
        jobTitle:'',
        companyName:'',
        industry:'',
        location:'',
        remoteType:'',
        expMinimum:'',
        expMaximum:'',
        salaryMinimum:'',
        employeeCount:'',
        applyType:''
    })
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getJobsOnLoad()
        console.log(jobs);
    },[])

    const getJobsOnLoad = async () => {
        let jobList = await axios.get(baseURL).then((resp) => console.log(resp))
        setJobs(jobList)
    }

    const handleModalOpen = () => {
        setOpenModal(true)
        setModalSteps("step 1")
    }
    const handleStep1 = () => {
        setModalSteps("step 2")
    }
    const handlechangeJobObject = (e,name) => {
        setJobObject({...jobObject, [e.target.name]:e.target.value})
    }

    const handleJobPost = async () => {
        await axios.post(baseURL,jobObject).then((resp) => {console.log(resp);})

        setJobObject({
            jobTitle:'',
            companyName:'',
            industry:'',
            location:'',
            remoteType:'',
            expMinimum:'',
            expMaximum:'',
            salaryMinimum:'',
            employeeCount:'',
            applyType:''
        })

    }
 
    const contextData = {handleModalOpen, modalOpen, modalSteps,handleStep1, jobObject,handlechangeJobObject, handleJobPost}


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