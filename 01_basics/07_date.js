// Dates
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// We can use various methods to convert this date into more readable value.
let myDate = new Date()
// Create a new Date object
const myDate = new Date();

// Log the Date object as a string
console.log(myDate.toString()); // Outputs the date and time in a human-readable format

// Log the date portion of the Date object
console.log(myDate.toDateString()); // Outputs the date in a more readable format (e.g., "Mon Sep 27 2021")

// Log the date and time in the local format
console.log(myDate.toLocaleString()); // Outputs the date and time in the local format (e.g., "9/27/2021, 10:00:00 AM")

// Log the type of myDate
console.log(typeof myDate); // Outputs: "object"

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// Create a new Date object using a recognized format
let myCreatedDate = new Date("2023-01-14"); // YYYY-MM-DD format

// Log the date in the local format
console.log(myCreatedDate.toLocaleString());
// 1/14/2023, 12:00:00 AM



// Get the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now();

// Log the current timestamp
console.log(myTimeStamp); // Outputs the current timestamp in milliseconds

// Assuming myCreatedDate is defined, log its timestamp
console.log(myCreatedDate.getTime()); // Outputs the timestamp of myCreatedDate in milliseconds

// Log the current timestamp in seconds
console.log(Math.floor(Date.now() / 1000)); // Outputs the current timestamp in seconds

// Create a new Date object for the current date and time
let newDate = new Date();
console.log(newDate); // Outputs the current date and time

// Log the current month (0-11, so we add 1 for human-readable format)
console.log(newDate.getMonth() + 1); // Outputs the current month (1-12)

// Log the current day of the week (0-6, where 0 is Sunday)
console.log(newDate.getDay()); // Outputs the current day of the week (0-6)

// Log the current day of the week and the time
console.log(`${newDate.getDay()} and the time `); // Outputs the current day of the week (0-6) and the string "and the time"

// Get the full name of the current weekday
console.log(newDate.toLocaleString('default', {
    weekday: "long",
})); // Outputs the full name of the current weekday (e.g., "Monday")


// 1633046400000 // Example timestamp in milliseconds
// 1633046400000 // Example timestamp of myCreatedDate in milliseconds
// 1633046400 // Example timestamp in seconds
// Mon Sep 27 2021 10:00:00 GMT-0400 (Eastern Daylight Time) // Example current date and time
// 9 // Example current month
// 1 // Example current day of the week (if it's Monday)
// 1 and the time // Example output for the template literal
// Monday // Example full name of the current weekday
