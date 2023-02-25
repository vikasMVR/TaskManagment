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
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={< Homepage/>} />
      <Route path='/dashboard' exact element={<DashboardLayout />}>
        <Route  index element={<DashboardHome />} />
        <Route path='tasks' element={<Tasks />} />
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
