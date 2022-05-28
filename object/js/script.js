'use strict';

// Object

const dev = {
    nane: 'John',
    surname: 'Simpson',
    age: 30,
    skills: ['JS', 'HTML', 'CSS'],
    isMaried: false,
    addAge() {
        this.age++;
        console.log(this);  // this === объекту dev
    },
    getMaried() {
        this.isMaried = true;
    },
    getDivorced() {
        this.isMaried = false;
    }
};

dev.addAge();

// for (let prop in dev) {
//     console.log(prop, dev[prop]);
// };

// const num = [1, 2, 3, 4, 5];

// for (let a of num) {
//     console.log(a);
// }