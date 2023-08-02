import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import LoginPage from './pages/login/login.pages.jsx'
import SigninPages from './pages/signin/signin.pages.jsx'

import 'bootstrap'
import './index.less'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signin",
    element: <SigninPages />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
)
