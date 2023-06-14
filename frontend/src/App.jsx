import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import SignupPage from "./pages/signuppage/SignupPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
