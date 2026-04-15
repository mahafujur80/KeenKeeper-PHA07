import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Routers/Router.jsx';
import FriendProviderContext from './Context/FriendProviderContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProviderContext>
  <RouterProvider router={router} ></RouterProvider>
    </FriendProviderContext>
    <ToastContainer
    position="top-center"
    autoClose={3000} 
    />
  </StrictMode>,
)
