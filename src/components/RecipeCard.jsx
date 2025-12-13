import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Star, Clock } from "lucide-react"

const RecipeCard = ({ recipe, featured = false, buttonText = null }) => {
  const getButtonText = () => {
    if (buttonText) return buttonText
    return featured ? "Get The Offer" : "View Recipe"
  }

  const getButtonStyle = () => {
    if (buttonText === "Get The Offer" || featured) {
      return "bg-yellow-400 hover:bg-yellow-500 text-black"
    }
    return "bg-gray-900 hover:bg-gray-800 text-white"
  }

  return (
    <Card className={`overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow ${featured ? "" : ""}`}>
      <div className={`relative ${featured ? "h-64" : "h-48"} overflow-hidden bg-gray-100`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
          {recipe.time}
        </div>
      </div>
      <CardContent className={`p-5 ${featured ? "pb-4" : ""}`}>
        <h3 className={`font-semibold mb-3 ${featured ? "text-2xl mb-4" : "text-lg"}`}>
          {recipe.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold ml-1">{recipe.rating}</span>
            <span className="text-gray-400">({recipe.reviews} Reviews)</span>
          </div>
          {!featured && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
          )}
        </div>
        {featured && (
          <div className="space-y-3 mb-4">
            <p className="text-sm text-gray-600 leading-relaxed">{recipe.description}</p>
            <div className="flex gap-6 text-sm pt-2 border-t border-gray-100">
              <div>
                <span className="text-gray-500">Serving:</span>{" "}
                <span className="font-semibold text-gray-900">{recipe.serving}</span>
              </div>
              <div>
                <span className="text-gray-500">Cook Time:</span>{" "}
                <span className="font-semibold text-gray-900">{recipe.cookTime}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className={`px-5 ${featured ? "pb-5" : "pb-5"}`}>
        <Button
          className={`w-full font-medium h-10 ${
            featured ? "h-11 text-base" : ""
          } ${getButtonStyle()}`}
        >
          {getButtonText()}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard

