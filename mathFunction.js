export const multiply = (num1, num2) => num1 * num2;
export class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello,my person name is ${this.name}`);
    }
}
export const add = (num1, num2) => num1 + num2;
export default class Calculator {
}


