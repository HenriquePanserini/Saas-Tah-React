import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import './less/mixins.less'

import 'bootstrap'
import './index.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
