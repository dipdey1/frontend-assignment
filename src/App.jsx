import { ModalProvider } from './contexts/ModalContext'
import LandingPage from './pages/Landing Page/LandingPage'

function App() {


  return (
    <ModalProvider>
      <LandingPage/>
    </ModalProvider>
  )
}

export default App
