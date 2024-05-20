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
import Drug from './Components/Drug/Drug.jsx'
import Counselling from './Components/Counselling/Counselling.jsx'
import EducationCounselling from './Components/Counselling/EducationCounselling.jsx'
import CareerCounselling from './Components/Counselling/CareerCounselling.jsx'
import PsychologicalCounselling from './Components/Counselling/PsychologicalCounselling.jsx'
import BehavioralCounselling from './Components/Counselling/BehavioralCounselling.jsx'
import MaritalCounselling from './Components/Counselling/MaritalCounselling.jsx'
import PersonalityDev from './Components/Personality/PersonalityDev.jsx'
import Coach_Mentor from './Components/Personality/Coach_Mentor.jsx'
import Psychometric from './Components/Psychometric/Psychometric.jsx'
import SignUp from './Components/Login/SignUp.jsx'
import LogIn from './Components/Login/LogIn.jsx'


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
      <Route path='/about' element={<About/>}/>
        <Route path='/about/vision' element={<Vision/>}/>
        <Route path='/about/mission' element={<Mission/>}/>

      <Route path='/counselling' element={<Counselling/>}/>
        <Route path='/counselling/educational_counselling' element={<EducationCounselling/>}/>
        <Route path='/counselling/Career_Counselling' element={<CareerCounselling/>}/>
        <Route path='/counselling/Psychological_Counselling' element={<PsychologicalCounselling/>}/>
        <Route path='/counselling/Behavioral_Counselling' element={<BehavioralCounselling/>}/>
        <Route path='/counselling/Marital_Counselling' element={<MaritalCounselling/>}/>

      <Route path='/Personality_Development' element={<PersonalityDev/>}/>
        <Route path='/Personality_Development/Coaching_&_Mentoring' element={<Coach_Mentor/>}/>  

      <Route path='/psychometric_testing' element={<Psychometric/>}/>  

      <Route path='/drug_abuse' element={<Drug/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<LogIn/>} />
               
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router ={router} />   
   
  </React.StrictMode>,
)