import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StarryBackground from './components/StarryBackground'

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen">
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <StarryBackground />
      </div>
    </Router>
  )
}

export default App
