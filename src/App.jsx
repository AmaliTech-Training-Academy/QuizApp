import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LandingPage from './pages/LandingPage'
import ForgetPassword from './pages/ForgetPassword'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
