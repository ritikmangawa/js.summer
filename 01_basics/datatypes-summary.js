//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// these are call by value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);             //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}// datatype is object


const myFunction = function(){
    console.log("Hello world");
}// data type is function

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//+++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive) u will get copy of declared variable ,   Heap(non primitive)  here u will get reference , meanse if u do some change then change happen in orginal memory


let myYoutube =  "hiteshchoudarydotcom"

let anothername = myYoutube
anothername  = "Chaiaurcode"

console.log(myYoutube);   //"hiteshchoudarydotcom"
console.log(anothername);    //"Chaiaurcode"

let userOne = {
    email:  "user@googel.com",
    upi:    " user@ybl"

}
let userTwo   = userOne
userTwo.email = "rkchoudhary0812@gmail.com"

console.log(userOne.email);    //rkchoudhary0812@gmail.com
console.log(userTwo.email);    //rkchoudhary0812@gmail.com
