// Inverse de l'opérateur rest, preand un tableau et transforme en valeurs libres
// memo technique => spread comme un spray qui diffuse

const nombresASommer = [1, 2, 3];

function somme(nombre1, nombre2, nombre3) {
  return nombre1 + nombre2 + nombre3;
}

console.log('Somme avec spread ' + somme(...nombresASommer));

const fruitsRouges = ['fraise', 'framboise', 'tomate'];
const fruitVerts = ['pomme', 'citron'];
const fruits = [...fruitsRouges, 'kiwi', ...fruitVerts];

//console.log(fruits);

// créer un array à partir d'un ancien
const fruits2 = fruits;
fruits2.push('kaki');
console.log('Fruits2==> ' + fruits2);
console.log('Fruits==> ' + fruits);

const fruits3 = [...fruits];
fruits3.push('poire');
console.log('Fruits3 ==> ' + fruits3);
console.log('Fruits ' + fruits);
