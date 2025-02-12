import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StarryBackground from './components/StarryBackground'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen relative">
        <Navbar />
        <div className="z-[20] relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <StarryBackground />
      </div>
    </Router>
  )
}

export default App
