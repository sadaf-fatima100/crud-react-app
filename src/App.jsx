import React from 'react'
import Create from './components/Create'
import { BrowserRouter, Routes, Route } from "react-router";
import Read from './components/Read'
import Update from './components/Update';

const App = () => {
  return (
    

    <BrowserRouter>
    <Routes>
      <Route path="/crud-react-app" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
