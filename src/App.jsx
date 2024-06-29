import React from 'react'
import Details from './Components/Details';
import LoginForm from './Components/Authentication/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

