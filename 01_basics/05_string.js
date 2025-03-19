const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");             //hitesh50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //string interpolation

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);   //{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);     //hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);          //for hitesh-hc        ite

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());         //remove space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
