import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// carrega os estilos globais da aplicação
import './index.css'
import App from './App.jsx'

// conecta a interface React ao elemento root definido no index.html
createRoot(document.getElementById('root')).render(
  // Ativa verificações extras durante o desenvolvimento
  <StrictMode>
    <App />
  </StrictMode>,
)
