
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/home' element={<UserProtectWrapper>
          <Home/>
          </UserProtectWrapper>} />

          
      <Route path='/user/logout' element={<UserProtectWrapper>
        <UserLogout/>
      </UserProtectWrapper>}
      />



    <Route path='/captain-home' element={
      <CaptainProtectWrapper>
        <CaptainHome/>
      </CaptainProtectWrapper>
    }/>

      </Routes>
    </div>
  )
}

export default App
