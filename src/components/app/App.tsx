import './App.css'
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen.tsx/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen'

function App() {
  const [loginData, setLoginData] = useState({email: '', userName: ''})
  const isUserAuth = loginData.email !== '' && loginData.userName !== '';

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={isUserAuth ? <Navigate to={AppRoute.Main}/> : <LoginScreen setLoginData={setLoginData}/>}
            />
          <Route
            path={AppRoute.Main}
            element={!isUserAuth ? <Navigate to={AppRoute.Login}/> : <MainScreen loginData={loginData}/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
