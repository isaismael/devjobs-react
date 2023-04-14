import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { JobDetails } from './components/JobDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
