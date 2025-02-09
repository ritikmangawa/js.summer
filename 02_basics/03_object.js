// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

//JavaScript is an object-based language. Everything is an object in JavaScript.
// There are 3 ways to create objects.


// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword)













// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// singleton
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
// console.log(JsUser[mySym])

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

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());