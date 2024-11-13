import './App.css'
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen'
import { Message } from '../../types/message';

function App() {
  const [loginData, setLoginData] = useState<Message | null>(null)
  const [messagesList, setMessagesList] = useState<Message[] | null>(null)
  const isUserAuth = !!loginData;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={isUserAuth ? <Navigate to={AppRoute.Main}/> : <LoginScreen setLoginData={setLoginData} setMessagesList={setMessagesList}/>}
            />
          <Route
            path={AppRoute.Main}
            element={!isUserAuth ? <Navigate to={AppRoute.Login}/> : <MainScreen loginData={loginData} messagesList={messagesList} setMessagesList={setMessagesList}/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
