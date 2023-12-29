import React from 'react'
import Navbar from '../../components/Navbar'
import Modal from '../../components/modalDesign/Modal'
import { useModal } from '../../contexts/modalContext'
import Card from '../../components/Card'

const LandingPage = () => {
    const {modalOpen, jobs} = useModal()

  return (
    <>
    <div className="bg-CardBorder min-h-screen flex flex-col" style={{"width":"1900px"}}>
        <Navbar/>
        {modalOpen === false ? null : <Modal />}
        <div className='flex flex-wrap'>
            {
                jobs.map((job) => {
                    return <Card key={job.id} jobObject={job}/>
                })
            }   
        </div>
    </div>
    </>
  )
}

export default LandingPage