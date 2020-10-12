if (true){
    var varbariable = 'this is var';
    var varbariable = 'again this var'// eta somvob
    console.log(varbariable);
}
//console.log(varbariable); eta kora jabe
if(true){
    let letvariable = 'this is let';

   //consolelet letvariable = "again this is let" // eta somvbo na punorai declear hobena
   //letvariable = 'something'//  eta hobe ekhane valu change korci notun kore declear korcina
   console.log(letvariable);
   console.log(letvariable);
}
//console.log(letvariable); eta kora jabena


if(true){
    const constvariable =  'this is const';
    console.log(constvariable);
    // constvariable = 'something new' // eta somvob na



}
// kintu eta somvob na
if(true){
    const person = {
        name: 'shhain alam',
        age: 23,
    }
    person.email = 'shainrajr@gmail.com;' // eta kora jabhe
    console.log(person);
}



/* var diye kono kicu define korle seta function scope hoi orthak puro windota teke jodi function mone kore tahole sei varibal ta
oi functione ace. tai seta bahiret teke acces kora jai.erokom boro project jodi hoi jodi amra var die variable define kori
tahole hote hapre oi name global ba window te varibale ace .hoito seta ami replace kore dibo noito sei variabl amrata replace kore dibena
orthak eita sudhu functon er vitor simabodd takcena.
k



kintu let die defien kolre seta sudhi amader bloc coder variabl bujhai onno kono jagar ba glpbal varibaler satehe name config korbe
na.
asole sob programming e eibabe kaj kore blokc er vitorer variabl bahire kaj korte deina
tik let die korle eomon hoi.kintu var die korle seta global er sathe config hoye jai


note: var die variable define korle amra punorai seta abar  define korte pari seketre puro sob blog er vribal change hoye jabe



let vs const
let ar const eki just let ke amra reassign korte pari
kintu const ke korte parina
kintu const jodi object hoi tahole notun kore assign korte parbona kintu notun valu add korte parbo
*/

 /**
  kintu var jodi function er vitore take tahole seta ke ar bahir teke acces kora jabena karon var hocce function scope
  */

  // examples
  function f(){
      var a = 50;
      console.log(a);
  }

  //console.log(a); // eta kora jabe na
  f()