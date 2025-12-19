import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import LanguageToggle from './LanguageToggle'

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="flex justify-end mb-4">
          <LanguageToggle />
        </div>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

