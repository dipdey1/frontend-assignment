import './App.css'
import { ModalProvider } from './contexts/modalContext'
import LandingPage from './pages/Landing Page/LandingPage'

function App() {


  return (
    <ModalProvider>
      <LandingPage/>
    </ModalProvider>
  )
}

export default App
