import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home'; // Import Home component
import Login from './pages/Login'; // Import Login component
import Error from './pages/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import routing utilities

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      error: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/error",
          element: <Error />
        },
      ]
  }
]);
// Render the application using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // Provide the router to the application using RouterProvider
)
