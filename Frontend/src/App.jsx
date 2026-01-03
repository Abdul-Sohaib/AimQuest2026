import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
import Sponcers from './components/Sponcers'
import Team from './components/Team'
import EventDetailsPage from './components/EventDetailsModal'


function App() {

  return (
      <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Herosection/>
            <About/>
            <Sponcers/>
            <Events/>
            <Team/>
            <Footer/>
          </>
        } />
        <Route path="/event/:eventId" element={<EventDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
