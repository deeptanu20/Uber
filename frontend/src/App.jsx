
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
      </Routes>
    </div>
  )
}

export default App
