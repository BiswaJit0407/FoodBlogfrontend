import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { ChefHat, Heart, BookOpen, Users, Coffee, Utensils, Moon, Cookie, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path) => {
    navigate(path)
    onClose()
  }

  const navItems = [
    { icon: ChefHat, label: "All Recipes", path: "/", active: location.pathname === "/" && !location.search },
    { icon: Heart, label: "Favorites", path: "/favorites", active: location.pathname === "/favorites" },
    { icon: BookOpen, label: "Courses", path: "/courses", active: location.pathname === "/courses" },
    { icon: Users, label: "Community", path: "/community", active: location.pathname === "/community" },
  ]

  const mealTypes = [
    { icon: Coffee, label: "Breakfast", path: "/?meal=breakfast", active: location.search === "?meal=breakfast" },
    { icon: Utensils, label: "Lunch", path: "/?meal=lunch", active: location.search === "?meal=lunch" },
    { icon: Moon, label: "Dinner", path: "/?meal=dinner", active: location.search === "?meal=dinner" },
    { icon: Cookie, label: "Snack", path: "/?meal=snack", active: location.search === "?meal=snack" },
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

        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Theresa" />
            <AvatarFallback>TW</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">Theresa Webb</h3>
          <p className="text-sm text-gray-500">Master Chef</p>
        </div>

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
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            )
          })}
        </nav>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 px-3">Meal Types</h4>
          <nav className="space-y-2">
            {mealTypes.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full justify-start ${
                    item.active
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
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

