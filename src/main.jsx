import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import TicTacToe from './components/tictactoe/TicTacToe.jsx'
import FxHangman from './components/Hang/FxHangman.jsx'
import App from './components/Puzzle15/App.jsx'
import Quiz from './components/Quiz/Quiz.jsx'
import Touching from './components/Touching/Touching.jsx'

// import App from './components/Puzzle15/src/App.jsx'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='tictactoe' element={<TicTacToe/>}/>
      <Route path='Hang' element={<FxHangman/>}/>
      <Route path='Puzzle15' element={<App/>}/>
      <Route path='Quiz' element={<Quiz/>}/>
      <Route path='Touching' element={<Touching/>}/>


      <Route
        loader={githubInfoLoader}
       path='github'
        element={<Github/>}/>
        <Route path='game1' element={<game1/>}/>
    </Route> 

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
