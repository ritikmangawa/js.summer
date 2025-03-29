// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

//JavaScript is an object-based language. Everything is an object in JavaScript.
// There are 3 ways to create objects.


// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword)













// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// singleton         //if we decclare object as literal then singleton did not form but if make by constructor then singleton formed
// Object.create    //construction method ke through

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   //syntax for using a symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   //for object acess method
// console.log(JsUser["email"])//////// it is also imp
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   //how access symbol

JsUser.email = "hitesh@chatgpt.com"     
// Object.freeze(JsUser)       //user for freeze a object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //string interpolation
}

// Call the greeting method
console.log(JsUser.greeting());  // Outputs: "Hello JS user" and then undefined (because console.log() logs the return value, which is undefined)

// Call the greeting method reference
console.log(JsUser.greeting);  // Outputs: the function reference

// Call the greetingTwo method
console.log(JsUser.greetingTwo()); // Outputs: "Hello JS user, John"


console.log(JsUser.greeting());  //undefined
console.log(JsUser.greeting);  //only function reference
console.log(JsUser.greetingTwo());
