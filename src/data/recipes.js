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
    mealType: 'lunch',
    dietaryType: 'non-veg',
    description: 'A refreshing and healthy salad featuring tender grilled chicken, mixed greens, cherry tomatoes, cucumbers, and a tangy vinaigrette dressing. Perfect for a light lunch or dinner.',
    description_od: 'ଏକ ସତେଜ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟକର ସାଲାଡ୍ ଯେଉଁଥିରେ କୋମଳ ଗ୍ରିଲ୍ ଚିକେନ୍, ମିଶ୍ରିତ ସବୁଜ ପତ୍ର, ଚେରି ଟମାଟୋ, କାକୁଡି ଏବଂ ଏକ ଟାଙ୍ଗି ଭିନେଗ୍ରେଟ୍ ଡ୍ରେସିଂ ଅଛି। ହାଲୁକା ମଧ୍ୟାହ୍ନ ଭୋଜନ କିମ୍ବା ରାତ୍ରୀ ଭୋଜନ ପାଇଁ ଉପଯୁକ୍ତ।',
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
    mealType: 'dinner',
    dietaryType: 'non-veg',
    description: 'Delicious stir-fried noodles with tender chicken, fresh vegetables, and a savory sauce. A quick and satisfying meal that comes together in minutes.',
    description_od: 'କୋମଳ ଚିକେନ୍, ସତେଜ ପନିପରିବା ଏବଂ ଏକ ସୁସ୍ୱାଦୁ ସସ୍ ସହିତ ସ୍ୱାଦିଷ୍ଟ ଷ୍ଟିର-ଫ୍ରାଏଡ୍ ନୁଡୁଲ୍ସ। ଏକ ଶୀଘ୍ର ଏବଂ ସନ୍ତୋଷଜନକ ଭୋଜନ ଯାହା ମିନିଟ୍ ମଧ୍ୟରେ ପ୍ରସ୍ତୁତ ହୁଏ।',
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
    mealType: 'breakfast',
    dietaryType: 'non-veg',
    description: 'A healthy and colorful dish featuring tender chicken with a medley of fresh green vegetables. Light, nutritious, and full of flavor.',
    description_od: 'ସତେଜ ସବୁଜ ପନିପରିବାର ମିଶ୍ରଣ ସହିତ କୋମଳ ଚିକେନ୍ ସହିତ ଏକ ସ୍ୱାସ୍ଥ୍ୟକର ଏବଂ ରଙ୍ଗୀନ ଖାଦ୍ୟ। ହାଲୁକା, ପୁଷ୍ଟିକର ଏବଂ ସ୍ୱାଦରେ ପରିପୂର୍ଣ୍ଣ।',
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
    mealType: 'snack',
    dietaryType: 'non-veg',
    description: 'A bold and flavorful bowl with spicy marinated chicken, rice, fresh vegetables, and a creamy sauce. Perfect for those who love a little heat.',
    description_od: 'ମସଲାଯୁକ୍ତ ମାରିନେଟ୍ ଚିକେନ୍, ଚାଉଳ, ସତେଜ ପନିପରିବା ଏବଂ ଏକ କ୍ରିମି ସସ୍ ସହିତ ଏକ ସାହସିକ ଏବଂ ସ୍ୱାଦିଷ୍ଟ ବୋଲ୍। ଯେଉଁମାନେ ଟିକିଏ ଗରମ ପସନ୍ଦ କରନ୍ତି ସେମାନଙ୍କ ପାଇଁ ଉପଯୁକ୍ତ।',
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
    mealType: 'dinner',
    dietaryType: 'non-veg',
    description: 'A delicious and healthy Greek-inspired chicken bowl with fresh vegetables and Mediterranean flavors. Made easily in an Instant Pot for a quick weeknight dinner.',
    description_od: 'ସତେଜ ପନିପରିବା ଏବଂ ଭୂମଧ୍ୟସାଗରୀୟ ସ୍ୱାଦ ସହିତ ଏକ ସ୍ୱାଦିଷ୍ଟ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟକର ଗ୍ରୀକ୍-ପ୍ରେରିତ ଚିକେନ୍ ବୋଲ୍। ଶୀଘ୍ର ସପ୍ତାହର ରାତ୍ରୀ ଭୋଜନ ପାଇଁ ଇନଷ୍ଟାଣ୍ଟ ପଟ୍ ରେ ସହଜରେ ପ୍ରସ୍ତୁତ।',
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
  },
  {
    id: 6,
    title: 'Veggie Breakfast Bowl',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 18,
    prepTime: '15 mins',
    time: '15 mins',
    category: 'Bowl',
    mealType: 'breakfast',
    dietaryType: 'veg',
    description: 'A nutritious breakfast bowl packed with fresh vegetables, avocado, eggs, and whole grains. Start your day with energy and flavor.',
    description_od: 'ସତେଜ ପନିପରିବା, ଆଭୋକାଡୋ, ଅଣ୍ଡା ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ଶସ୍ୟରେ ପରିପୂର୍ଣ୍ଣ ଏକ ପୁଷ୍ଟିକର ଜଳଖିଆ ବୋଲ୍। ଶକ୍ତି ଏବଂ ସ୍ୱାଦ ସହିତ ଆପଣଙ୍କ ଦିନ ଆରମ୍ଭ କରନ୍ତୁ।',
    serving: 2,
    cookTime: '15 mins',
    ingredients: [
      '2 eggs',
      '1 avocado, sliced',
      '1 cup quinoa, cooked',
      '1 cup cherry tomatoes',
      '1 cup spinach',
      '1/4 cup feta cheese',
      'Olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Cook quinoa according to package directions',
      'Sauté spinach in olive oil until wilted',
      'Fry or poach eggs to your preference',
      'Arrange quinoa in bowls',
      'Top with spinach, tomatoes, avocado, and eggs',
      'Sprinkle with feta cheese',
      'Season with salt and pepper'
    ],
    nutrition: {
      calories: 380,
      protein: '18g',
      carbs: '42g',
      fat: '16g'
    }
  },
  {
    id: 7,
    title: 'Paneer Tikka Masala',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 32,
    prepTime: '30 mins',
    time: '30 mins',
    category: 'Curry',
    mealType: 'lunch',
    dietaryType: 'veg',
    description: 'Creamy and flavorful Indian curry with marinated paneer cubes in a rich tomato-based sauce. A vegetarian delight that pairs perfectly with naan or rice.',
    description_od: 'ସମୃଦ୍ଧ ଟମାଟୋ-ଆଧାରିତ ସସ୍ ରେ ମାରିନେଟ୍ ପନିର କ୍ୟୁବ୍ ସହିତ କ୍ରିମି ଏବଂ ସ୍ୱାଦିଷ୍ଟ ଭାରତୀୟ କରି। ଏକ ଶାକାହାରୀ ଆନନ୍ଦ ଯାହା ନାନ୍ କିମ୍ବା ଚାଉଳ ସହିତ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ମେଳ ଖାଏ।',
    serving: 4,
    cookTime: '30 mins',
    ingredients: [
      '400g paneer, cubed',
      '2 onions, chopped',
      '3 tomatoes, pureed',
      '1 cup heavy cream',
      '2 tbsp ginger-garlic paste',
      '2 tsp garam masala',
      '1 tsp turmeric',
      '2 tbsp butter',
      'Fresh cilantro'
    ],
    instructions: [
      'Marinate paneer with yogurt and spices for 20 minutes',
      'Grill or pan-fry paneer until golden',
      'Sauté onions in butter until golden',
      'Add ginger-garlic paste and cook for 2 minutes',
      'Add tomato puree and spices, cook for 10 minutes',
      'Stir in cream and paneer',
      'Simmer for 5 minutes and garnish with cilantro'
    ],
    nutrition: {
      calories: 450,
      protein: '22g',
      carbs: '28g',
      fat: '28g'
    }
  },
  {
    id: 8,
    title: 'Grilled Veggie Sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 14,
    prepTime: '20 mins',
    time: '20 mins',
    category: 'Sandwich',
    mealType: 'snack',
    dietaryType: 'veg',
    description: 'A hearty grilled sandwich loaded with fresh vegetables, cheese, and pesto. Perfect for a quick snack or light meal.',
    description_od: 'ସତେଜ ପନିପରିବା, ପନିର ଏବଂ ପେଷ୍ଟୋରେ ଭରପୂର ଏକ ହୃଦୟସ୍ପର୍ଶୀ ଗ୍ରିଲ୍ ସାଣ୍ଡୱିଚ୍। ଶୀଘ୍ର ସ୍ନାକ୍ସ କିମ୍ବା ହାଲୁକା ଭୋଜନ ପାଇଁ ଉପଯୁକ୍ତ।',
    serving: 2,
    cookTime: '20 mins',
    ingredients: [
      '4 slices whole grain bread',
      '1 zucchini, sliced',
      '1 bell pepper, sliced',
      '1 tomato, sliced',
      '4 slices mozzarella cheese',
      '2 tbsp pesto',
      'Butter for grilling',
      'Salt and pepper'
    ],
    instructions: [
      'Grill zucchini and bell pepper until tender',
      'Spread pesto on bread slices',
      'Layer vegetables, tomato, and cheese',
      'Top with another bread slice',
      'Butter the outside and grill until golden',
      'Flip and grill the other side',
      'Cut in half and serve hot'
    ],
    nutrition: {
      calories: 340,
      protein: '16g',
      carbs: '38g',
      fat: '14g'
    }
  }
]

