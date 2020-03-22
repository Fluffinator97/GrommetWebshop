import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter} from "react-router-dom"
import ErrorBoundary from './ErrorBoundary'
import { ProductProvider } from './context/cartContext'

ReactDOM.render(
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>,
    document.getElementById("root")
  );
  
