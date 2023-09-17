import React from "react"

import RoutesApp from "./routes"
import AuthProvider from "./contexts/auth";
import UserProvider from "./contexts/user";

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <UserProvider>
        <AuthProvider>
          <RoutesApp/>
        </AuthProvider>
      </UserProvider>
    
    </BrowserRouter>
  )
}

export default App
