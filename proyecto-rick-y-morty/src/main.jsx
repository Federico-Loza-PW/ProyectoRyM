import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterSite from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterSite />
  </StrictMode>,
)

