import { Button } from './ui/button'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChefHat, Home, Heart, Info, Mail, Menu } from 'lucide-react'
import LanguageToggle from './LanguageToggle'

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Heart, label: 'Recipes', path: '/recipes' },
    { icon: Info, label: 'About', path: '/about' },
    { icon: Mail, label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Menu Button */}
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Menu Button - Opens Sidebar */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-orange-50"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>

            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-md">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-gray-900 leading-tight">
                  Chiran's Kitchen
                </h1>
                <p className="text-xs text-gray-500">Decade-Old Desi Cuisine</p>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation Only (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              return (
                <Button
                  key={link.path}
                  variant="ghost"
                  onClick={() => navigate(link.path)}
                  className={`flex items-center gap-2 ${
                    isActive
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Button>
              )
            })}
          </nav>

          {/* Right: Language Toggle */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
