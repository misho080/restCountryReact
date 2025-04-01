import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Africa from './pages/Africa.tsx'
import America from './pages/America.tsx'
import Asia from './pages/Asia.tsx'
import Europe from './pages/Europe.tsx'
import Oceania from './pages/Oceania.tsx'
import CountryDetails from './pages/CountryDetails.tsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/CountryDedails",
        element:<CountryDetails/>
    },
    {
        path:"/africa",
        element:<Africa/>
    },
    {
        path:"/america",
        element:<America/>
    },
    {
        path:"/asia",
        element:<Asia/>
    },
    {
        path:"/europe",
        element:<Europe/>
    },
    {
        path:"/oceania",
        element:<Oceania/>
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
