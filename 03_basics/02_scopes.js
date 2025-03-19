// if (true) {
//     let a = 10
//     const b = 20 
//     var c = 30
// }
// console.log(a);   //error
// console.log(b);        //error
// console.log(c);     //30 due to var

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++++++++++++++++++++++++++++++++++++
//scope level and mini hoisting in javascript 
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);      //give error website ka scope to khatam ho gya

     two()        //hitesh

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);    //error
}

// console.log(username);    //give error username ka scope nhi hai


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)       //here error will come due to hosting
const addTwo = function(num){
    return num + 2
}
