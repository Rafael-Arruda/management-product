import React from "react";

import AuthProvider from "./contexts/auth";
import PaginationProvider from "./contexts/pagination";
import RoutesApp from "./routes";

import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Boundary from "./pages/ErrorPage/Boundary";

function App() {
  return (
    <BrowserRouter>
      <Boundary>
        <ToastContainer autoClose={3000} />

        <PaginationProvider>
          <AuthProvider>
            <RoutesApp />
          </AuthProvider>
        </PaginationProvider>
      </Boundary>
    </BrowserRouter>
  )
}
export default App
