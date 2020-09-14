// // Array - Basics
// const Fruits = [
//     "Apple",
//     "Grapes",
//     "Banana",
//     "Dalandan",
//     "Santol"
// ];

// .push = add value to last

// . unshift = add value to start

// . pop = remove the last value

// Array.isArray(<variable>) = check if the object is array

// <variable>.indexOf("<value>") = check the index number of a certain value

// <variable>.splice(<indexNo>, <countWhereTo>) = check of array where to remove from - to, first param is the index No / second param is count number


// Examples :

// // push
// Fruits.push("New Fruits");
// console.log(Fruits);

// // unshift
// Fruits.unshift("New Fruits");
// console.log(Fruits);

// // pop
// Fruits.pop("Santol");
// console.log(Fruits);

// // Array.isArray
// console.log(Array.isArray(Fruits));

// // indexOf
// console.log(Fruits.indexOf("Apple"));

// // splice
// Fruits.splice(1, 1);
// console.log(Fruits);
// ---------------------------------------------------

// Object Literals -> Mostly used on API's

// // Example No. 1 - Objects
// const Person = {

//     firstName: 'Clintuy',
//     lastName: 'Design',
//     age: 35,
//     hobbies: [
//         'Programming',
//         'Designing',
//         'Cycling'
//     ],
//     school: {
//         college: "STI",
//         highSchool: "CKCA",
//         elementary: "JGES"
//     }
// };
// ---------------------------------------------------

// Example No. 2 - Array Objects
const Person = [

    {
        id: 1,
        fullName: "Clintuy Design",
        email: "test1@test.com",
        device: "Mobile"
    },
    {
        id: 2,
        fullName: "Wystuy Design",
        email: "test2@test.com",
        device: "Mobile"
    },
    {
        id: 3,
        fullName: "Tabiboy Design",
        email: "test3@test.com",
        device: "Desktop"
    },
    {
        id: 4,
        fullName: "Matt Design",
        email: "test4@test.com",
        device: "Desktop"
    },
];
// ---------------------------------------------------

// // For Loop
// for (let i = 0; i < Person.length; i++) {

//     // process
//     // variable i = 0; i less than equal to n; i increment
//     // if i less than equal to 10
//     // i increment, loop, repeat until i less than equal n is false

//     // console.log(Person[i].fullName);
// }
// ---------------------------------------------------
// // While Loop
// let i = 0;

// while (i < Person.length) {

//     // process
//     // variable i = 0; i less than equal to n;
//     // if i less than equal to n
//     // loop, i increment, repeat until i less than equal n is false

//     // console.log(Person[i].fullName);
//     i++;
// }
// ---------------------------------------------------

// // For Loop - another way for object
// for (let person of Person) {

//     console.log(person.fullName);
// }
// ---------------------------------------------------

// // Foreach Key - key is like an index
// Object.keys(Person).forEach(key => {
//     console.log(Person[key].fullName);
// });
// ---------------------------------------------------

// // Foreach Values
// Object.values(Person).forEach(person => {
//     console.log(person.fullName);
// });
// ---------------------------------------------------

// // Foreach Entries - key is like an index
// Object.entries(Person).forEach(entry => {
//     const [key, person] = entry;
//     console.log(person.fullName);
// });
// ---------------------------------------------------

// // Foreach - Best way to loop object
// Person.forEach(function (person) {
//     console.log(person.fullName);
// });
// ---------------------------------------------------

// // Foreach - Map, specific value needed
// const PersonFullName = Person.map(function (person) {
//     return person.fullName;
// });
// ---------------------------------------------------

// // Foreach - Filteration
// const PersonFullName = Person.filter(function (person) {
//     return person.device == "Mobile";
// });
// ---------------------------------------------------

// // Foreach - Connecting Function
// const PersonFullName = Person.filter(function (person) {
//     return person.device == "Mobile";
// }).map(function (person) {
//     return person.fullName;
// });

// console.log(PersonFullName);
// ---------------------------------------------------

// // JSON - JavaScript Object Notation
// const PersonJSON = JSON.stringify(Person);
// console.log(PersonJSON);


// // Conditionals
// const x = 300;

// // if ===, !== identical; same value and datatype
// // if ==, != same value
// // double condition: ||, &&, !=

// if (x == 100 || x > 200) {
//     console.log("true");
// } else if (x > 200) {
//     console.log("value is greater than 100");
// } else {
//     console.log("not 100");
// }

// Function types
let x = 10;
let y = 20;

// aritmethic +, -, *, /, %, **
function GetSum(x, y) {
    return x + y;
}

console.log()