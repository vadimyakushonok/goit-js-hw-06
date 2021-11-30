const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElArray = [];

ingredients.forEach(element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  ingredientEl.classList.add('item');
  ingredientsElArray.push(ingredientEl);
})

const list = document.getElementById('ingredients');
list.append(...ingredientsElArray);

