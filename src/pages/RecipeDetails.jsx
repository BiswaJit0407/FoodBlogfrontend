import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Clock, Users, ChefHat } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { recipesData } from '../data/recipes'
import { useLanguage } from '../context/LanguageContext'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const recipe = recipesData.find(r => r.id === parseInt(id))

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <Button onClick={() => navigate('/')}>Go Back Home</Button>
      </div>
    )
  }

  const description = language === 'en' ? recipe.description : recipe.description_od

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-4 lg:mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      {/* Recipe Header */}
      <div className="mb-6 lg:mb-8">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl lg:rounded-2xl overflow-hidden mb-4 lg:mb-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-white/95 backdrop-blur-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg flex items-center gap-2">
            <Clock className="h-3 w-3 lg:h-4 lg:w-4" />
            {recipe.time}
          </div>
        </div>

        <div className="mb-4 lg:mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-gray-900">{recipe.title}</h1>
          <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-sm lg:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold ml-1 lg:ml-2">{recipe.rating}</span>
              <span className="text-gray-400">({recipe.reviews} Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Serves {recipe.serving}</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>{recipe.category}</span>
            </div>
          </div>
        </div>

        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-6">{description}</p>
      </div>

      {/* Recipe Info Cards */}
      <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-6 lg:mb-8">
        <Card>
          <CardHeader className="p-3 lg:p-6">
            <CardTitle className="text-xs lg:text-sm text-gray-500">Prep Time</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <p className="text-lg lg:text-2xl font-bold">{recipe.prepTime}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-3 lg:p-6">
            <CardTitle className="text-xs lg:text-sm text-gray-500">Cook Time</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <p className="text-lg lg:text-2xl font-bold">{recipe.cookTime}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-3 lg:p-6">
            <CardTitle className="text-xs lg:text-sm text-gray-500">Total Time</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 lg:p-6 lg:pt-0">
            <p className="text-lg lg:text-2xl font-bold">{recipe.time}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl">Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 lg:space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span className="text-sm lg:text-base text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl">Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 lg:space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 lg:gap-4">
                  <span className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-sm lg:text-base">
                    {index + 1}
                  </span>
                  <span className="text-sm lg:text-base text-gray-700 pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Nutrition Info */}
      <Card className="mt-6 lg:mt-8">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl">Nutrition Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div>
              <p className="text-xs lg:text-sm text-gray-500 mb-1">Calories</p>
              <p className="text-xl lg:text-2xl font-bold">{recipe.nutrition.calories}</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm text-gray-500 mb-1">Protein</p>
              <p className="text-xl lg:text-2xl font-bold">{recipe.nutrition.protein}</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm text-gray-500 mb-1">Carbs</p>
              <p className="text-xl lg:text-2xl font-bold">{recipe.nutrition.carbs}</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm text-gray-500 mb-1">Fat</p>
              <p className="text-xl lg:text-2xl font-bold">{recipe.nutrition.fat}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 lg:mt-8">
        <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black h-11 lg:h-12 text-base lg:text-lg">
          Get The Offer
        </Button>
        <Button variant="outline" className="flex-1 h-11 lg:h-12 text-base lg:text-lg">
          Save Recipe
        </Button>
      </div>
    </div>
  )
}

export default RecipeDetails

