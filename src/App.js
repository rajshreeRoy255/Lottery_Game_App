import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GamePage from './components/Modal/GamePage';
const App = () => {


  return (
    //
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>


    </>
  )
}



export default App