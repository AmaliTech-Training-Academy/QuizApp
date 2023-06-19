import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ForgetPassword from './pages/ForgetPassword'
import './App.css'
import SignupPage from "./pages/signuppage/SignupPage";
import { ToastContainer } from 'react-toastify';
import ResetPassword from './pages/ResetPassword';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="forgetpassword" element={<ForgetPassword/>}/>
          <Route path='resetPassword' element={<ResetPassword/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App;
