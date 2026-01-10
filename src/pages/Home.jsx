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

  const category = searchParams.get('category')
  const dietary = searchParams.get('dietary')

  const dietaryTypes = [
    { value: 'all', label: 'All' },
    { value: 'veg', label: 'Niramisa (Veg)' },
    { value: 'non-veg', label: 'Amisa (Non-Veg)' }
  ]

  // Filter recipes based on category and dietary type
  const getFilteredRecipes = () => {
    let filtered = recipesData

    // Filter by category if selected from sidebar
    if (category) {
      filtered = filtered.filter(recipe => recipe.odiaCategory === category)
    }

    // Filter by dietary type from sidebar
    if (dietary) {
      filtered = filtered.filter(recipe => recipe.dietaryType === dietary)
    }

    // Filter by dietary type from page buttons
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

  const getPageTitle = () => {
    if (category === 'sukhila') return 'Sukhila (Dry Dishes)'
    if (category === 'pani') return 'Pani (Liquid Dishes)'
    if (category === 'side') return 'Side Items - Bhaja & Khatta'
    if (category === 'pitha') return 'Pitha & Meetha'
    if (dietary === 'veg') return 'Niramisa (Vegetarian Delicacies)'
    if (dietary === 'non-veg') return 'Amisa (Non-Vegetarian Delicacies)'
    return 'Chiran\'s Kitchen'
  }

  const getPageSubtitle = () => {
    if (category || dietary) return 'Decade-Old Traditional Recipes'
    return 'Preserving the taste of Odisha, one recipe at a time'
  }

  return (
    <>
      {/* Search Bar */}
      <div className="mb-6 lg:mb-8">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search by ingredient or dish name..."
            className="pl-10 pr-4 py-5 lg:py-6 text-base w-full"
          />
        </div>
      </div>

      {/* Main Heading */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
          {getPageTitle()}
        </h1>
        <p className="text-sm lg:text-base text-gray-600 italic">
          {getPageSubtitle()}
        </p>
      </div>

      {/* Dietary Type Filter Buttons */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Filter by Type</h3>
        <div className="flex gap-2 lg:gap-3 flex-wrap">
          {dietaryTypes.map((type) => (
            <Button
              key={type.value}
              variant={selectedDietaryType === type.value ? "default" : "outline"}
              onClick={() => setSelectedDietaryType(type.value)}
              className={`text-sm lg:text-base ${
                selectedDietaryType === type.value
                  ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                  : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              }`}
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Recipe Cards Grid */}
      {recipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className="cursor-pointer">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>

          {/* Featured Recipe Section */}
          {featuredRecipe && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="lg:col-span-2 cursor-pointer" onClick={() => handleRecipeClick(featuredRecipe.id)}>
                <RecipeCard recipe={featuredRecipe} featured={true} />
              </div>
              <div className="space-y-4 lg:space-y-6">
                {sideRecipes.map((recipe) => (
                  <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className="cursor-pointer">
                    <RecipeCard recipe={recipe} buttonText="View Recipe" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg lg:text-xl text-gray-500">No recipes found for the selected filters.</p>
          <p className="text-sm text-gray-400 mt-2">Try selecting a different category or dietary preference.</p>
        </div>
      )}
    </>
  )
}

export default Home

