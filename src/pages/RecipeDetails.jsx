import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Clock, Users, ChefHat } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { recipesData } from '../data/recipes'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = recipesData.find(r => r.id === parseInt(id))

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <Button onClick={() => navigate('/')}>Go Back Home</Button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      {/* Recipe Header */}
      <div className="mb-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {recipe.time}
          </div>
        </div>

        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{recipe.title}</h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold ml-2">{recipe.rating}</span>
                <span className="text-gray-400">({recipe.reviews} Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Serves {recipe.serving}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                <span>{recipe.category}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">{recipe.description}</p>
      </div>

      {/* Recipe Info Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">Prep Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{recipe.prepTime}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">Cook Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{recipe.cookTime}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">Total Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{recipe.time}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Nutrition Info */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Nutrition Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Calories</p>
              <p className="text-2xl font-bold">{recipe.nutrition.calories}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Protein</p>
              <p className="text-2xl font-bold">{recipe.nutrition.protein}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Carbs</p>
              <p className="text-2xl font-bold">{recipe.nutrition.carbs}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Fat</p>
              <p className="text-2xl font-bold">{recipe.nutrition.fat}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black h-12 text-lg">
          Get The Offer
        </Button>
        <Button variant="outline" className="flex-1 h-12 text-lg">
          Save Recipe
        </Button>
      </div>
    </div>
  )
}

export default RecipeDetails

