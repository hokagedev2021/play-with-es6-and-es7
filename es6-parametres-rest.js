// Avant
const nombres = [1, 2, 3, 4, 5, 7];

function somme(nombres) {
  let somme = 0;

  for (let i = 0; i < nombres.length; i++) {
    somme += nombres[i];
  }
  return somme;
}

//console.log(somme(nombres));

// avec es6
// on entre les valeurs libres dans un tableau parametres => varags java
function faireLaSomme(...parametres) {
  console.log(parametres);
  let somme = 0;

  for (let index = 0; index < parametres.length; index++) {
    somme = somme + parametres[index];
  }
  return somme;
}

console.log('Somme avec valeurs libres ' + faireLaSomme(...nombres));
