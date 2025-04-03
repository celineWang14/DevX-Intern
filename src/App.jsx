import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Introduction from './components/Introduction'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Introduction />
    </div>
  )
}

export default App
