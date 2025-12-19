import { useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Search } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { recipesData } from '../data/recipes'

const Home = () => {
  const [selectedDietaryType, setSelectedDietaryType] = useState('all')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const mealType = searchParams.get('meal')

  const dietaryTypes = [
    { value: 'all', label: 'All' },
    { value: 'veg', label: 'Veg' },
    { value: 'non-veg', label: 'Non-Veg' }
  ]

  // Filter recipes based on meal type and dietary type
  const getFilteredRecipes = () => {
    let filtered = recipesData

    // Filter by meal type if selected from sidebar
    if (mealType) {
      filtered = filtered.filter(recipe => recipe.mealType === mealType)
    }

    // Filter by dietary type
    if (selectedDietaryType !== 'all') {
      filtered = filtered.filter(recipe => recipe.dietaryType === selectedDietaryType)
    }

    return filtered
  }

  const filteredRecipes = getFilteredRecipes()
  const recipes = filteredRecipes.slice(0, 4)
  const featuredRecipe = filteredRecipes[4] || filteredRecipes[0]
  const sideRecipes = filteredRecipes.slice(1, 3)

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`)
  }

  const getMealTypeTitle = () => {
    if (mealType) {
      return `${mealType.charAt(0).toUpperCase() + mealType.slice(1)} Recipes`
    }
    return 'Learn, Cook, & Eat your food'
  }

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search for recipes..."
            className="pl-10 pr-4 py-6 text-base"
          />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        {getMealTypeTitle()}
      </h1>

      {/* Dietary Type Filter Buttons */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Dietary Preference</h3>
        <div className="flex gap-3 flex-wrap">
          {dietaryTypes.map((type) => (
            <Button
              key={type.value}
              variant={selectedDietaryType === type.value ? "default" : "outline"}
              onClick={() => setSelectedDietaryType(type.value)}
              className={
                selectedDietaryType === type.value
                  ? "bg-green-500 hover:bg-green-600 text-white border-green-500"
                  : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              }
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Recipe Cards Grid */}
      {recipes.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-6 mb-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className="cursor-pointer">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>

          {/* Featured Recipe Section */}
          {featuredRecipe && (
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 cursor-pointer" onClick={() => handleRecipeClick(featuredRecipe.id)}>
                <RecipeCard recipe={featuredRecipe} featured={true} />
              </div>
              <div className="space-y-6">
                {sideRecipes.map((recipe) => (
                  <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className="cursor-pointer">
                    <RecipeCard recipe={recipe} buttonText="Get The Offer" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No recipes found for the selected filters.</p>
        </div>
      )}
    </>
  )
}

export default Home

