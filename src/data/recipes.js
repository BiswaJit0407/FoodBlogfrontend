// Dummy recipe data
export const recipesData = [
  {
    id: 1,
    title: 'Special Salad Chicken',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 7,
    prepTime: '20 mins',
    time: '20 mins',
    category: 'Salad',
    description: 'A refreshing and healthy salad featuring tender grilled chicken, mixed greens, cherry tomatoes, cucumbers, and a tangy vinaigrette dressing. Perfect for a light lunch or dinner.',
    serving: 2,
    cookTime: '20 mins',
    ingredients: [
      '2 boneless chicken breasts',
      '4 cups mixed greens',
      '1 cup cherry tomatoes',
      '1 cucumber, sliced',
      '1/2 red onion, thinly sliced',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Season chicken breasts with salt and pepper',
      'Grill chicken for 6-7 minutes per side until cooked through',
      'Let chicken rest, then slice',
      'Toss mixed greens with tomatoes, cucumber, and red onion',
      'Whisk together olive oil and lemon juice for dressing',
      'Arrange salad on plates, top with sliced chicken',
      'Drizzle with dressing and serve'
    ],
    nutrition: {
      calories: 320,
      protein: '28g',
      carbs: '15g',
      fat: '18g'
    }
  },
  {
    id: 2,
    title: 'Noodle Chicken',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 12,
    prepTime: '25 mins',
    time: '25 mins',
    category: 'Noodle',
    description: 'Delicious stir-fried noodles with tender chicken, fresh vegetables, and a savory sauce. A quick and satisfying meal that comes together in minutes.',
    serving: 3,
    cookTime: '25 mins',
    ingredients: [
      '8 oz egg noodles',
      '2 chicken breasts, sliced',
      '2 tbsp vegetable oil',
      '2 cloves garlic, minced',
      '1 bell pepper, sliced',
      '1 cup snap peas',
      '2 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp sesame oil'
    ],
    instructions: [
      'Cook noodles according to package directions, drain',
      'Heat oil in a large wok or pan',
      'Add chicken and cook until golden, about 5 minutes',
      'Add garlic and vegetables, stir-fry for 3 minutes',
      'Add cooked noodles and sauces',
      'Toss everything together and cook for 2 more minutes',
      'Serve hot with sesame oil drizzle'
    ],
    nutrition: {
      calories: 450,
      protein: '32g',
      carbs: '55g',
      fat: '12g'
    }
  },
  {
    id: 3,
    title: 'Chicken with green veg',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 9,
    prepTime: '30 mins',
    time: '30 mins',
    category: 'Salad',
    description: 'A healthy and colorful dish featuring tender chicken with a medley of fresh green vegetables. Light, nutritious, and full of flavor.',
    serving: 4,
    cookTime: '30 mins',
    ingredients: [
      '4 chicken thighs',
      '2 cups broccoli florets',
      '1 cup green beans',
      '1 zucchini, sliced',
      '2 tbsp olive oil',
      '3 cloves garlic, minced',
      '1 lemon, juiced',
      'Fresh herbs (thyme, rosemary)',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 400°F',
      'Season chicken thighs with salt, pepper, and herbs',
      'Heat oil in an oven-safe pan, sear chicken skin-side down',
      'Add vegetables around the chicken',
      'Roast in oven for 25 minutes until chicken is cooked',
      'Drizzle with lemon juice before serving'
    ],
    nutrition: {
      calories: 380,
      protein: '35g',
      carbs: '12g',
      fat: '22g'
    }
  },
  {
    id: 4,
    title: 'Spicy Chicken Bowl',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 15,
    prepTime: '35 mins',
    time: '35 mins',
    category: 'Pizza',
    description: 'A bold and flavorful bowl with spicy marinated chicken, rice, fresh vegetables, and a creamy sauce. Perfect for those who love a little heat.',
    serving: 2,
    cookTime: '35 mins',
    ingredients: [
      '2 chicken breasts',
      '1 cup jasmine rice',
      '1 tbsp chili paste',
      '1 tbsp soy sauce',
      '1 bell pepper, sliced',
      '1 carrot, julienned',
      '1/4 cup mayonnaise',
      '1 tbsp sriracha',
      'Lime wedges'
    ],
    instructions: [
      'Marinate chicken in chili paste and soy sauce for 30 minutes',
      'Cook rice according to package directions',
      'Grill or pan-fry chicken until cooked through',
      'Slice chicken into strips',
      'Mix mayonnaise with sriracha for spicy mayo',
      'Arrange rice in bowls, top with chicken and vegetables',
      'Drizzle with spicy mayo and serve with lime'
    ],
    nutrition: {
      calories: 520,
      protein: '38g',
      carbs: '65g',
      fat: '15g'
    }
  },
  {
    id: 5,
    title: 'Instant Pot Greek Chicken Bowls',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=400&fit=crop',
    rating: 5,
    reviews: 24,
    prepTime: '20 mins',
    time: '1 hour 20 min',
    category: 'Salad',
    description: 'A delicious and healthy Greek-inspired chicken bowl with fresh vegetables and Mediterranean flavors. Made easily in an Instant Pot for a quick weeknight dinner.',
    serving: 4,
    cookTime: '1 hour 20 min',
    ingredients: [
      '4 chicken thighs, bone-in',
      '1 cup chicken broth',
      '1/4 cup lemon juice',
      '3 cloves garlic, minced',
      '1 tsp dried oregano',
      '1 tsp dried thyme',
      '2 cups cooked quinoa',
      '1 cucumber, diced',
      '2 tomatoes, diced',
      '1/2 red onion, sliced',
      '1/2 cup feta cheese, crumbled',
      'Kalamata olives',
      'Tzatziki sauce'
    ],
    instructions: [
      'Season chicken thighs with salt, pepper, oregano, and thyme',
      'Set Instant Pot to sauté mode, brown chicken on both sides',
      'Add garlic, lemon juice, and chicken broth',
      'Close lid, set to high pressure for 15 minutes',
      'Natural release for 10 minutes, then quick release',
      'Remove chicken and shred',
      'Serve over quinoa with cucumber, tomatoes, red onion',
      'Top with feta, olives, and tzatziki sauce'
    ],
    nutrition: {
      calories: 420,
      protein: '36g',
      carbs: '38g',
      fat: '16g'
    }
  }
]

