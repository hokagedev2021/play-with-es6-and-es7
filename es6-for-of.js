console.log('.................. Avant es6 ..................');
const fruitsRouges = ['fraise', 'framboise', 'tomate'];

for (let index = 0; index < fruitsRouges.length; index++) {
  console.log("C'est bon " + fruitsRouges[index]);
}
console.log('..................Avec le for of ..........');
// nouveau style de boucle
for (let fruit of fruitsRouges) {
  console.log("C'est bon " + fruit);
}
