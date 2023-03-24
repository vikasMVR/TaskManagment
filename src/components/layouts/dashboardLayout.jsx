import { Outlet } from 'react-router-dom'
export default function DashboardLayout() {
  return (
    <div className=' h-screen  overflow-hidden'>
      <div className="h-full flex ">
        {/* main context */}
        <div className="h-full w-full">          
          <Outlet />
        </div>
      </div>
    </div>
  )
}

