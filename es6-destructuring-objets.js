const myObject = {
  nom: 'John',
  age: 32,
  present: function () {
    console.log('Hello');
  },
};

const { nom, age, present } = myObject;
const { nom: nom1, age: age1 } = myObject;

console.log(nom1);
console.log(age1);

present();
