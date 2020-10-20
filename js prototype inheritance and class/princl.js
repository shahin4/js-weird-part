// inheritance by protoype
// function Person(name, age) {
// parent class
//   this.name = name;
//   this.age = age;
// }

// function Cricketer(name, age, type, country) {
// sub class
//   Person.call(this); // duitatr modde conet korrar jonno
//   this.name = name; // jehtu ami ekhan teke call korbo tai
//   this.age = age;
//   this.type = type;
//   this.country = country;
// }

// Person.prototype = {
//   eat: function () {
//     console.log(`${this.name} is eating`);
//   },
// };
// Cricketer.prototype = Object.create(Person.prototype);
/**Person er prototype e
 * ja ace ta cricketer er prototype e nia aslam
 */
// Cricketer.prototype.constructor = Cricketer;
/* erta dara muloto crikeer r contructor k 
overwrite korlam karon cricketer r defalt constructor r 
Person.call nei */
// let sakib = new Cricketer("sakib", 35, "All-rounder", "bangladesh");
// console.log(sakib.eat());

//  inheritance by class
class Person {
  // parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Cricketer extends Person {
  // sub class
  constructor(name, age, type, country) {
    super(name, age); // Person.call() er biporid eta liklam
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}
let sakib = new Cricketer("sakib", 35, "All-rounder", "bangladesh");
console.log(sakib.eat());
