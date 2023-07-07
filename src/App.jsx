import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import './App.css'
import { AvailableQuizzes } from './pages/AvailableQuizzes'
import { QuizLog } from "./pages/QuizLog"
import { SearchPage } from './pages/SearchPage'
import { FilterPage } from './pages/FilterPage'
import SignupPage from './pages/signuppage/SignupPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<AvailableQuizzes/>}/>
          <Route path="/quizlog" element={<QuizLog/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/filter" element={<FilterPage/>}/>
          <Route path="signup" element={<SignupPage />} />
          <Route path='login' element={<LoginPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path="forgetpassword" element={<ForgetPassword/>}/>
          <Route path='resetPassword/:id' element={<ResetPassword/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App;
