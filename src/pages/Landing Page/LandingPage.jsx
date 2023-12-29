import React from 'react'
import Navbar from '../../components/Navbar'
import Modal from '../../components/modalDesign/Modal'
import { useModal } from '../../contexts/modalContext'
import Container from '../../components/coreComponents/Container'

const LandingPage = () => {
    const {modalOpen} = useModal()

  return (
    <>
    <Container containerClasses={"container max-w-screen-2xl bg-Primary min-h-screen flex flex-col"}>
        <Navbar/>
        {modalOpen === false ? null : <Modal />}
    </Container>
    </>
  )
}

export default LandingPage