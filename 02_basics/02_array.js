// 1. push() method in array simply add the array as an new single entity in the existing array.
// 2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
// 3. Despite push and concat we should use spread operator.
// 4. Intresting methods, isArray(), from() and of()

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     //give array in the array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) join to array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]     // method to join to array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)      //[ 1, 2, 3 4 5 6 7 6 7 4 5]
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting
// Check if "Hitesh" is an array
console.log(Array.isArray("Hitesh")); // Outputs: false

// Convert the string "Hitesh" into an array of characters
console.log(Array.from("Hitesh")); // Outputs: ['H', 'i', 't', 'e', 's', 'h']

// Convert an object with a name property into an array
console.log(Array.from({name: "hitesh"})); // Outputs: []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   [100, 200, 300]
