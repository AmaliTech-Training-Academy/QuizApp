import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <ToastContainer theme='light'/>
      </BrowserRouter>
    </>
  )
}

export default App;