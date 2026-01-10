import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { useNavigate } from 'react-router-dom'
import { ChefHat, Heart, BookOpen, Video, Leaf, Droplets, Cookie, ArrowRight, Mail, Phone, MapPin, Star } from 'lucide-react'

const Landing = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Leaf,
      title: 'Authentic Recipes',
      description: 'Decade-old traditional Odia recipes passed down through generations'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step cooking videos to master traditional techniques'
    },
    {
      icon: BookOpen,
      title: 'Spice Secrets',
      description: 'Learn the medicinal wisdom and health benefits of traditional spices'
    },
    {
      icon: Heart,
      title: 'Heritage Preserved',
      description: 'Documenting flavors before they are forgotten'
    }
  ]

  const categories = [
    { icon: Droplets, name: 'Pani (Liquids)', path: '/recipes?category=pani', color: 'from-blue-400 to-blue-600' },
    { icon: ChefHat, name: 'Sukhila (Dry)', path: '/recipes?category=sukhila', color: 'from-orange-400 to-orange-600' },
    { icon: Cookie, name: 'Pitha & Meetha', path: '/recipes?category=pitha', color: 'from-pink-400 to-pink-600' },
    { icon: Leaf, name: 'Niramisa (Veg)', path: '/recipes?dietary=veg', color: 'from-green-400 to-green-600' }
  ]

  const testimonials = [
    {
      name: 'Priya Patel',
      text: 'These recipes remind me of my grandmother\'s cooking. Absolutely authentic!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      text: 'Finally found a place that preserves our traditional Odia cuisine. Thank you!',
      rating: 5
    },
    {
      name: 'Anita Das',
      text: 'The video tutorials are so helpful. I can now make perfect Dalma!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-2xl">
            <ChefHat className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Chiran's Kitchen
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-orange-100">
            Decade-Old Desi Cuisine
          </p>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Preserving the authentic taste of Odisha through traditional recipes passed down through generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/recipes')}
              className="bg-white text-orange-600 hover:bg-gray-100 h-14 px-8 text-lg"
            >
              Explore Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 h-14 px-8 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Authentic Odia cuisine with a modern approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-gray-600">
              Discover traditional Odia dishes by category
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <button
                  key={index}
                  onClick={() => navigate(category.path)}
                  className="group"
                >
                  <Card className="hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">{category.name}</h3>
                    </CardContent>
                  </Card>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Story Behind the Handi
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I still remember the aroma of 'Phutana' crackling in my grandmother's kitchen in the early morning. 
                The sound of mustard seeds popping in hot mustard oil, the fragrance of curry leaves dancing in the air.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In a world of fast food, our traditional Odia 'Bhata-Dalma' and 'Saga-Bhaja' are losing their place. 
                My mission is to document these 'Desi' flavors before they are forgotten.
              </p>
              <Button 
                onClick={() => navigate('/about')}
                className="bg-orange-500 hover:bg-orange-600 h-12 px-6"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 h-full flex flex-col justify-center">
                  <p className="text-2xl font-bold text-gray-900 mb-4 italic">
                    "ଖାଦ୍ୟ ହିଁ ଔଷଧ, ରୋଷେଇ ହିଁ ପ୍ରେମ"
                  </p>
                  <p className="text-gray-600">
                    Food is medicine, cooking is love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Share your recipes, ask questions, or just say hello
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[120px]"
                      placeholder="Tell us your story..."
                    />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">hello@chiranskitchen.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">Bhubaneswar, Odisha, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                className="w-full h-12 border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                View Full Contact Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Explore hundreds of authentic Odia recipes and start your culinary journey today
          </p>
          <Button 
            onClick={() => navigate('/recipes')}
            className="bg-white text-orange-600 hover:bg-gray-100 h-14 px-8 text-lg"
          >
            Browse All Recipes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Landing
