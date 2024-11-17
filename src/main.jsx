import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { store } from './services/redux/store.js'
import { MotionDetectProvider } from './context/MotionDetectProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
          <MotionDetectProvider>
          <App />
          </MotionDetectProvider>
        </Provider>
    </Router>
  </React.StrictMode>,
)
