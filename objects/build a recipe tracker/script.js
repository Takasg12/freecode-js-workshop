const recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
}

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
}

const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
}

const recipe1Name = recipe1.name;
const recipe2CookingTime = recipe2[`cookingTime`];
const recipe3Ingredients = recipe3[`ingredients`];

//menambahkan objek recipe ke dalam array recipes
recipes.push(recipe1, recipe2, recipe3);
const getTotalIngredients = (ingredients) => {
    return ingredients.length;
}

//membuat level kesulitan berdasarkan waktu memasak
const getDifficultyLevel = (cookingTime) => {
    if (cookingTime <= 30) {
        return "easy";
    } else if (cookingTime <= 60) {
        return "medium";
    } else {
        return "hard";
    }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

//memberikan nilai pada bagian totalIngredients dan difficultyLevel pada objek recipe1
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes)