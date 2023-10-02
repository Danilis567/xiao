import './App.css'
import Arsiv from './Arsiv'
import Home from './Home'
import Navbar from './Navbar'

import { Routes, NavLink, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/xiao-page' element={<Home />} />
        <Route path='/dowland' element={<Arsiv />} />
      </Routes>


      <Navbar />
    </>
  )
}

export default App
