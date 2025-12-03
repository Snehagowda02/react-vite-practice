import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { About, Home } from "./componrnts";
import { Router } from "express";


// const router = createBrowserRouter([{
//     path:"/",
//     element: <Layout />,
//     children: [{
//         path: "",
//         element: <Home />
//     }, {
//         path: "/about",
//         element: <About />
//     }]
// }
// ])

// method 2
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element= {<About />} />

        </Route>
    )
)



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)