
import React from 'react'
import Container from './coreComponents/Container'
import Button from './coreComponents/Button'
import { useModal } from '../contexts/modalContext'

const Navbar = () => {
    const {handleModalOpen} = useModal()

  return (
    <>
        <Container containerClasses={"container max-w-screen-2xl bg-White flex items-center"} containerStyles={{"height":"10vh"}}>
            <Button type={"button"} handleClick={handleModalOpen} style={{"height": "75%", "width":"15%","gap":"5px"}}>
                <span className='text-White font-poppins font-semibold'>Create Job</span>
            </Button>
        </Container>
    </>
  )
}

export default Navbar