import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Conteact from './Components/Conteact.jsx';
import About from './Components/About.jsx';
import Contex from './Components/Contex/Contex.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "Login",
        element: <Login></Login>
      },

      {
        path: "Register",
        element: <Register></Register>
      },
      {
        path: "Contact",
        element: <Conteact></Conteact>
      },
      {
        path: "About",
        element: <About></About>
      },

    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Contex>
      <RouterProvider router={router}></RouterProvider>
    </Contex>

  </React.StrictMode>,
)
