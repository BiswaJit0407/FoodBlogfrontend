import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Lightbulb, Clock, Flame, Droplets, Leaf, ChefHat } from 'lucide-react'

const ProTips = () => {
  const cookingTips = [
    {
      title: 'Perfect Bhata (Rice) Every Time',
      icon: ChefHat,
      tips: [
        'Wash rice 3-4 times until water runs clear to remove excess starch',
        'Use 1:2 ratio for rice to water (1 cup rice = 2 cups water)',
        'Let rice rest for 5 minutes after cooking before opening the lid',
        'For fluffier rice, add a few drops of lemon juice while cooking'
      ]
    },
    {
      title: 'Mastering Dalma',
      icon: Flame,
      tips: [
        'Soak Arhar dal for 30 minutes before cooking for better texture',
        'Add vegetables in order of cooking time (hard vegetables first)',
        'Temper with Pancha Phutana at the end for authentic flavor',
        'Add a pinch of asafoetida (hing) to reduce gas formation'
      ]
    },
    {
      title: 'Crispy Bhaja Secrets',
      icon: Droplets,
      tips: [
        'Pat dry vegetables completely before frying',
        'Use mustard oil for authentic Odia taste',
        'Maintain medium-high heat for even cooking',
        'Add a pinch of rice flour for extra crispiness'
      ]
    },
    {
      title: 'Fresh Saga (Greens) Preparation',
      icon: Leaf,
      tips: [
        'Wash greens in salt water to remove insects',
        'Chop greens finely for better cooking',
        'Don\'t overcook - 5-7 minutes is enough',
        'Add garlic paste for enhanced flavor and health benefits'
      ]
    }
  ]

  const kitchenHacks = [
    {
      problem: 'Curry too spicy?',
      solution: 'Add a spoonful of yogurt or coconut milk to balance the heat',
      category: 'Flavor Fix'
    },
    {
      problem: 'Dal too watery?',
      solution: 'Mash some cooked dal and mix it back, or add roasted besan (gram flour)',
      category: 'Consistency'
    },
    {
      problem: 'Rice burnt at bottom?',
      solution: 'Place a piece of bread on top of rice for 5 minutes to absorb burnt smell',
      category: 'Emergency Fix'
    },
    {
      problem: 'Vegetables losing color?',
      solution: 'Blanch green vegetables in boiling water with salt before cooking',
      category: 'Presentation'
    },
    {
      problem: 'Leftover rice?',
      solution: 'Make Pakhala (fermented rice) or Mudhi Mansa (rice with fish curry)',
      category: 'Zero Waste'
    },
    {
      problem: 'Pickle too salty?',
      solution: 'Add jaggery or sugar to balance the saltiness',
      category: 'Flavor Fix'
    }
  ]

  const timeManagement = [
    {
      task: 'Meal Prep Sunday',
      description: 'Wash and chop vegetables, soak dals, prepare spice mixes',
      time: '2 hours saves 30 mins daily'
    },
    {
      task: 'Batch Cooking',
      description: 'Cook extra dal and rice, store in fridge for 2-3 days',
      time: 'Cook once, eat thrice'
    },
    {
      task: 'Phutana Ready',
      description: 'Pre-mix Pancha Phutana in a jar for quick tempering',
      time: 'Saves 5 mins per meal'
    },
    {
      task: 'Freeze Fresh',
      description: 'Freeze grated coconut, curry leaves, and ginger-garlic paste',
      time: 'Always ready to use'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">Pro-Tips</h1>
        <p className="text-base lg:text-lg text-gray-600">
          Master the art of Odia cooking with these time-tested tips and kitchen hacks
        </p>
      </div>

      {/* Cooking Techniques */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <ChefHat className="h-8 w-8 text-orange-500" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Cooking Techniques</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cookingTips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Kitchen Hacks */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="h-8 w-8 text-orange-500" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Kitchen Hacks</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kitchenHacks.map((hack, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                    {hack.category}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{hack.problem}</h3>
                <p className="text-sm text-gray-600">{hack.solution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Time Management */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="h-8 w-8 text-orange-500" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Time Management</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {timeManagement.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{item.task}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700">{item.description}</p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-orange-600">⏱️ {item.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Grandmother's Wisdom */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-6 lg:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Grandmother's Wisdom</h3>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">🌿 Taste as you cook:</span> The best seasoning comes from 
              adjusting flavors gradually, not from following measurements blindly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">🔥 Low and slow:</span> Traditional Odia dishes taste better 
              when cooked on low heat. Patience is the secret ingredient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">💧 Water wisdom:</span> Use the water from washing rice 
              (Tanka Pani) to water plants—it's rich in nutrients.
            </p>
            <p className="text-gray-700 leading-relaxed italic mt-4">
              "ରୋଷେଇ ଘରେ ପ୍ରେମ ଥିଲେ ଖାଦ୍ୟ ସ୍ୱାଦିଷ୍ଟ ହୁଏ" - When there's love in the kitchen, the food tastes better.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProTips
