import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import './App.css'
import SignupPage from "./pages/signuppage/SignupPage";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="forgetpassword" element={<ForgetPassword/>}/>
          <Route path='resetPassword/:id' element={<ResetPassword/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App;
