import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalContext = React.createContext(null)

export const ModalProvider = (props) => {
    const baseURL = "https://658a7e53ba789a9622372a43.mockapi.io/api/v1/jobDescription"
    const [modalOpen, setOpenModal] = useState(false)
    const [modalSteps, setModalSteps] = useState("")
    const [editStatus, setEditStatus] = useState(false)
    const [error, setError] = useState('')
    const [jobObject, setJobObject] = useState({
        id:'',
        jobTitle:'',
        companyName:'',
        industry:'',
        location:'',
        remoteType:'',
        expMinimum:'',
        expMaximum:'',
        salaryMinimum:'',
        salaryMaximum:'',
        employeeCount:'',
        applyType:''
    })
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getJobsOnLoad()
        console.log(jobs);
    },[])

    const getJobsOnLoad = async () => {
        let response = await axios.get(baseURL)
        setJobs(response.data);
    }

    const toggleModal = (e) => {
        setJobObject({
            id:'',
            jobTitle:'',
            companyName:'',
            industry:'',
            location:'',
            remoteType:'',
            expMinimum:'',
            expMaximum:'',
            salaryMinimum:'',
            salaryMaximum:'',
            employeeCount:'',
            applyType:''
        })
        setOpenModal(false)
        setModalSteps('')
        setEditStatus(false)
        setError('')
    }

    const handleModalOpen = () => {
        setOpenModal(true)
        setModalSteps("step 1")
    }
    const handleStep1 = () => {
        if(jobObject.jobTitle === '' || jobObject.companyName === '' || jobObject.industry === ''){
            setError('Mandatory Fields Cannot Be Empty!!')
        }else{
            setError('')
            setModalSteps("step 2")
        }
    }
    const handlechangeJobObject = (e,name) => {
        setJobObject({...jobObject, [e.target.name]:e.target.value})
    }

    const handleJobPost = async () => {
        if(jobObject.applyType === ''){
            setError('Please select an application type!')
        }else{
        setError('')
        let response = await axios.post(baseURL,jobObject)
        setJobs(prev => [...prev, response.data])
        setJobObject({
            jobTitle:'',
            companyName:'',
            industry:'',
            location:'',
            remoteType:'',
            expMinimum:'',
            expMaximum:'',
            salaryMinimum:'',
            salaryMaximum:'',
            employeeCount:'',
            applyType:''
        })
        setOpenModal(false)
        } 
    }

    const handlePostEdit = async (id) => {
        let response = await axios.get(`https://658a7e53ba789a9622372a43.mockapi.io/api/v1/jobDescription/${id}`)
        setJobObject(response.data)
        setModalSteps('step 1')
        setOpenModal(true)
        setEditStatus(true)
    }
    const handleUpdatePostEdit = async () => {
        await axios.put(`https://658a7e53ba789a9622372a43.mockapi.io/api/v1/jobDescription/${jobObject.id}`, jobObject)
        let response = await axios.get(baseURL)
        setJobs(response.data)
        setJobObject({
            id:'',
            jobTitle:'',
            companyName:'',
            industry:'',
            location:'',
            remoteType:'',
            expMinimum:'',
            expMaximum:'',
            salaryMinimum:'',
            salaryMaximum:'',
            employeeCount:'',
            applyType:''
        })
        setModalSteps('')
        setOpenModal(false)
        setEditStatus(false)
    }

    const handleJobDelete = async (id) => {
        await axios.delete(`https://658a7e53ba789a9622372a43.mockapi.io/api/v1/jobDescription/${id}`)
        let response = await axios.get(baseURL)
        setJobs(response.data)
    }

    const contextData = {handleModalOpen, modalOpen, modalSteps,handleStep1, jobObject,handlechangeJobObject, handleJobPost, jobs,handlePostEdit, editStatus, handleUpdatePostEdit, handleJobDelete, error, toggleModal}


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