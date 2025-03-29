// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// When comparing a string and a number using the > operator, JavaScript performs type coercion. It converts the string "2" to a number (2) for comparison.
// Since 2 is greater than 1, the expression evaluates to true.

//the reason is that an equaility check == and comparisons   <> >= <= work differently.
//comparison convert null to number . treating it as 0.
//that's why (3)null >=0 is true and (1) null > 0 is false.

console.log(null > 0);        //false
console.log(null == 0);       //false
console.log(null >= 0);       //true

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined < 0);   //false

// === 

console.log("2" === 2);
