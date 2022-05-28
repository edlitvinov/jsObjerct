'use strict';

// errors

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error ('не переданы числа для сложения');
    }
    return a + b;
}

try {
    sum();
} catch(err) {
    console.error(err);
}

console.log('The END.');

// Object

// push, pop - добавляет/удаляет в конец массива
// shift, unshift - добавляет/удаляет вначало

// const num = [1, 2, 3, 4, 5];
// console.log(num.includes(3));

// const dev = {
//     nane: 'John',
//     surname: 'Simpson',
//     age: 30,
//     skills: ['JS', 'HTML', 'CSS'],
//     isMaried: false,
//     addAge() {
//         this.age++;
//         console.log(this);  // this === объекту dev
//     },
//     getMaried() {
//         this.isMaried = true;
//     },
//     getDivorced() {
//         this.isMaried = false;
//     }
// };

// dev.addAge();

// for (let prop in dev) {
//     console.log(prop, dev[prop]);
// };

// const num = [1, 2, 3, 4, 5];

// for (let a of num) {
//     console.log(a);
// }