import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { run } from './server'

if(import.meta.env.DEV){
  run();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
