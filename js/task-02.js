const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item = [];
const list = document.querySelector('#ingredients');
ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");

  item.push(element);  
  list.append(element);
});