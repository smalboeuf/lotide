const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["Greetings", "testing", "words"];
console.log(tail(words));
assertEqual(words.length, 3);