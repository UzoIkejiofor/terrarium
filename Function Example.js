// Part A: #1 Initialize your variables

let numMeals = -1;

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'] ;
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

//Part A #2: Complete the mealAssembly function.

function mealAssembly (protein, grains, veggies, beverages, desserts, numMeals) {
    let pantry = [protein, grains, veggies, beverages, desserts];
    let meals = [];

  for(let i = 0; i < numMeals; i++){
      console.log(`Making meal for astronaut #${i}`)
    let meal = []
    for(let j = 0; j < pantry.length; j++){
      meal.push(pantry[j][i]);
     
    }
     console.log(meal);
    meals.push(meals);
  }
    
    return meals;
}

mealAssembly(protein, grains, veggies, beverages, desserts, 6)


