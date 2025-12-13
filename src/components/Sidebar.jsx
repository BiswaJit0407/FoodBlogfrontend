import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { ChefHat, Heart, BookOpen, Users } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: ChefHat, label: "Recipes", path: "/", active: location.pathname === "/" },
    { icon: Heart, label: "Favorites", path: "/favorites", active: location.pathname === "/favorites" },
    { icon: BookOpen, label: "Courses", path: "/courses", active: location.pathname === "/courses" },
    { icon: Users, label: "Community", path: "/community", active: location.pathname === "/community" },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 p-6">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Theresa" />
          <AvatarFallback>TW</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg">Theresa Webb</h3>
        <p className="text-sm text-gray-500">Master Chef</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              onClick={() => navigate(item.path)}
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
    </aside>
  )
}

export default Sidebar

