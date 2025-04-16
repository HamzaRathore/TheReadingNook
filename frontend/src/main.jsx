import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css';
import router from './routers/router';  // Import your custom router
import { Suspense } from 'react';
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </Suspense>
   </React.StrictMode>
);