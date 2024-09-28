import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Quiz, Result } from './pages'

function App() {
  const [userAnswers, setUserAnswers] = useState([])
  
  return (
    <div className="App">
      <main>
        <Routes>
          <Route exact path='/' element={<Home setUserAnswers={setUserAnswers}/>}/>
          <Route exact path='/quiz' element={<Quiz setUserAnswers={setUserAnswers}/>}/>
          <Route exact path='/result' element={<Result userAnswers={userAnswers}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
