import React from 'react'
import Container from '../../coreComponents/Container'
import DialogInput from '../../coreComponents/DialogInput'
import Button from '../../coreComponents/Button'
import { useModal } from '../../../contexts/modalContext'

const FormStep1 = () => {
  const {handleStep1, jobObject, handlechangeJobObject} = useModal()
 
  return (
    <Container containerClasses='fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center'>
      <div className='bg-white rounded-[10px] border-[1px] border-solid border-CardBorder flex flex-col justify-between' style={{"height" : "577px", "width":"564px", "padding":"32px"}}>
        <div className='flex flex-col' style={{"height": "368px","gap":"24px"}}>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-poppins font-medium'>Create a Job</span>
            <span className='text-m font-poppins font-medium'>Step 1</span>
          </div>
          <DialogInput type={"text"} title={"Job Title"} name={"jobTitle"} value={jobObject.jobTitle} handleChange={handlechangeJobObject} required={true} placeholderName={"ex. UX UI Designer"}/>
          <DialogInput type={"text"} title={"Company Name"} name={"companyName"} value={jobObject.companyName} handleChange={handlechangeJobObject} required={true} placeholderName={"ex. Google"}/>
          <DialogInput type={"text"} title={"Industry"} name={"industry"} value={jobObject.industry} handleChange={handlechangeJobObject} required={true} placeholderName={"ex. Information Technology"}/>
          <div className='flex' style={{"gap":"24px"}}>
            <div style={{"flex":"1"}}>
              <DialogInput type={"text"} title={"Location"} name={"location"} value={jobObject.location} handleChange={handlechangeJobObject} required={true} placeholderName={"ex. Chennai"}/>
            </div>
            <div style={{"flex":"1"}}>
              <DialogInput type={"text"} title={"Remote Type"} name={"remoteType"} value={jobObject.remoteType} handleChange={handlechangeJobObject} required={true} placeholderName={"ex. In-Office"}/>
            </div>
          </div>
        </div>
        <div style={{"height": "40px","gap":"24px", "display":"flex", "justifyContent":"flex-end"}}>
          <Button type={"button"} style={{"width":"68px"}} handleClick={handleStep1}>
            <span className='text-White font-poppins font-semibold'>Next</span>          
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default FormStep1