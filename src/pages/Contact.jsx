import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Mail, MessageSquare, Users, ChefHat, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const contactOptions = [
    {
      icon: ChefHat,
      title: 'Share a Family Recipe',
      description: 'Have a decade-old family recipe? Share it with us and we\'ll feature it on our platform.',
      action: 'Share Recipe'
    },
    {
      icon: Users,
      title: 'Collaborations',
      description: 'Partner with us for local farmers, spice brands, or fellow food bloggers collaborations.',
      action: 'Collaborate'
    },
    {
      icon: MessageSquare,
      title: 'Ask the Chef',
      description: 'Struggling with a specific Odia technique? Get help with your cooking questions.',
      action: 'Ask Question'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Connect With Us
        </h1>
        <p className="text-base lg:text-lg text-gray-600">
          We'd love to hear from you! Share your stories, recipes, or just say hello.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactOptions.map((option, index) => {
          const Icon = option.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
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
                  Subject
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Share a Family Recipe</option>
                  <option>Collaboration Inquiry</option>
                  <option>Ask the Chef</option>
                  <option>General Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[120px]"
                  placeholder="Tell us your story, share your recipe, or ask your question..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Recipe Photo (Optional)
                </label>
                <Input type="file" accept="image/*" />
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-base">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info & Map */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">heritage@odiakitchen.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Origins of Our Dishes</h3>
              <p className="text-sm text-gray-700 mb-3">
                Our recipes come from various regions of Odisha, each with its unique culinary tradition:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span><strong>Ganjam:</strong> Famous for Khatta varieties</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span><strong>Puri:</strong> Known for Abhada and temple cuisine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span><strong>Cuttack:</strong> Renowned for Dahibara Aloodum</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span><strong>Sambalpur:</strong> Traditional Pitha varieties</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold mb-2">Join Our Community</p>
              <p className="text-sm text-gray-300 mb-4">
                Follow us on social media for daily recipe updates and cooking tips
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                  Instagram
                </Button>
                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                  Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Community Invitation */}
      <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Your Recipe Could Be Next!
          </h2>
          <p className="text-lg mb-6">
            Do you have a family recipe that's been passed down for generations? We'd love to feature it 
            and share your culinary heritage with the world.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 h-12 px-8">
            Submit Your Recipe
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
