import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Leaf, Flame, Heart, Shield, Sparkles } from 'lucide-react'

const Pantry = () => {
  const spices = [
    {
      name: 'Phutana (Tempering)',
      odia: 'ଫୁଟଣା',
      ingredients: 'Mustard seeds, Cumin, Curry leaves, Dried red chili',
      benefits: 'Aids digestion, boosts metabolism, anti-inflammatory properties',
      usage: 'Used in Dalma, Dalma, Saga Bhaja',
      icon: Flame
    },
    {
      name: 'Pancha Phutana',
      odia: 'ପଞ୍ଚ ଫୁଟଣା',
      ingredients: 'Cumin, Mustard, Fenugreek, Fennel, Nigella seeds',
      benefits: 'Improves gut health, reduces cholesterol, antioxidant-rich',
      usage: 'Essential for Odia curries and vegetables',
      icon: Sparkles
    },
    {
      name: 'Turmeric (Haladi)',
      odia: 'ହଳଦୀ',
      ingredients: 'Fresh or dried turmeric root',
      benefits: 'Anti-inflammatory, immunity booster, wound healing',
      usage: 'Used in almost all Odia dishes',
      icon: Heart
    },
    {
      name: 'Ginger-Garlic Paste',
      odia: 'ଆଦା-ରସୁଣ ପେଷ୍ଟ',
      ingredients: 'Fresh ginger and garlic',
      benefits: 'Fights infections, improves heart health, aids digestion',
      usage: 'Base for Amisa (non-veg) preparations',
      icon: Shield
    }
  ]

  const pickles = [
    {
      name: 'Amba Khatta',
      odia: 'ଆମ୍ବ ଖଟା',
      description: 'Sweet and tangy raw mango pickle',
      season: 'Summer (March-May)',
      shelfLife: '6-12 months'
    },
    {
      name: 'Tentuli Khatta',
      odia: 'ତେନ୍ତୁଳି ଖଟା',
      description: 'Tamarind-based tangy pickle',
      season: 'Year-round',
      shelfLife: '12 months'
    },
    {
      name: 'Nimbu Achar',
      odia: 'ନିମ୍ବୁ ଆଚାର',
      description: 'Spicy lemon pickle with mustard oil',
      season: 'Winter (November-February)',
      shelfLife: '12-18 months'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">The Pantry</h1>
        <p className="text-base lg:text-lg text-gray-600">
          Discover the medicinal wisdom and health benefits of traditional Odia spices and preserves
        </p>
      </div>

      {/* Spice Secrets Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="h-8 w-8 text-orange-500" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Spice Secrets</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {spices.map((spice, index) => {
            const Icon = spice.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{spice.name}</CardTitle>
                      <p className="text-sm text-gray-500">{spice.odia}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Ingredients:</p>
                    <p className="text-sm text-gray-600">{spice.ingredients}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Health Benefits:</p>
                    <p className="text-sm text-gray-600">{spice.benefits}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Common Usage:</p>
                    <p className="text-sm text-gray-600 italic">{spice.usage}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Pickles & Preserves Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="h-8 w-8 text-orange-500" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Traditional Pickles (Achar)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pickles.map((pickle, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{pickle.name}</CardTitle>
                <p className="text-sm text-gray-500">{pickle.odia}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700">{pickle.description}</p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold">Best Season:</span> {pickle.season}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold">Shelf Life:</span> {pickle.shelfLife}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Traditional Wisdom Box */}
      <Card className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-6 lg:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Wisdom</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Odia households, the pantry is not just a storage space—it's a medicine cabinet. 
            Our ancestors understood the healing properties of every spice and herb. The practice 
            of using Phutana (tempering) isn't just for flavor; it's a way to activate the medicinal 
            compounds in spices, making them more bioavailable to our bodies.
          </p>
          <p className="text-gray-700 leading-relaxed italic">
            "ଖାଦ୍ୟ ହିଁ ଔଷଧ" (Khadya hi aushadha) - Food itself is medicine.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Pantry
