'use strict'

//2.1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

let { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);


//2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);


//2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

var {name, race} = animalFunction();


//2.4 
const car = {marca: 'Mazda 6', itv: [2015, 2011, 2020] };

let { marca, itv} = car;
let [itv2015, itv2011, itv2020] = itv;

console.log(marca);
console.log(itv);
console.log(itv2015);
console.log(itv2011);
console.log(itv2020);
