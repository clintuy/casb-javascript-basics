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

// // Example No. 2 - Array Objects
// const Person = [

//     {
//         id: 1,
//         fullName: "Clintuy Design",
//         email: "test1@test.com",
//         device: "Mobile"
//     },
//     {
//         id: 2,
//         fullName: "Wystuy Design",
//         email: "test2@test.com",
//         device: "Mobile"
//     },
//     {
//         id: 3,
//         fullName: "Tabiboy Design",
//         email: "test3@test.com",
//         device: "Desktop"
//     },
//     {
//         id: 4,
//         fullName: "Matt Design",
//         email: "test4@test.com",
//         device: "Desktop"
//     },
// ];
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
// ---------------------------------------------------

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
// ---------------------------------------------------

// Function types
// let x = 10;
// let y = 20;

// // aritmethic +, -, *, /, %, **
// function GetSum(x, y) {
//     return x + y;
// }
// ---------------------------------------------------

// // Function - ES6
// const GetSum = (x, y) => {
//     return x + y;
// }

// OR

// if less condition
// const GetSum = (x, y) => x + y;
// console.log(GetSum(100, 300));
// ---------------------------------------------------

// OOP Class Concept


// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = () => {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate Object
// const newPerson = new Person('Clintuy', 'Design');

// console.log(newPerson.getFullName());
// ---------------------------------------------------

// DOM(Document Object Model) Selection

// const form = document.getElementById("<id>"); = using attribute ID get value from HTML
// const form2 = document.getElementsByClassName("<class>") using Class attribute get value from HTML
// const form3 = document.querySelector("<#id> or <.name>"); using (#) -> for ID (.) -> for ClassName get value from HTML - RECOMMENDED
// const form4 = document.querySelectorAll("<#id> or <.name>") using (#) -> for ID (.) -> for ClassName formatted with array

// const ul = document.querySelector(".items");

//Removing
// ul.remove(); = remove ul data
//ul.lastElementChild.remove(); = remove ul lastElementChild
// ul.firstElementChild.remove();

//Adding
// ul.firstElementChild.textContent = "ClintuyDesign"; = add ul firstElementChild
// ul.children[2].innerText = "ClintuyDesign" = change value base on index no
// ul.lastElementChild.innerHTML = "<h3>ClintuyDesign</h3>" change with html tags

// console.log(ul);


// const btnLogin = document.querySelector('#btnLogin');
// btnLogin.style.background = 'red';

// // DOM Events
// const btnLogin = document.querySelector('#btnLogin');
// const loginContainer = document.querySelector('.login-container');


// btnLogin.addEventListener("click", function(e) {
//     e.preventDefault();

//     loginContainer.style.background = 'black';

    
// });

// Form Validation
const btnLogin = document.querySelector('#btnLogin');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    

    if(username.value.length == 0) {
        alert("Username Field Required!");
    }
    else if(password.value.length == 0) {
        alert("Password Field Required!");
    }
    else {
        alert(`${username.value} and ${password.value} is this`)
    }
});





