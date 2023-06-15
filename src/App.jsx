import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ForgetPassword from './pages/ForgetPassword'
import './App.css'
import SignupPage from "./pages/signuppage/SignupPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="forgetpassword" element={<ForgetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
