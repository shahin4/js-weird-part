// "use strict";
// eta bebohar korle var chara function er vitor varieable declear korel error dekhabe
// name config ta korte dibena.kintu eta na dile var chara variable dile seta gobal 
// object ke dorebe ebong change korle puro global variable tau change hoye jabe
var x = 23;
console.log(x);
function myfunc(){
    var x = 10;
    console.log(`${x} from my func()`);


}
myfunc(); // output 10 from my func
console.log(x);//  global varibel change hobe na

//console.log(window.x +' '+  "come frome window objec");
/*ভেরিয়েবলে var দিয়ে সেট করলে সেটা সম্পুর্ন নতুন ভেরিয়েবল তৈরি হয়।
উদারন সরুপ যদি code টা নিচের   মত করে লিখা হয়ু তবে কি হবে দেখ
var x = 23;
console.log(x);
function myfunc(){
     x = 10;
    console.log(`${x} from my func()`);


}
এইভাবে লিখলে উপরের global variable টাও change হয়ে যাবে
 */


// var x = 23;
// console.log(x);
// function myfunc(){
//      x = 10;
//     console.log(`${x} from my func()`);


// }
// myfunc(); // output 10 from my func
// console.log(x);//  global varibel change হয়ে যাবে  এখানে দুইটা x ভিন্ন/ একটা window এর  আরেকটা   function এর 
