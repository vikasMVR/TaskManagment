import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import PageNotFound from './routes/pagenotfound'
import Homepage from './routes/homepage'
import Register from './routes/register'
import Login from './routes/login'
import { UserAuthContextProvider } from './context/userAuthContext'
import { useUserAuth } from './context/userAuthContext'
import UserProfile from './routes/profile'
import { Navigate } from 'react-router-dom'
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
      <UserAuthContextProvider>
        <RouterProvider router={router} />
      </UserAuthContextProvider>
    </div>
  )
}

export function ProtectedRoute({ children }) {
  const {user} = useUserAuth();  
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}