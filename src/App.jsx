import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import SpinnerElement from './components/spinner'
import PageNotFound from './routes/pagenotfound'
import DashboardLayout from './routes/dashboardLayout'
import Tasks from './routes/taskspage/tasks'
import DashboardHome from './routes/dashboardhome/home'
import Homepage from './routes/homepage'
import { Register } from './routes/register'
import { Login } from './routes/login'
import { UserAuthContextProvider } from './content/userAuthContext'
import ProtectedRoute from './routes/protectedroute'
import UserProfile from './routes/userprofile/profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={< Homepage />} />
      <Route  element={<DashboardLayout />}>
        <Route path='/dashboard' element={<ProtectedRoute><DashboardHome/></ProtectedRoute>} />
        <Route path='/tasks' element={<ProtectedRoute><Tasks/></ProtectedRoute>} />
      </Route>
      <Route path='/profile' exact element={<ProtectedRoute><UserProfile/></ProtectedRoute>} />
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
        <RouterProvider router={router} fallbackElement={<SpinnerElement />} />
      </UserAuthContextProvider>
    </div>
  )
}