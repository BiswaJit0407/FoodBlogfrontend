import { Button } from "./ui/button"
import { Home, Heart, BookOpen, ChefHat, Droplets, Soup, Cookie, Leaf, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path) => {
    navigate(path)
    onClose()
  }

  const navItems = [
    { icon: Home, label: "Home", path: "/", active: location.pathname === "/" && !location.search },
    { icon: Heart, label: "Favorites", path: "/favorites", active: location.pathname === "/favorites" },
    { icon: BookOpen, label: "About Us", path: "/about", active: location.pathname === "/about" },
    { icon: BookOpen, label: "Contact", path: "/contact", active: location.pathname === "/contact" },
  ]

  const odiaThali = [
    { icon: ChefHat, label: "Sukhila (Dry)", path: "/?category=sukhila", active: location.search === "?category=sukhila" },
    { icon: Droplets, label: "Pani (Liquids)", path: "/?category=pani", active: location.search === "?category=pani" },
    { icon: Soup, label: "Side Items", path: "/?category=side", active: location.search === "?category=side" },
  ]

  const mainCourse = [
    { icon: Leaf, label: "Niramisa (Veg)", path: "/?dietary=veg", active: location.search === "?dietary=veg" },
    { icon: ChefHat, label: "Amisa (Non-Veg)", path: "/?dietary=non-veg", active: location.search === "?dietary=non-veg" },
  ]

  const special = [
    { icon: Cookie, label: "Pitha & Meetha", path: "/?category=pitha", active: location.search === "?category=pitha" },
    { icon: BookOpen, label: "The Pantry", path: "/pantry", active: location.pathname === "/pantry" },
    { icon: BookOpen, label: "Pro-Tips", path: "/tips", active: location.pathname === "/tips" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 p-6 overflow-y-auto z-50 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Mobile Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Brand Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
            <ChefHat className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-bold text-lg text-center">Odia Heritage Kitchen</h3>
          <p className="text-xs text-gray-500 text-center mt-1">Decade-Old Desi Cuisine</p>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2 mb-6">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                onClick={() => handleNavigation(item.path)}
                className={`w-full justify-start ${
                  item.active
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            )
          })}
        </nav>

        {/* The Odia Thali */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 px-3">The Odia Thali</h4>
          <nav className="space-y-2">
            {odiaThali.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full justify-start text-sm ${
                    item.active
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>

        {/* Main Course */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 px-3">Main Course</h4>
          <nav className="space-y-2">
            {mainCourse.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full justify-start text-sm ${
                    item.active
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>

        {/* Special Sections */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 px-3">Special</h4>
          <nav className="space-y-2">
            {special.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full justify-start text-sm ${
                    item.active
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
