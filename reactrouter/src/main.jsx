import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './componrnts/Home/Home.jsx'
// import About from './componrnts/About/About.jsx'
import { Contact , Home, About, User, Github, githubInfoLoader} from './componrnts/index.js'

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
       {/* using loader , which loads data as soon mouse just hovers there near github
       can be used to make api and be ready with the data, so github page loads with any lag
       it calls api and ready with data, it also catches the data
      useLoaderData from react-router dom helps in getting data in github component
      Loads data much earlier then useEffect */}
      <Route 
      loader={githubInfoLoader}
      path='/github' 
      element={<Github />} 
      />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* component - takes a prop */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
