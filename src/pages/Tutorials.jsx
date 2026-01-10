import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Play, Image, Clock, ChefHat, Flame, Droplets, Users } from 'lucide-react'

const Tutorials = () => {
  const [activeTab, setActiveTab] = useState('videos')

  const videoTutorials = [
    {
      id: 1,
      title: 'How to Make Perfect Phutana (Tempering)',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
      category: 'Basics',
      views: '12.5K',
      description: 'Learn the traditional Odia tempering technique that forms the base of most dishes'
    },
    {
      id: 2,
      title: 'Traditional Dalma Recipe - Step by Step',
      duration: '15:20',
      thumbnail: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      category: 'Main Course',
      views: '25.3K',
      description: 'Complete guide to making authentic Odia Dalma with vegetables and lentils'
    },
    {
      id: 3,
      title: 'Mastering Poda Pitha (Burnt Cake)',
      duration: '20:45',
      thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      category: 'Pitha & Sweets',
      views: '18.7K',
      description: 'Traditional method of making the famous Odia Poda Pitha in earthen oven'
    },
    {
      id: 4,
      title: 'Crispy Saga Bhaja (Greens Fry)',
      duration: '8:15',
      thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      category: 'Side Dishes',
      views: '9.2K',
      description: 'Secret tips for making perfectly crispy and flavorful saga bhaja'
    },
    {
      id: 5,
      title: 'Authentic Pakhala Preparation',
      duration: '12:30',
      thumbnail: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
      category: 'Traditional',
      views: '15.8K',
      description: 'Traditional fermented rice dish - perfect for summer'
    },
    {
      id: 6,
      title: 'Khechedi - The Comfort Food',
      duration: '10:00',
      thumbnail: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
      category: 'Main Course',
      views: '11.4K',
      description: 'One-pot rice and lentil dish with vegetables'
    }
  ]

  const galleryTips = [
    {
      id: 1,
      title: 'Spice Grinding Techniques',
      images: [
        'https://images.unsplash.com/photo-1596040033229-a0b3b1c1e8e0?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1599909533730-f9d7e5d4e6e5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1596040033229-a0b3b1c1e8e0?w=400&h=300&fit=crop'
      ],
      steps: 5,
      difficulty: 'Easy',
      description: 'Traditional stone grinding vs modern methods'
    },
    {
      id: 2,
      title: 'Vegetable Cutting Styles',
      images: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=400&h=300&fit=crop'
      ],
      steps: 4,
      difficulty: 'Easy',
      description: 'Different cutting techniques for Odia dishes'
    },
    {
      id: 3,
      title: 'Paneer Making at Home',
      images: [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop'
      ],
      steps: 6,
      difficulty: 'Medium',
      description: 'Fresh homemade paneer in 30 minutes'
    },
    {
      id: 4,
      title: 'Pickle Preparation Process',
      images: [
        'https://images.unsplash.com/photo-1599909533730-f9d7e5d4e6e5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1596040033229-a0b3b1c1e8e0?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1599909533730-f9d7e5d4e6e5?w=400&h=300&fit=crop'
      ],
      steps: 8,
      difficulty: 'Medium',
      description: 'Traditional Odia pickle making techniques'
    },
    {
      id: 5,
      title: 'Rice Washing & Soaking',
      images: [
        'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop'
      ],
      steps: 3,
      difficulty: 'Easy',
      description: 'Proper rice preparation for perfect bhata'
    },
    {
      id: 6,
      title: 'Dough Kneading Methods',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
      ],
      steps: 4,
      difficulty: 'Easy',
      description: 'Perfect dough for pitha and roti'
    }
  ]

  const categories = [
    { name: 'All', count: videoTutorials.length },
    { name: 'Basics', count: 1 },
    { name: 'Main Course', count: 2 },
    { name: 'Pitha & Sweets', count: 1 },
    { name: 'Side Dishes', count: 1 },
    { name: 'Traditional', count: 1 }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
          Kitchen Tips & Tutorials
        </h1>
        <p className="text-base lg:text-lg text-gray-600">
          Learn traditional Odia cooking techniques through videos and step-by-step photo guides
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('videos')}
          className={`pb-4 px-2 font-semibold transition-colors relative ${
            activeTab === 'videos'
              ? 'text-orange-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            <span>Video Tutorials</span>
          </div>
          {activeTab === 'videos' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('gallery')}
          className={`pb-4 px-2 font-semibold transition-colors relative ${
            activeTab === 'gallery'
              ? 'text-orange-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center gap-2">
            <Image className="h-5 w-5" />
            <span>Photo Gallery Tips</span>
          </div>
          {activeTab === 'gallery' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
          )}
        </button>
      </div>

      {/* Video Tutorials Tab */}
      {activeTab === 'videos' && (
        <>
          {/* Categories Filter */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="whitespace-nowrap"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Gallery Tips Tab */}
      {activeTab === 'gallery' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryTips.map((tip) => (
              <Card key={tip.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="grid grid-cols-3 gap-1">
                    {tip.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${tip.title} step ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      tip.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {tip.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{tip.steps} Steps</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {tip.description}
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    View Full Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Featured Tip */}
      <Card className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500 rounded-lg">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip of the Week</h3>
              <p className="text-gray-700 mb-4">
                When making Dalma, always add vegetables in order of their cooking time. Start with raw banana 
                and pumpkin, then add brinjal and drumstick. This ensures all vegetables are perfectly cooked 
                without any being mushy or undercooked.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Flame className="h-4 w-4 text-orange-500" />
                  Cooking Technique
                </span>
                <span className="flex items-center gap-1">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  Traditional Method
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Tutorials
