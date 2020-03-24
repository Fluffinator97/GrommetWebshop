import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import ErrorBoundary from './ErrorBoundary'
import './index.css'

ReactDOM.render(
    (<BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>)
    , document.getElementById('root'))

