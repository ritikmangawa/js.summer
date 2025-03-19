// const tinderUser = new Object()   //singloton object
const tinderUser = {}             //non singloton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                        //fullname is also object
        userfullname: {               //userfullname is also object
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);








const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

//console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget === target);
// Expected output: true

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//++++++++++++++++++++++++++++++++++++++++
    //o bject de-structure and JSON API intro 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // for clean code shortcut

//object de structure
// console.log(courseInstructor);    //hitesh
//console.log(instructor);              //hitesh








// api concept

//json
// {
//     "name": "hitesh",    //key and value both are string
//     "coursename": "js in hindi",
//     "price": "free"
// }


//api in array formate
[
    {},
    {},
    {}
]
