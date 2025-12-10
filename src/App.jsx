import React from 'react'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import MoneyUsage from './components/MoneyUsage'
import WhySupport from './components/WhySupport'
import Commitment from './components/Commitment'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <Comparison />
      <MoneyUsage />
      <WhySupport />
      <Commitment />
    </div>
  )
}

export default App

