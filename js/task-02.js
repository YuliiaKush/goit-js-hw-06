const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsIngredientsEl = [];
const listIngridients = document.querySelector('#ingredients');

function createItemEl(arr) {
  arr.map((item) => {
    const listLi = document.createElement("li");

    listLi.classList.add("item");
    listLi.textContent = item;
    itemsIngredientsEl.push(listLi);
  }).join("");

  listIngridients.append(...itemsIngredientsEl);
}

createItemEl(ingredients);
