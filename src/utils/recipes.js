const recipes = [
  // **Breakfast Recipes**
  {
    id: 1,
    category: 'breakfast',
    name: 'Savory Sweet Potato Hash',
    estimateTime: '20-25 minutes',
    servings: '2',
    ingredients: [
      '2 medium sweet potatoes, peeled and diced into 1/2-inch cubes',
      '1 tbsp olive oil (or your choice of oil)',
      '1/2 onion, finely chopped',
      '1 bell pepper, diced',
      '1/2 cup cooked or crumbled sausage (optional, or use bacon or veggie sausage)',
      '1 tsp smoked paprika',
      '1/2 tsp garlic powder',
      'Salt and pepper to taste',
      'Fresh parsley or cilantro, chopped (optional, for garnish)',
      '2 eggs (or more, depending on servings)',
      'Hot sauce (optional, for a kick)'
    ],
    steps: [
      'Heat olive oil in a large skillet over medium heat.',
      'Add the diced sweet potatoes and cook, stirring occasionally, for 8-10 minutes until they begin to soften and brown.',
      'Once the sweet potatoes are nearly done, add the chopped onion and bell pepper. Cook for another 3-5 minutes.',
      'Sprinkle in the smoked paprika, garlic powder, salt, and pepper. Stir to coat evenly.',
      'Add sausage or bacon, if using, and stir to combine.',
      'Push the hash mixture to one side of the skillet, leaving space for the eggs. Cook eggs sunny-side-up or scrambled.',
      'Serve with fresh herbs or hot sauce on top.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '185-225 mg',
      sodium: '600-800 mg',
      totalCarbohydrate: '30-35 g',
      protein: '15-20 g'
    }
  },
  {
    id: 2,
    category: 'breakfast',
    name: 'Avocado Toast with Poached Egg',
    estimateTime: '10-15 minutes',
    servings: '2',
    ingredients: [
      '2 slices of whole-grain bread',
      '1 ripe avocado, mashed',
      '2 eggs (for poaching)',
      '1 tbsp olive oil',
      '1 tsp lemon juice',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      'Chopped chives or parsley for garnish'
    ],
    steps: [
      'Toast the bread slices until golden brown.',
      'In a small bowl, mash the avocado with lemon juice, salt, and pepper.',
      'Poach the eggs in simmering water for 3-4 minutes.',
      'Spread mashed avocado evenly on the toast.',
      'Top with poached eggs, and sprinkle with red pepper flakes and chives.',
      'Serve immediately.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '185-225 mg',
      sodium: '300-400 mg',
      totalCarbohydrate: '30-35 g',
      protein: '8-10 g'
    }
  },
  {
    id: 3,
    category: 'breakfast',
    name: 'Banana Pancakes',
    estimateTime: '15-20 minutes',
    servings: '2',
    ingredients: [
      '1 cup whole wheat flour',
      '1 ripe banana, mashed',
      '1 egg',
      '3/4 cup milk (dairy or plant-based)',
      '1 tsp vanilla extract',
      '1 tsp baking powder',
      '1/2 tsp cinnamon',
      'Pinch of salt',
      'Butter or oil for cooking'
    ],
    steps: [
      'In a large bowl, whisk together flour, baking powder, cinnamon, and salt.',
      'In another bowl, mix mashed banana, egg, milk, and vanilla.',
      'Combine wet and dry ingredients, and stir until smooth.',
      'Heat a non-stick skillet over medium heat and lightly grease with butter or oil.',
      'Pour about 1/4 cup of batter per pancake onto the skillet.',
      'Cook for 2-3 minutes on each side, until golden brown.',
      'Serve with maple syrup and fresh berries.'
    ],
    nutrition: {
      totalFat: '10-15 g',
      cholesterol: '35-50 mg',
      sodium: '250-300 mg',
      totalCarbohydrate: '40-45 g',
      protein: '6-8 g'
    }
  },
  {
    id: 4,
    category: 'breakfast',
    name: 'Greek Yogurt Parfait',
    estimateTime: '5 minutes',
    servings: '2',
    ingredients: [
      '1 cup Greek yogurt (plain or flavored)',
      '1/2 cup granola',
      '1/2 cup fresh mixed berries (blueberries, strawberries, raspberries)',
      '1 tbsp honey or maple syrup',
      'Chopped nuts (optional, for topping)'
    ],
    steps: [
      'In two glasses or bowls, layer Greek yogurt, granola, and fresh berries.',
      'Drizzle with honey or maple syrup.',
      'Top with chopped nuts, if desired.',
      'Serve immediately or refrigerate until ready to enjoy.'
    ],
    nutrition: {
      totalFat: '10-12 g',
      cholesterol: '10-20 mg',
      sodium: '50-70 mg',
      totalCarbohydrate: '35-40 g',
      protein: '15-20 g'
    }
  },
  {
    id: 5,
    category: 'breakfast',
    name: 'Spinach and Feta Breakfast Burrito',
    estimateTime: '15 minutes',
    servings: '1',
    ingredients: [
      '1 large whole wheat tortilla',
      '2 eggs, scrambled',
      '1/2 cup spinach, chopped',
      '1/4 cup feta cheese, crumbled',
      '1 tbsp olive oil',
      'Salt and pepper to taste',
      'Salsa or hot sauce (optional)'
    ],
    steps: [
      'Heat olive oil in a skillet over medium heat, then sauté spinach until wilted.',
      'In the same skillet, scramble the eggs and season with salt and pepper.',
      'Lay the tortilla flat and add scrambled eggs, spinach, and feta cheese.',
      'Roll up the tortilla to form a burrito, folding in the sides as you go.',
      'Serve with salsa or hot sauce.'
    ],
    nutrition: {
      totalFat: '18-22 g',
      cholesterol: '220-250 mg',
      sodium: '500-600 mg',
      totalCarbohydrate: '20-25 g',
      protein: '18-22 g'
    }
  },

  // **Lunch Recipes**
  {
    id: 6,
    category: 'lunch',
    name: 'Quinoa Salad with Roasted Vegetables',
    estimateTime: '30-35 minutes',
    servings: '4',
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups mixed vegetables (carrots, bell peppers, zucchini)',
      '2 tbsp olive oil',
      '1 tsp dried oregano',
      '1/2 tsp garlic powder',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '1/4 cup feta cheese (optional)',
      '2 tbsp lemon juice',
      'Fresh parsley, chopped (for garnish)'
    ],
    steps: [
      'Preheat oven to 400°F (200°C).',
      'Toss the vegetables in olive oil, oregano, garlic powder, salt, and pepper. Roast for 20-25 minutes until tender.',
      'Meanwhile, cook the quinoa according to package instructions.',
      'Combine quinoa, roasted vegetables, lemon juice, and feta cheese in a large bowl.',
      'Garnish with fresh parsley and serve.'
    ],
    nutrition: {
      totalFat: '10-12 g',
      cholesterol: '15-20 mg',
      sodium: '250-300 mg',
      totalCarbohydrate: '35-40 g',
      protein: '8-10 g'
    }
  },
  {
    id: 7,
    category: 'lunch',
    name: 'Chicken Caesar Salad',
    estimateTime: '15-20 minutes',
    servings: '2',
    ingredients: [
      '2 chicken breasts, grilled and sliced',
      '4 cups romaine lettuce, chopped',
      '1/4 cup Caesar dressing',
      '1/4 cup grated parmesan cheese',
      'Croutons (optional)',
      'Fresh ground black pepper to taste'
    ],
    steps: [
      'Grill or pan-sear the chicken breasts, then slice them into strips.',
      'Toss the lettuce with Caesar dressing in a large bowl.',
      'Top with grilled chicken, parmesan cheese, and croutons.',
      'Sprinkle with black pepper and serve.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '85-100 mg',
      sodium: '700-800 mg',
      totalCarbohydrate: '10-15 g',
      protein: '35-40 g'
    }
  },
  {
    id: 8,
    category: 'lunch',
    name: 'Avocado Chicken Wrap',
    estimateTime: '10-15 minutes',
    servings: '2',
    ingredients: [
      '2 large tortillas (whole wheat or regular)',
      '2 grilled chicken breasts, sliced',
      '1 ripe avocado, sliced',
      '1/2 cup mixed greens',
      '1/4 cup shredded cheddar cheese',
      '1 tbsp ranch or chipotle dressing'
    ],
    steps: [
      'Warm the tortillas in a skillet for a few seconds.',
      'Layer each tortilla with sliced chicken, avocado, greens, and cheese.',
      'Drizzle with dressing and roll up tightly.',
      'Slice in half and serve.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '60-80 mg',
      sodium: '600-700 mg',
      totalCarbohydrate: '30-35 g',
      protein: '30-35 g'
    }
  },
  {
    id: 9,
    category: 'lunch',
    name: 'Veggie Stir-Fry with Tofu',
    estimateTime: '20-25 minutes',
    servings: '2',
    ingredients: [
      '1 block firm tofu, drained and cubed',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 cup broccoli florets',
      '1 red bell pepper, sliced',
      '1 carrot, julienned',
      '1 tbsp ginger, minced',
      '1 garlic clove, minced',
      '1 tsp sesame seeds (optional)',
      'Cooked rice for serving'
    ],
    steps: [
      'Press tofu to remove excess moisture, then cube it.',
      'Heat sesame oil in a pan over medium heat, and cook tofu until golden brown, 5-7 minutes.',
      'Add garlic and ginger and sauté for 1-2 minutes.',
      'Add vegetables and cook for 5-7 minutes until tender.',
      'Stir in soy sauce and sesame seeds, and serve over cooked rice.'
    ],
    nutrition: {
      totalFat: '18-22 g',
      cholesterol: '0 mg',
      sodium: '800-900 mg',
      totalCarbohydrate: '30-35 g',
      protein: '18-22 g'
    }
  },
  {
    id: 10,
    category: 'lunch',
    name: 'Turkey and Hummus Pita',
    estimateTime: '10 minutes',
    servings: '1',
    ingredients: [
      '1 whole-wheat pita pocket',
      '3-4 slices of turkey breast',
      '2 tbsp hummus',
      '1/4 cup cucumber, sliced',
      '1/4 cup tomato, sliced',
      'Lettuce leaves'
    ],
    steps: [
      'Cut the pita pocket in half and spread hummus inside.',
      'Layer with turkey, cucumber, tomato, and lettuce.',
      'Close the pita and serve.'
    ],
    nutrition: {
      totalFat: '10-12 g',
      cholesterol: '30-40 mg',
      sodium: '400-500 mg',
      totalCarbohydrate: '30-35 g',
      protein: '20-25 g'
    }
  },

  // **Dinner Recipes**
  {
    id: 11,
    category: 'dinner',
    name: 'Grilled Salmon with Asparagus',
    estimateTime: '20 minutes',
    servings: '2',
    ingredients: [
      '2 salmon fillets',
      '1 tbsp olive oil',
      '1 tsp lemon zest',
      '1 tbsp lemon juice',
      '1 bunch asparagus, trimmed',
      'Salt and pepper to taste'
    ],
    steps: [
      'Preheat the grill to medium-high heat.',
      'Drizzle salmon fillets and asparagus with olive oil, lemon juice, salt, and pepper.',
      'Grill the salmon for 4-5 minutes per side.',
      'Grill asparagus for 6-8 minutes until tender.',
      'Serve salmon with asparagus and lemon wedges.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '60-75 mg',
      sodium: '200-250 mg',
      totalCarbohydrate: '8-10 g',
      protein: '30-35 g'
    }
  },
  {
    id: 12,
    category: 'dinner',
    name: 'Spaghetti Aglio e Olio',
    estimateTime: '20 minutes',
    servings: '2',
    ingredients: [
      '200g spaghetti',
      '3 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1/2 tsp red pepper flakes',
      '1/4 cup fresh parsley, chopped',
      'Grated parmesan cheese for serving'
    ],
    steps: [
      'Cook spaghetti according to package instructions.',
      'Heat olive oil in a pan and sauté garlic until golden brown.',
      'Add red pepper flakes and toss the cooked spaghetti in the oil and garlic mixture.',
      'Top with fresh parsley and parmesan cheese.'
    ],
    nutrition: {
      totalFat: '15-20 g',
      cholesterol: '5-10 mg',
      sodium: '200-300 mg',
      totalCarbohydrate: '40-45 g',
      protein: '8-10 g'
    }
  },
  {
    id: 13,
    category: 'dinner',
    name: 'Chicken Stir-Fry with Vegetables',
    estimateTime: '25 minutes',
    servings: '2',
    ingredients: [
      '2 chicken breasts, sliced into strips',
      '1 cup bell peppers, sliced',
      '1 cup broccoli florets',
      '1/2 cup soy sauce',
      '2 tbsp olive oil',
      '1 tsp ginger, minced',
      '1 garlic clove, minced'
    ],
    steps: [
      'Heat olive oil in a large skillet over medium-high heat.',
      'Cook chicken strips until browned, about 5 minutes.',
      'Add vegetables, garlic, and ginger, cooking for 5-7 minutes.',
      'Pour in soy sauce and stir to coat the chicken and vegetables.',
      'Serve hot with rice or noodles.'
    ],
    nutrition: {
      totalFat: '15-18 g',
      cholesterol: '70-85 mg',
      sodium: '700-800 mg',
      totalCarbohydrate: '20-25 g',
      protein: '30-35 g'
    }
  },
  {
    id: 14,
    category: 'dinner',
    name: 'Beef Tacos with Guacamole',
    estimateTime: '20 minutes',
    servings: '4',
    ingredients: [
      '1 lb ground beef',
      '1 packet taco seasoning',
      '8 small taco shells',
      '1 avocado, mashed',
      '1/4 cup cilantro, chopped',
      '1 lime, juiced',
      '1 cup shredded lettuce'
    ],
    steps: [
      'Cook ground beef in a skillet over medium heat, adding taco seasoning and water according to packet instructions.',
      'Mash the avocado with lime juice and cilantro for guacamole.',
      'Warm taco shells and fill them with the beef mixture, lettuce, and guacamole.',
      'Serve with additional toppings as desired.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '60-80 mg',
      sodium: '500-600 mg',
      totalCarbohydrate: '30-35 g',
      protein: '25-30 g'
    }
  },
  {
    id: 15,
    category: 'dinner',
    name: 'Vegetable Lasagna',
    estimateTime: '45 minutes',
    servings: '6',
    ingredients: [
      '9 lasagna noodles, cooked',
      '2 cups ricotta cheese',
      '1 cup mozzarella cheese, shredded',
      '1 cup parmesan cheese, grated',
      '2 cups marinara sauce',
      '1 zucchini, sliced',
      '1 cup spinach'
    ],
    steps: [
      'Preheat oven to 375°F (190°C).',
      'Layer lasagna noodles, ricotta, marinara sauce, zucchini, spinach, and mozzarella in a baking dish.',
      'Repeat layers and finish with mozzarella and parmesan on top.',
      'Bake for 30-35 minutes until bubbly and golden.'
    ],
    nutrition: {
      totalFat: '15-20 g',
      cholesterol: '50-70 mg',
      sodium: '500-600 mg',
      totalCarbohydrate: '40-45 g',
      protein: '15-18 g'
    }
  },

  // **Dessert Recipes**
  {
    id: 16,
    category: 'dessert',
    name: 'Chocolate Lava Cake',
    estimateTime: '20 minutes',
    servings: '2',
    ingredients: [
      '1/4 cup unsalted butter',
      '2 oz dark chocolate, chopped',
      '1/4 cup sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '2 tbsp flour'
    ],
    steps: [
      'Preheat oven to 425°F (220°C).',
      'Melt butter and chocolate together in a microwave or over a double boiler.',
      'Whisk sugar, eggs, and vanilla until combined.',
      'Stir in melted chocolate mixture and flour.',
      'Pour into greased ramekins and bake for 10-12 minutes.',
      'Serve warm, topped with whipped cream or berries.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '100-120 mg',
      sodium: '150-200 mg',
      totalCarbohydrate: '30-35 g',
      protein: '4-6 g'
    }
  },
  {
    id: 17,
    category: 'dessert',
    name: 'Berry Sorbet',
    estimateTime: '10 minutes',
    servings: '4',
    ingredients: [
      '3 cups mixed berries (strawberries, raspberries, blueberries)',
      '1/4 cup sugar',
      '1/4 cup water',
      '1 tbsp lemon juice'
    ],
    steps: [
      'Puree the berries in a food processor until smooth.',
      'Combine sugar, water, and lemon juice in a saucepan and simmer until sugar dissolves.',
      'Cool the syrup and mix with the berry puree.',
      'Freeze the mixture for at least 4 hours or overnight.',
      'Serve scoops of sorbet.'
    ],
    nutrition: {
      totalFat: '0 g',
      cholesterol: '0 mg',
      sodium: '5-10 mg',
      totalCarbohydrate: '25-30 g',
      protein: '1-2 g'
    }
  },
  {
    id: 18,
    category: 'dessert',
    name: 'Vanilla Panna Cotta',
    estimateTime: '15 minutes',
    servings: '4',
    ingredients: [
      '2 cups heavy cream',
      '1/4 cup sugar',
      '1 tsp vanilla extract',
      '1/4 tsp gelatin powder',
      '2 tbsp water'
    ],
    steps: [
      'Heat cream, sugar, and vanilla extract in a saucepan until simmering.',
      'Dissolve gelatin in warm water and stir into cream mixture.',
      'Pour into molds and chill for at least 3 hours.',
      'Serve with fresh berries or a fruit compote.'
    ],
    nutrition: {
      totalFat: '20-25 g',
      cholesterol: '50-60 mg',
      sodium: '20-30 mg',
      totalCarbohydrate: '15-20 g',
      protein: '2-3 g'
    }
  },
  {
    id: 19,
    category: 'dessert',
    name: 'Apple Crisp',
    estimateTime: '45 minutes',
    servings: '6',
    ingredients: [
      '4 large apples, peeled and sliced',
      '1/2 cup rolled oats',
      '1/4 cup brown sugar',
      '1/4 cup butter, softened',
      '1/2 tsp cinnamon',
      '1/4 tsp nutmeg'
    ],
    steps: [
      'Preheat oven to 350°F (175°C).',
      'Toss apple slices with cinnamon and nutmeg and place them in a baking dish.',
      'Mix oats, brown sugar, and butter until crumbly.',
      'Spread oat mixture over apples.',
      'Bake for 35-40 minutes until golden and bubbly.'
    ],
    nutrition: {
      totalFat: '15-20 g',
      cholesterol: '20-25 mg',
      sodium: '100-150 mg',
      totalCarbohydrate: '40-45 g',
      protein: '2-3 g'
    }
  },
  {
    id: 20,
    category: 'dessert',
    name: 'Lemon Bars',
    estimateTime: '30 minutes',
    servings: '12',
    ingredients: [
      '1 cup flour',
      '1/2 cup butter',
      '1/4 cup powdered sugar',
      '2 eggs',
      '3/4 cup sugar',
      '1/4 cup lemon juice',
      '1/4 tsp baking powder'
    ],
    steps: [
      'Preheat oven to 350°F (175°C).',
      'Mix flour, butter, and powdered sugar, then press into a baking pan.',
      'Bake for 15 minutes.',
      'In a separate bowl, whisk eggs, sugar, lemon juice, and baking powder.',
      'Pour over the baked crust and bake for another 10-15 minutes.',
      'Cool, then slice into bars.'
    ],
    nutrition: {
      totalFat: '10-12 g',
      cholesterol: '30-40 mg',
      sodium: '100-150 mg',
      totalCarbohydrate: '30-35 g',
      protein: '2-3 g'
    }
  }
];

export default recipes