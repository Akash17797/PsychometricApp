import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About Us/About.jsx'
import Home from './Components/Home/Home.jsx'
import Mission from './Components/About Us/Mission/Mission.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Vision from './Components/About Us/Vision/Vision.jsx'



// const router = createBrowserRouter([           
// {
//   path : './',         
//   element: <Layout/>,
//   children: [      
//     {
//       path : "",
//       element : <Home/>
//     }, 
//     {
//       path : "about",
//       element : <About/>,
//       children: [
//         {
//           path : "vision",
//         element : <Vision/>
//         },
//         {
//           path : "mission",
//         element : <Mission/>
//         }
//       ]
//     }, 
//     {
//       path : "contact",
//     element : <Contact/>
//   }
//   ]
// }
 
// ])
  


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}> </Route>
        <Route path='/about/vision' element={<Vision/>}/>
        <Route path='/about/mission' element={<Mission/>}/>
      
      
      <Route path='/contact' element={<Contact/>}/>
               
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router ={router} />   
   
  </React.StrictMode>,
)