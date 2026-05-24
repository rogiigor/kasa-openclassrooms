import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />  
    </Router>
  </StrictMode>,
)
