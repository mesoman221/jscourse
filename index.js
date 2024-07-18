// variable = A container that stores a value.
//            Behaves as if it were the value it contains.


// 1. declaration   let x;
// 2. assignment    x = 100;


let x;
x = 123;

// this can be done together:  let x = 123;


console.log(x);


let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

// backticks can also be used :)

console.log(`You are ${age} years old man!`)
console.log(`The price of this item is $${price}.`)
console.log(`Your gpa is: ${gpa}`)

//to display the type of a variable

console.log(typeof gpa);

//now onto strings...

let firstName = "Bro";
let favoriteFood = "Pizza";
let email = "bro123@gmail.com"  //strings can be used for numbers, but cant be used for math

console.log(typeof firstName);
console.log(`Hello there, your name is ${firstName}!`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

//now onto booleans

let online = true; //or false

console.log(`${firstName} is online: ${online}. `);  //if false, displays false

let forSale = true;

console.log(`Is this car for sale? : ${forSale}`);

let isStudent = false;

console.log(`Enrolled: ${isStudent}`);

//typically, we don't use booleans for direct output but instead for if/else statements