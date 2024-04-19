export const multiply = (num1:number,num2:number) => num1*num2;

export class Person {
     name:string;
     constructor(name:string){
        this.name = name;
     }
     greet(){
        console.log(`Hello,my person name is ${this.name}`);
     }
}

export const add = (num1:number,num2:number) => num1 +num2;
export default class Calculator{
    
}