import React from 'react'
import Container from '../../coreComponents/Container'
import DialogInput from '../../coreComponents/DialogInput'
import Button from '../../coreComponents/Button'
import RadioInputs from '../../coreComponents/RadioInputs'
import { useModal } from '../../../contexts/modalContext'

const FormStep2 = () => {

  const {handleStep1, jobObject, handlechangeJobObject} = useModal()

  return (
    <Container containerClasses='fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center'>
      <div className='bg-white rounded-[10px] border-[1px] border-solid border-CardBorder flex flex-col justify-between' style={{"height" : "577px", "width":"564px", "padding":"32px"}}>
        <div className='flex flex-col' style={{"height": "368px","gap":"24px"}}>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-poppins font-medium'>Create a Job</span>
            <span className='text-m font-poppins font-medium'>Step 2</span>
          </div>
          <div className='flex' style={{"gap":"24px"}}>
            <div style={{"flex":"1"}}>
              <DialogInput type={"number"} title={"Experience"} name={"expMinimum"} value={jobObject.expMinimum} handleChange={handlechangeJobObject} placeholderName={"Minimum"}/>
            </div>
            <div style={{"flex":"1"}}>
              <DialogInput type={"number"} title={""} name={"expMaximum"} value={jobObject.expMaximum} handleChange={handlechangeJobObject} placeholderName={"Maximum"}/>
            </div>
          </div>
          <div className='flex' style={{"gap":"24px"}}>
            <div style={{"flex":"1"}}>
              <DialogInput type={"number"} title={"Salary"} name={"salaryMinimum"} value={jobObject.salaryMinimum} handleChange={handlechangeJobObject} placeholderName={"Minimum"}/>
            </div>
            <div style={{"flex":"1"}}>
              <DialogInput type={"number"} title={""} name={"salaryMaximum"} value={jobObject.salaryMaximum} handleChange={handlechangeJobObject} placeholderName={"Maximum"}/>
            </div>
          </div>
          <DialogInput type={"number"} title={"Total Employees"} name={"employeeCount"} value={jobObject.employeeCount} handleChange={handlechangeJobObject} placeholderName={"ex. 100"}/>
          <RadioInputs title={"Apply Type"} name={"applyType"} handleClick={handlechangeJobObject} optionsObject={[{"name": "quickApply", "title":"Quick Apply"}, {"name": "extApply", "title":"External Apply"}]}/>
        </div>
        <div style={{"height": "40px","gap":"24px", "display":"flex", "justifyContent":"flex-end"}}>
          <Button type={"button"} style={{"width":"68px"}}>
            <span className='text-White font-poppins font-semibold'>Save</span>          
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default FormStep2