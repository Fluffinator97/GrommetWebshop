import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import ErrorBoundary from './ErrorBoundary'

ReactDOM.render(
    (<BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>)
    , document.getElementById('root'))

