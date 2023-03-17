import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </ParallaxProvider>

)
