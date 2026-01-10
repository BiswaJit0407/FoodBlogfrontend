import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search, Mail, ChefHat, Heart, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'The Pantry', path: '/pantry' },
    { label: 'Pro-Tips', path: '/tips' },
  ]

  const categories = [
    { label: 'Sukhila (Dry)', path: '/?category=sukhila' },
    { label: 'Pani (Liquids)', path: '/?category=pani' },
    { label: 'Pitha & Meetha', path: '/?category=pitha' },
    { label: 'Side Items', path: '/?category=side' },
  ]

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Odia Heritage Kitchen</h3>
                <p className="text-xs text-gray-400">Decade-Old Desi Cuisine</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Preserving the authentic taste of Odisha through traditional recipes passed down through generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(category.path)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get grandmother's secret recipes in your inbox
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-center font-semibold mb-4">Find Your Favorite Odia Comfort Food</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="search" 
                placeholder="Search by ingredient or dish name..." 
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-12"
              />
            </div>
          </div>
        </div>

        {/* Glossary Link */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-400" />
              <button 
                onClick={() => navigate('/glossary')}
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Odia to English Kitchen Terms Glossary
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Odia Heritage Kitchen. Made with <Heart className="inline h-4 w-4 text-red-500" /> for preserving Odia culinary heritage.
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">
            "ଖାଦ୍ୟ ହିଁ ଔଷଧ, ରୋଷେଇ ହିଁ ପ୍ରେମ" - Food is medicine, cooking is love
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
