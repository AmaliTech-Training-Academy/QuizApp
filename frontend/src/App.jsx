import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import { AvailableQuizzes } from './pages/AvailableQuizzes';
import { QuizLog } from "./pages/QuizLog";
import { SearchPage } from './pages/SearchPage';
import { FilterPage } from './pages/FilterPage';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<AvailableQuizzes/>}/>
          <Route path="/quizlog" element={<QuizLog/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/filter" element={<FilterPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
