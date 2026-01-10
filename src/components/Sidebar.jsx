import { Button } from "./ui/button"
import { ChefHat, Droplets, Soup, Cookie, Leaf, BookOpen, Video, X, UtensilsCrossed } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path) => {
    navigate(path)
    onClose()
  }

  // Check if on recipes page without any filters
  const isAllRecipesActive = location.pathname === "/recipes" && !location.search

  const odiaThali = [
    { icon: ChefHat, label: "Sukhila (Dry)", path: "/recipes?category=sukhila", active: location.pathname === "/recipes" && location.search === "?category=sukhila" },
    { icon: Droplets, label: "Pani (Liquids)", path: "/recipes?category=pani", active: location.pathname === "/recipes" && location.search === "?category=pani" },
    { icon: Soup, label: "Side Items", path: "/recipes?category=side", active: location.pathname === "/recipes" && location.search === "?category=side" },
  ]

  const mainCourse = [
    { icon: Leaf, label: "Niramisa (Veg)", path: "/recipes?dietary=veg", active: location.pathname === "/recipes" && location.search === "?dietary=veg" },
    { icon: ChefHat, label: "Amisa (Non-Veg)", path: "/recipes?dietary=non-veg", active: location.pathname === "/recipes" && location.search === "?dietary=non-veg" },
  ]

  const special = [
    { icon: Cookie, label: "Pitha & Meetha", path: "/recipes?category=pitha", active: location.pathname === "/recipes" && location.search === "?category=pitha" },
    { icon: BookOpen, label: "The Pantry", path: "/pantry", active: location.pathname === "/pantry" },
    { icon: BookOpen, label: "Pro-Tips", path: "/tips", active: location.pathname === "/tips" },
    { icon: Video, label: "Tutorials", path: "/tutorials", active: location.pathname === "/tutorials" },
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
        w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-16 p-6 overflow-y-auto z-50 transition-transform duration-300
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

        {/* Sidebar Title */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-900">Recipe Categories</h3>
          <p className="text-xs text-gray-500 mt-1">Explore traditional Odia cuisine</p>
        </div>

        {/* All Recipes Button */}
        <div className="mb-6">
          <Button
            variant={isAllRecipesActive ? "default" : "ghost"}
            onClick={() => handleNavigation("/recipes")}
            className={`w-full justify-start ${
              isAllRecipesActive
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <UtensilsCrossed className="mr-3 h-5 w-5" />
            <span className="font-semibold">All Recipes</span>
          </Button>
        </div>

        {/* The Odia Thali */}
        <div className="mb-6 border-t border-gray-200 pt-4">
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
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 px-3">Learn & Explore</h4>
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

        {/* Quick Tip Box */}
        <div className="mt-8 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
          <p className="text-xs font-semibold text-orange-900 mb-2">💡 Daily Tip</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            Always temper your dal with Pancha Phutana for authentic Odia flavor!
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
