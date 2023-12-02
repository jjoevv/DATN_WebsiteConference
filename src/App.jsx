import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'

import RoutesApp from './routes/RoutesApp'
import MyRouter from './routes/Router'
import MainLayout from './layout/MainLayout'
function App() {
  
  return (
        <BrowserRouter>
            <AuthContextProvider>
              <MainLayout/>
              <RoutesApp/>
          </AuthContextProvider>
        </BrowserRouter>
  )
}

export default App
