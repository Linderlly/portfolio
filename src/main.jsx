/**
 * Ponto de entrada da aplicação React
 * Configura o StrictMode e envolve a aplicação com o ThemeProvider
 * 
 * @author Linderlly Santana
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

/**
 * Renderiza a aplicação no elemento root do HTML
 * O ThemeProvider disponibiliza o tema para todos os componentes
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)