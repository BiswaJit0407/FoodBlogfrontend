import { useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { recipesData } from '../data/recipes'

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('Pizza')
  const navigate = useNavigate()

  const filters = ['Pizza', 'Dessert', 'Noodle', 'Cocktails', 'Salad']

  const recipes = recipesData.slice(0, 4)
  const featuredRecipe = recipesData[4]
  const sideRecipes = recipesData.slice(1, 3)

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`)
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
        Learn, Cook, & Eat your food
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? "default" : "outline"}
            onClick={() => setSelectedFilter(filter)}
            className={
              selectedFilter === filter
                ? "bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400"
                : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
            }
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className="cursor-pointer">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

      {/* Featured Recipe Section */}
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
    </>
  )
}

export default Home

