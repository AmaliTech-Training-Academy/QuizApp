import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import { AvailableQuizzes } from './pages/AvailableQuizzes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<AvailableQuizzes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
