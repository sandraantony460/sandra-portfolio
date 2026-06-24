import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Certification from './pages/Certification'
import Synthesia from './pages/Synthesia'
import AIPrototype from './pages/AIPrototype'
import SampleVideo from './pages/SampleVideo'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/synthesia" element={<Synthesia />} />
          <Route path="/ai-prototype" element={<AIPrototype />} />
          <Route path="/sample-video" element={<SampleVideo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
