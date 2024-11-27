import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './Components/AboutUs'




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
    },
    {
      path: '/about',
      element:
        <>
          <Navbar />
          <AboutUs />
          <Footer />
        </>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
