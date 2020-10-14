// let person = {};  // eta js e object korar easy oway sobceye common oway ebong eta ekta empty obejct

// person.name = 'shofik'; // eivabe objectg e property add korte hoi
// person.age = 26;

// person.eat = function(){
//     console.log('person is eating'); // egulo k method bole
// }

// person.sleep = function(){
//     console.log('person is sleeping');
// }
//
/*
real life projecte erokom procur object pryojon
hoy sekketre amra ki korte parina
 sekketre ki amra bar bar erokom objet banabo na.
 nicer moto kore amra etake simlyfi korte parina
 */

// function Person(name, age){
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = function(){
//         console.log('person is eating');  // egulo share method
//     };

//     person.sleep = function(){
//         console.log('person is sleeping'); //egulo share method
//     };
//     return person; // person object k return korlam
//  }

// const sakib = Person("sakib",35);
// const tamim = Person("Tamim",35);
//
/*
ekhane duita object bidhai tmn prblm hoina
kintu real life amdr onk object nie kaj 
korte hbe sekettre eta prbm hbe 
karon amdr osonkho object banate hobe

tai amra jei method gulo share kora jai segulo 
jodi amra ekta common object hiseb ber korel
niye alada ekta object r vitor rakte pari  
tahole jokon amra object crate korbo tokon
amra sei common object k reffr korte parbo
*/

// new code like these:
// const personMethods = {
//     eat(){
//                 console.log('person is eating'); // person.eat likar dorkar nai
//             },

//     sleep(){
//                 console.log('person is sleeping'); //egulo share method
//             },        // object bidhai coma dicci
// };

// function Person(name, age){
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = personMethods.eat;
//     person.sleep = personMethods.sleep;
/*
    ekhaneu ekta prblm ace seta hocce 
    uopre ekta object creat kore kore ese reffrecen krote hoi
    sutorang etau ekebare sohoj oway na
    
    
    suorang amra cai j person method ja ace ta jno 
    person object automatic refrence korte par
    r ei kraone amra use korbo (object.crate)*/

//     return person;
//  }

// const sakib = Person("sakib",35);
// const tamim = Person("Tamim",35);

// how to use object.crate

// notun ekta object creat korr
// const captain = {
// eta parent object
//   name: "Masrafe",
//   age: 36,
//   country: "Bangladesh",
// };
// const player = Object.create(captain); // ager ta use kore new object banalam eta hocce child object
// console.log(player); // ekta blank object pabo
/*
sudhu player ta k console korle emty show korbe
kintu tar maen ei na j ekhane kicu nai.
jokon amra player.age console korbo tokon
dekabe 36.
karon player hocce child r captain hocce parent jokon amra 
player.child dei tokon js deke j child r kace age ace kina jodi pai tahole seta print kore
r na pele tar parent e deke ace kina sekhane pele setai print kore
r eta korte pare prototype r karone*/

// punorai object.crate use kore kori

const personMethods = {
  eat() {
    console.log("person is eating"); // person.eat likar dorkar nai
  },

  sleep() {
    console.log("person is sleeping"); //egulo share method
  }, // object bidhai coma dicci
  play() {
    console.log("person is playing");
  },
};

function Person(name, age) {
  let person = Object.create(personMethods); // personMethods teke notun object banalam
  /*
sutoran ekhankar sob property method person pabe tai ekhaen alada
kore person.eat = ; ebabe use korte hbe na */
  person.name = name; // jehetu egulo parent r kace nai tai die dici
  person.age = age;

  return person;
}

const sakib = Person("sakib", 35);
sakib.play();
const tamim = Person("Tamim", 35);
tamim.play();

/*
ekhan lokkino j amdr object.creat korci sta tik ace kintu
amdr arkta object r upor depend takte hhoce
ba assistant lagce
 */
