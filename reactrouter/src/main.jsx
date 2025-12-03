import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './componrnts/Home/Home.jsx'
// import About from './componrnts/About/About.jsx'
import { Contact , Home, About, User, Github} from './componrnts/index.js'

// createBrowserRouter is a method contains an array of obj

// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       // path: '',
//       index: true,
//       element: <Home />
//     },{
//       path: 'about',
//       element: <About />
//     },{
//       path: 'contact',
//       element: <Contact />
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='/github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* component - takes a prop */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
