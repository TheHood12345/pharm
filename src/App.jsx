import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import P_Home from './pharm/p_home'
import Login from './pharm/login'
import Signup from './pharm/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<P_Home/>}/>
      <Route path='/sold' element={<h1>sold</h1>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App
