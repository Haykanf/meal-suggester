const recipes = {
    "Vegetable Omelette": {
        ingredients: ["eggs", "onion", "bell pepper", "salt", "pepper", "olive oil"],
        difficulty: 2,
        healthScore: 5,
        steps: [
            "Beat eggs in a bowl",
            "Chop vegetables into small pieces",
            "Heat olive oil in a pan",
            "Cook vegetables until soft",
            "Pour in eggs and cook until set"
        ],
        image: "https://source.unsplash.com/featured/?omelette"
    },
    "Beef Stir-Fry": {
        ingredients: ["beef strips", "broccoli", "carrots", "soy sauce", "ginger", "garlic", "rice", "sesame oil"],
        difficulty: 3,
        healthScore: 4,
        steps: [
            "Slice beef into thin strips",
            "Chop vegetables into bite-sized pieces",
            "Stir-fry beef until browned",
            "Add vegetables and sauce",
            "Serve over cooked rice"
        ],
        image: "https://source.unsplash.com/featured/?stirfry"
    },
    "Margherita Pizza": {
        ingredients: ["pizza dough", "tomato sauce", "fresh mozzarella", "basil leaves", "olive oil", "garlic", "salt", "tomatoes"],
        difficulty: 3,
        healthScore: 3,
        steps: [
            "Prepare pizza dough and let rise",
            "Spread tomato sauce on dough",
            "Add sliced mozzarella",
            "Bake until crust is golden",
            "Top with fresh basil"
        ],
        image: "https://source.unsplash.com/featured/?pizza"
    },
    "Sushi Roll": {
        ingredients: ["sushi rice", "nori seaweed", "salmon", "cucumber", "avocado", "wasabi", "soy sauce", "pickled ginger"],
        difficulty: 4,
        healthScore: 4,
        steps: [
            "Prepare sushi rice",
            "Layer nori with rice",
            "Add fish and vegetables",
            "Roll tightly with bamboo mat",
            "Slice into pieces"
        ],
        image: "https://source.unsplash.com/featured/?sushi"
    },
    "Greek Salad": {
        ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "olives", "olive oil", "oregano", "bell pepper"],
        difficulty: 1,
        healthScore: 5,
        steps: [
            "Chop all vegetables",
            "Cut feta into cubes",
            "Mix ingredients in bowl",
            "Drizzle with olive oil",
            "Season with oregano"
        ],
        image: "https://source.unsplash.com/featured/?greek,salad"
    },
    "Butter Chicken": {
        ingredients: ["chicken thighs", "yogurt", "butter", "tomato sauce", "cream", "garam masala", "ginger", "garlic"],
        difficulty: 4,
        healthScore: 3,
        steps: [
            "Marinate chicken in yogurt",
            "Cook chicken until golden",
            "Prepare creamy tomato sauce",
            "Combine chicken with sauce",
            "Simmer until thick"
        ],
        image: "https://source.unsplash.com/featured/?curry"
    },
    "Veggie Burger": {
        ingredients: ["black beans", "quinoa", "onion", "garlic", "breadcrumbs", "egg", "spices", "burger buns"],
        difficulty: 3,
        healthScore: 4,
        steps: [
            "Mash black beans",
            "Mix with cooked quinoa",
            "Form into patties",
            "Cook until crispy",
            "Serve on buns"
        ],
        image: "https://source.unsplash.com/featured/?burger"
    },
    "Pad Thai": {
        ingredients: ["rice noodles", "shrimp", "tofu", "bean sprouts", "peanuts", "eggs", "fish sauce", "tamarind"],
        difficulty: 4,
        healthScore: 3,
        steps: [
            "Soak noodles until soft",
            "Stir-fry shrimp and tofu",
            "Add noodles and sauce",
            "Cook eggs in the mix",
            "Top with peanuts"
        ],
        image: "https://source.unsplash.com/featured/?noodles"
    },
    "French Toast": {
        ingredients: ["bread", "eggs", "milk", "cinnamon", "vanilla", "butter", "maple syrup", "berries"],
        difficulty: 2,
        healthScore: 2,
        steps: [
            "Mix eggs with milk and spices",
            "Dip bread in mixture",
            "Cook in butter until golden",
            "Top with syrup",
            "Add fresh berries"
        ],
        image: "https://source.unsplash.com/featured/?french,toast"
    },
    "Chicken Caesar Salad": {
        ingredients: ["chicken breast", "romaine lettuce", "parmesan", "croutons", "caesar dressing", "garlic", "lemon", "anchovies"],
        difficulty: 2,
        healthScore: 4,
        steps: [
            "Grill chicken breast",
            "Chop lettuce",
            "Make caesar dressing",
            "Combine ingredients",
            "Top with parmesan"
        ],
        image: "https://source.unsplash.com/featured/?caesar,salad"
    },
    "Mushroom Risotto": {
        ingredients: ["arborio rice", "mushrooms", "white wine", "onion", "parmesan", "butter", "garlic", "broth"],
        difficulty: 4,
        healthScore: 3,
        steps: [
            "Sauté mushrooms",
            "Toast rice with onions",
            "Add wine and reduce",
            "Gradually add hot broth",
            "Finish with parmesan"
        ],
        image: "https://source.unsplash.com/featured/?risotto"
    },
    "Fish Tacos": {
        ingredients: ["white fish", "tortillas", "cabbage slaw", "lime", "avocado", "cilantro", "sour cream", "hot sauce"],
        difficulty: 3,
        healthScore: 4,
        steps: [
            "Season and cook fish",
            "Prepare cabbage slaw",
            "Warm tortillas",
            "Assemble tacos",
            "Add toppings"
        ],
        image: "https://source.unsplash.com/featured/?tacos"
    },
    "Chocolate Lava Cake": {
        ingredients: ["dark chocolate", "butter", "eggs", "sugar", "flour", "vanilla", "salt", "powdered sugar"],
        difficulty: 4,
        healthScore: 1,
        steps: [
            "Melt chocolate and butter",
            "Mix with other ingredients",
            "Pour into ramekins",
            "Bake until edges set",
            "Serve warm"
        ],
        image: "https://source.unsplash.com/featured/?chocolate,cake"
    },
    "Mediterranean Quinoa Bowl": {
        ingredients: ["quinoa", "chickpeas", "cucumber", "tomatoes", "feta", "olives", "red onion", "herbs"],
        difficulty: 2,
        healthScore: 5,
        steps: [
            "Cook quinoa",
            "Roast chickpeas",
            "Chop vegetables",
            "Make dressing",
            "Combine all ingredients"
        ],
        image: "https://source.unsplash.com/featured/?quinoa,bowl"
    },
    "Tom Yum Soup": {
        ingredients: ["shrimp", "mushrooms", "lemongrass", "lime leaves", "chili", "fish sauce", "coconut milk", "cilantro"],
        difficulty: 4,
        healthScore: 4,
        steps: [
            "Prepare aromatic broth",
            "Add mushrooms",
            "Cook shrimp",
            "Season to taste",
            "Garnish with herbs"
        ],
        image: "https://source.unsplash.com/featured/?soup"
    },
    "Apple Pie": {
        ingredients: ["apples", "pie crust", "cinnamon", "sugar", "butter", "lemon juice", "flour", "egg wash"],
        difficulty: 4,
        healthScore: 2,
        steps: [
            "Prepare pie crust",
            "Slice and season apples",
            "Fill crust with apples",
            "Add top crust",
            "Bake until golden"
        ],
        image: "https://source.unsplash.com/featured/?pie"
    },
    "Falafel Wrap": {
        ingredients: ["chickpeas", "herbs", "spices", "flatbread", "tahini", "lettuce", "tomatoes", "cucumber"],
        difficulty: 3,
        healthScore: 4,
        steps: [
            "Blend chickpea mixture",
            "Form and fry falafels",
            "Make tahini sauce",
            "Warm flatbread",
            "Assemble wrap"
        ],
        image: "https://source.unsplash.com/featured/?falafel"
    },
    "Beef Lasagna": {
        ingredients: ["ground beef", "pasta sheets", "ricotta", "mozzarella", "tomato sauce", "onion", "garlic", "herbs"],
        difficulty: 4,
        healthScore: 3,
        steps: [
            "Make meat sauce",
            "Prepare cheese mixture",
            "Layer ingredients",
            "Cover with cheese",
            "Bake until bubbly"
        ],
        image: "https://source.unsplash.com/featured/?lasagna"
    },
    "Acai Bowl": {
        ingredients: ["acai puree", "banana", "berries", "granola", "honey", "coconut flakes", "chia seeds", "almond butter"],
        difficulty: 2,
        healthScore: 5,
        steps: [
            "Blend acai with fruits",
            "Pour into bowl",
            "Add toppings",
            "Drizzle with honey",
            "Serve immediately"
        ],
        image: "https://source.unsplash.com/featured/?acai,bowl"
    },
    "Chicken Biryani": {
        ingredients: ["basmati rice", "chicken", "yogurt", "onions", "biryani spices", "saffron", "mint", "ghee"],
        difficulty: 5,
        healthScore: 3,
        steps: [
            "Marinate chicken",
            "Prepare rice",
            "Layer chicken and rice",
            "Add saffron milk",
            "Steam until done"
        ],
        image: "https://source.unsplash.com/featured/?biryani"
    }
};

export { recipes };
