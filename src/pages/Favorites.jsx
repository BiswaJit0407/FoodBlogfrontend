import { Card, CardContent } from '../components/ui/card'
import { Heart } from 'lucide-react'

const Favorites = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
        <Heart className="h-12 w-12 text-orange-500" />
      </div>
      
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
        Your Favorite Recipes
      </h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Save your favorite Odia recipes here for quick access
      </p>
      
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-12">
          <p className="text-gray-700 mb-4">
            This feature is coming soon! You'll be able to save and organize your favorite recipes.
          </p>
          <p className="text-sm text-gray-600 italic">
            "ପ୍ରିୟ ଖାଦ୍ୟ ହୃଦୟରେ ରହେ" - Favorite food stays in the heart
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Favorites
