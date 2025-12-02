import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './componrnts/Home/Home.jsx'
// import About from './componrnts/About/About.jsx'
import { Contact , Home, About} from './componrnts/index.js'

// createBrowserRouter is a method contains an array of obj

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home />
    },{
      path: 'about',
      element: <About />
    },{
      path: 'contact',
      element: <Contact />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* component - takes a prop */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
