import React from 'react'
import {
  createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider
} from "react-router-dom"
import { useAuthState } from './myhooks/useAuthState'
import Homepage from './routes/homepage'
import Login from './user_management/login'
import PageNotFound from './routes/pagenotfound'
import UserProfile from './user_management/profile'
import Register from './user_management/register'

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
  const [user,,,] = useAuthState();
  if (!user) {
    return <Navigate replace={true} to="/login" />;
  }
  return children;
}