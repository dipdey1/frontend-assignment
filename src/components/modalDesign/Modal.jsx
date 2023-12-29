import React from 'react'
import { useModal } from '../../contexts/ModalContext'
import FormStep1 from './modalComponents/FormStep1'
import FormStep2 from './modalComponents/FormStep2'

const Modal = () => {
  const {modalSteps} = useModal()

  return (
    <>
    {(modalSteps === 'step 1') ? <FormStep1/>: <FormStep2/>}
      
    </>

  )
}

export default Modal