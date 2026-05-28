import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css' // सिर्फ इसे रहने दो, क्योंकि सारा Tailwind का माल इसी में है
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
