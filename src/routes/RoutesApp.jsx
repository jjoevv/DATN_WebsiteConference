import React from 'react'
import {Routes, Route, Router, useLocation} from 'react-router-dom'

import { RequireAuth } from '../context/RequireAuth'

import Homepage from '../pages/public/Homepage'
import Login from '../pages/public/Login'
import Signup from '../pages/public/Signup'
import ConfDetail from '../pages/public/ConfDetail'

import ErrorPage from '../pages/ErrorPage'


import Account from '../pages/auth/Account'
import Followed from '../pages/auth/Followed'
import YourConf from '../pages/auth/YourConf'
import Timestamp from '../pages/auth/Timestamp'
import Notifications from '../pages/auth/Notifications'
import { AuthLayout } from '../layout/AuthLayout'

const authPage = [
  {path: 'account', element: <Account/>},
  {path: 'followed', element: <Followed/>},
  {path: 'yourconferences', element: <YourConf/>},
  {path: 'timestamp', element: <Timestamp/>},
  {path: 'notifications', element: <Notifications/>},
]
const RoutesApp = () => {
  return (
      <Routes>
          <Route index element={<Homepage />} />
      
          <Route path="home" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="detail/:id" element={<ConfDetail />} />


          <Route element={<AuthLayout/>}>
            {
              authPage.map(page=>
                <Route
                  key={page.path}
                  path={page.path}
                  element={page.element}
                />)
            }
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

export default RoutesApp