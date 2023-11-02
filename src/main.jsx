import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Projects from './pages/Projects'
// import Projects from './pages/Projects'

const router = createBrowserRouter([
  { path: "/",
    element: <App />
  },
  { path: "/projects",
    element: <Projects />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
