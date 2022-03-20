// destructuring
const nombrres = [1, 2, 3];

//const a = nombres[0];
//const b = nombres[1];
const [a, b, c, d] = nombrres;
const [e, ...f] = nombrres;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(e);
console.log(f);

// pour sauter une valeurs
const [g, , h] = nombrres;
console.log(h);

// pour intervertir des variables
let i = 10;
let j = 20;

[j, i] = [i, j];

console.log(i);
console.log(j);
