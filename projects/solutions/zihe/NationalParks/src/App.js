import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './routes/LandingPage';
import HomePage from './routes/HomePage';
import ListPage from './routes/ListPage';
import DetailPage from './routes/DetailPage';
const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'ListPage',
        element: <ListPage />,
      },
      {
        path: 'ListPage/DetailPage',
        element: <DetailPage />
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;