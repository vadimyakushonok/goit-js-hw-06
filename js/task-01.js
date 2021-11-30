const numCategoriesEL = document.querySelectorAll('.item');
console.log(`Number of categories: ${numCategoriesEL.length}`);

const categoriesTitleLength = [];

numCategoriesEL.forEach((el) => {
    categoriesTitleLength.push(`Category: ${el.querySelector('h2').textContent} 
    Element: ${el.querySelectorAll('li').length}`);
}
);

console.log(...categoriesTitleLength);
