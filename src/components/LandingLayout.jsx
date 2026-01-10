import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const LandingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header without sidebar functionality */}
      <Header onMenuClick={() => {}} />
      
      {/* Full Width Content - No Sidebar */}
      <main className="flex-1 w-full flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default LandingLayout
