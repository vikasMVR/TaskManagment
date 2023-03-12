import React from 'react'
import {
  createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider
} from "react-router-dom"
import { useAuthState } from './myhooks/useAuthState'
import Homepage from './routes/homepage'
import Login from './routes/login'
import PageNotFound from './routes/pagenotfound'
import UserProfile from './routes/profile'
import Register from './routes/register'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={< Homepage />} />
      <Route path='/profile' exact element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </>
  )
)

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export function ProtectedRoute({ children }) {
  const [user] = useAuthState();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}