import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StarryBackground from './components/StarryBackground'

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen relative">
        <div className="z-[20] relative">
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
