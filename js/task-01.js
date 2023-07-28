const allItems = document.querySelectorAll('li.item');
const ItemsQty = allItems.length;

console.log(`Number of categories: ${ItemsQty}`);


allItems.forEach((element) => {

let elementTitle = element.querySelector('h2').textContent;

let oneTitleElements = element.querySelectorAll('li');
let oneTitleElemntsQty = oneTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElemntsQty}`);

});
