import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import './App.css'
import { AvailableQuizzes } from './pages/AvailableQuizzes'
import { QuizLog } from './pages/QuizLog'
import { SearchPage } from './pages/SearchPage'
import { FilterPage } from './pages/FilterPage'
import SignupPage from './pages/signuppage/SignupPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { QuizIntro } from './pages/QuizIntro';
// import { Questions } from './pages/QuestionsPage';

import AccountSettings from './pages/AccountSettings'
import GeneralSettings from './pages/GeneralSettings'
import PasswordSettings from './pages/PasswordSettings'
import MyQuizzes from './pages/MyQuizzes'
import { Test } from './pages/Test'
import { QuestionsPage2 } from './pages/QuestionsPage2'
// import { ReviewResultsPage } from './pages/ReviewResultsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<AvailableQuizzes />} />
          <Route path="/quizlog" element={<QuizLog />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path='login' element={<LoginPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='/quiz/:id' element={<QuizIntro/>}/>
          <Route path='/quiz/:id/questions' element={<QuestionsPage2/>}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/account-settings' element={<AccountSettings/>}/>
          <Route path='/general-settings' element={<GeneralSettings/>}/>
          <Route path='/password-settings' element={<PasswordSettings/>}/>
          <Route path='/my-quizzes' element={<MyQuizzes/>}/>
          <Route path="forgetpassword" element={<ForgetPassword/>}/>
          <Route path='resetPassword/:id' element={<ResetPassword/>}/>
          <Route path='/results' element={<Test/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
