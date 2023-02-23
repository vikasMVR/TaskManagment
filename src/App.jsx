import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import SpinnerElement from './components/spinner'
import PageNotFound from './routes/pagenotfound'
import HomeRoute from './routes/home'
import DashboardLayout from './routes/dashboardLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomeRoute />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        {/* <Route index element={< />} /> */}
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
