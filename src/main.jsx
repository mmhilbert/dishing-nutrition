import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'

import Home from './pages/Home';
import Blog from './pages/Blog.jsx'
import Recipes from './pages/Recipes.jsx'
import About from './pages/About.jsx'
import WorkWithMe from './pages/WorkWithMe.jsx'
import PatientPortal from './pages/PatientPortal.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/recipes',
        element: <Recipes />
      }, 
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/work-with-me',
        element: <WorkWithMe />
      },
      {
        path: '/patient-portal',
        element: <PatientPortal />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
