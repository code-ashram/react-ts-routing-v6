import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { loader as rootLoader } from './routes/Root.tsx'
import { loader as postLoader } from './routes/PostDetails.tsx'

import Root from './routes/Root.tsx'
import PostDetails from './routes/PostDetails.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: 'posts/:postId',
    element: <PostDetails />,
    errorElement: <ErrorPage />,
    loader: postLoader,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
