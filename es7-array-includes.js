// Ajout au prototype de la classe array de la méthode includes
const fruits = ['orange', 'pomme', 'banane'];

// before es7
console.log(fruits.indexOf('pomme'));

if (fruits.indexOf('banane') !== -1) {
  console.log('Dans la liste des fruits');
}

// avec es7

console.log(fruits.includes('orange'));

if (fruits.includes('banane')) {
  console.log('Dans les fruits');
}
