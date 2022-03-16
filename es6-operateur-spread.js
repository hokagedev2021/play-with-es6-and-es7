// Inverse de l'opérateur rest, preand un tableau et transforme en valeurs libres
// memo technique => spread comme un spray qui diffuse
const nombresASommer = [1, 2, 3];

function somme(nombre1, nombre2, nombre3) {
  return nombre1 + nombre2 + nombre3;
}

console.log('Somme avec spread ' + somme(...nombresASommer));

const fruitsRouges = ['fraise', 'framboise', 'tomate'];
const fruitVerts = ['pomme', 'citron'];
const fruits = [...fruitsRouges, ...fruitVerts];

console.log(fruits);
