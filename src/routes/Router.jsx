import { Suspense, lazy } from "react";// use to loading , loading screen until full page is load
import {Routes, Route, Router, useLocation, useRoutes, Navigate} from 'react-router-dom'

import { RequireAuth } from '../context/RequireAuth'

import MainLayout from '../layout/MainLayout'
import { AuthLayout } from '../layout/AuthLayout'

import ErrorPage from '../pages/ErrorPage'



const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<></>}> 
      <Component {...props} />
    </Suspense>
  );
};

export default function RoutesApp() {
  return useRoutes([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      
      {element: <Homepage/>, path:'home'},
      {element: <Login/>, path:'login'},
      {element: <Signup/>, path:'signup'},
      {element: <ConfDetail/>, path:'detail/:id'},
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { element: <Navigate to='/'replace />, index: true },

      { path: "account/:id", element: <Account /> },
      { path: "followed", element: <Followed /> },
      { path: "error", element: <ErrorPage /> },
      { path: "*", element: <Navigate to="/error" replace /> },
    ],
  },
  { path: "*", element: <Navigate to="/error" replace /> },
]);
}


const Homepage = Loadable(
  lazy(() => import("../pages/public/Homepage")),
);

const ConfDetail = Loadable(
  lazy(() => import("../pages/public/ConfDetail")),
);

const Login = Loadable(
  lazy(() => import("../pages/public/Login")),
);
const Signup = Loadable(
  lazy(() => import("../pages/public/Signup")),
);



const Account = Loadable(
  lazy(() => import("../pages/auth/Account")),
);

const Followed = Loadable(
  lazy(() => import("../pages/auth/Followed")),
);

const YourConf = Loadable(
  lazy(() => import("../pages/auth/YourConf")),
);


const Timestamp = Loadable(
  lazy(() => import("../pages/auth/Timestamp")),
);


const Notifications = Loadable(
  lazy(() => import("../pages/auth/Notifications")),
);

