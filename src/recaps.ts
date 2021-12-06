import { animation } from "@angular/animations";

const username: string | number = 'Antonn';

const sum = (a: number, b: number) => {
    return a + b;
}
sum(1,9);

console.log(sum);

class Person {
  constructor( public age:number, public lastName: string) {
  }
}
const antonn = new Person( 15, 'Fernandez');
antonn.age;
