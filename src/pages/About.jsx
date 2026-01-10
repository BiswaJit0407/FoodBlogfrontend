import { Card, CardContent } from '../components/ui/card'
import { Heart, BookOpen, Users } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-xl">
          <Heart className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          The Story Behind the Handi
        </h1>
        <p className="text-lg text-gray-600 italic">
          "Preserving the taste of Odisha, one recipe at a time"
        </p>
      </div>

      {/* The Connection */}
      <Card className="mb-8">
        <CardContent className="p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Connection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I still remember the aroma of 'Phutana' crackling in my grandmother's kitchen in the early morning. 
            The sound of mustard seeds popping in hot mustard oil, the fragrance of curry leaves dancing in the air, 
            and the warmth of the earthen chulha (clay stove) that seemed to infuse every dish with love and tradition.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Growing up in a traditional Odia household, food was never just sustenance—it was a language of love, 
            a bridge between generations, and a keeper of our cultural identity. Every meal told a story, every 
            spice had a purpose, and every recipe carried the wisdom of centuries.
          </p>
        </CardContent>
      </Card>

      {/* The Mission */}
      <Card className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In a world of fast food and instant meals, our traditional Odia 'Bhata-Dalma' and 'Saga-Bhaja' are 
            losing their place at the dinner table. The younger generation is growing up without knowing the taste 
            of authentic 'Pakhala' on a hot summer afternoon or the comfort of 'Khechedi' on a rainy evening.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            My mission is to document these 'Desi' flavors before they are forgotten, to preserve the culinary 
            heritage of Odisha for future generations, and to show the world the richness of our cuisine.
          </p>
        </CardContent>
      </Card>

      {/* The Promise */}
      <Card className="mb-8">
        <CardContent className="p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Promise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every recipe here is a tribute to the simplicity of Odia households—using minimal oil, seasonal produce, 
            and the medicinal wisdom of our ancestors. These are not fancy restaurant dishes; these are the meals 
            that nourished generations of Odia families.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-700 italic">
              "I promise to keep these recipes authentic, to honor the traditional methods, and to share not just 
              the ingredients, but the stories, the memories, and the love that makes Odia cuisine truly special."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Heritage Timeline */}
      <Card className="mb-8">
        <CardContent className="p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Heritage Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Grandmother's Kitchen (1950s-1980s)</h3>
                <p className="text-sm text-gray-600">
                  Traditional recipes passed down through oral tradition, cooked on earthen stoves with 
                  locally sourced ingredients from village markets.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Mother's Adaptation (1980s-2010s)</h3>
                <p className="text-sm text-gray-600">
                  Preserving the essence while adapting to modern kitchens, maintaining the authentic 
                  flavors with slight modifications for convenience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">My Documentation (2020s-Present)</h3>
                <p className="text-sm text-gray-600">
                  Recording these precious recipes with exact measurements, techniques, and stories to 
                  ensure they survive for future generations.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bio */}
      <Card className="bg-gray-900 text-white">
        <CardContent className="p-6 lg:p-8 text-center">
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-orange-400">Namaskar!</span> I am a storyteller of Odia flavors. 
            From the smoke-filled kitchens of our villages to your modern dinner table, I bring you 100% Desi, 
            heritage recipes that nourish the soul. Join me as I preserve the taste of Odisha, one Pala at a time.
          </p>
          <p className="mt-4 text-orange-300 italic">
            "ଖାଦ୍ୟ ହିଁ ଔଷଧ, ରୋଷେଇ ହିଁ ପ୍ରେମ"
          </p>
          <p className="text-sm text-gray-400">
            (Food is medicine, cooking is love)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default About
