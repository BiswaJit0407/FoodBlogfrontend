import { useLanguage } from '../context/LanguageContext'
import { Button } from './ui/button'
import { Languages } from 'lucide-react'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'English' : 'ଓଡ଼ିଆ'}</span>
    </Button>
  )
}

export default LanguageToggle
