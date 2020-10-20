// implicit b inding
//explicit binging
//new binging
// window binding

// var printPlayerNameFunction = function (obj) {
//   obj.printPlayerNameFunction = function () {
//     console.log(this.name);
//   };
// };

// var sakib = {
//   name: "sakib",
//   age: 35,
// };
// var tamim = {
//   name: "tamim",
//   age: 35,
// };

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);
// sakib.printPlayerNameFunction();
// tamim.printPlayerNameFunction();

// var Person = function (name, age) {
//   // eta call korel ekta object return kore
//   return {
//     name: name,
//     age: age,
//     printName: function () {
//       console.log(this.name);
//     },

//   };
// };
// var sakib = Person("sakib", 35);
// sakib.printName();

//explicit binging  // prottokko vabe

var printName = function (v1, v2) {
  console.log(`${this.name} is ${v1}, ${v2}`);
};
var v1 = "handsome";
var v2 = "all-rounder";

var sakib = {
  name: "sakib",
  age: 35,
};

var v = [v1, v2];
//printName.call(sakib, v1, v2);
/*
bahirer kono function inner function e use korar jonno...
ekhane call method die bole dicci j sorasori konta
die call hobe.call prothom argument hisbe 
ekta object nei tarpor se osonko argument 
nite pare */
printName.apply(sakib, v);
/*
call r aply same sudhu parthokko hocce
call parameter hisebe ekta ekta kore value nei 
r aply parameter hisebe ekta array nei*/

/*
bind() method same call r moto just parrtokko 
hocce eta sathe sateh call hoina just ekta refrence rake tai 
eta k arkta variabl er vitor rakte hoi */
