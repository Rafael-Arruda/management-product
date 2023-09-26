import React from "react"

import RoutesApp from "./routes";
import AuthProvider from "./contexts/auth";
import PaginationProvider from "./contexts/pagination";

import { BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    
      <ToastContainer autoClose={3000}/>

      <PaginationProvider>
        <AuthProvider>
          <RoutesApp/>
        </AuthProvider>
      </PaginationProvider>
    
    </BrowserRouter>
  )
}
export default App
