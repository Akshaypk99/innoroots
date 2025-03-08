import React from 'react'
import Layout from './Layout'
import { HashRouter  as Router, Route, Routes } from 'react-router-dom'

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
