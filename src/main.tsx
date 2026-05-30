import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './app/index.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='sf-frontend'>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
)
