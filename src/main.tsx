import React from 'react'
import ReactDOM from 'react-dom/client'
import { iconRegister } from '@/components/Icons'
import { iconfontId } from '@/config'
import App from './App'

iconRegister(iconfontId)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
