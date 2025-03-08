import React from 'react'
import Home from './pages/Home/Home'
import Layout from './Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
          <Routes >
            <Route path="/*" element={<Layout/>}/>
          </Routes >
      </Router>
    </div>
  )
}

export default App
