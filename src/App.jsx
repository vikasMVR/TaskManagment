import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"


import SpinnerElement from './components/spinner'
import DashboardLayout from './routes/dashboardLayout'
import PageNotFound from './routes/pagenotfound'
import HomeRoute from './routes/home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomeRoute/>} />
      <Route element={<DashboardLayout />} >
        <Route path="dashboard" element={<HomeRoute />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<SpinnerElement />} />
    </div>
  )
}

export default App
