import React from "react"

import RoutesApp from "./routes"
import AuthProvider from "./contexts/auth";
import UserProvider from "./contexts/user";

import { BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    
      <ToastContainer autoClose={3000}/>

      <UserProvider>
        <AuthProvider>
          <RoutesApp/>
        </AuthProvider>
      </UserProvider>
    
    </BrowserRouter>
  )
}

export default App
