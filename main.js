// Continue from yesterday with Control Flow
// The Switch case statement

// get current day (0-6)
let day = new Date().getDay();

console.log(day) // tues=2
// get current day (Sun-Sat)

let literal_day = new Date().toString();
console.log(literal_day) //Tue Aug 10 2021 12:03:43 GMT-0400 (Eastern Daylight Time)

// Switch Case Statement Syntax
switch(day){ //let day = new Date().getDay();
    case 0:
        console.log('Go to church');
        break;
    case 1:
        console.log("Write code...it's Monday!!")
        break;
    case 2:
        console.log("Test Code...it's Tuesday!!")
        break;
    case 3:
        console.log("Testing more code on Wed")
        break;
    case 4:
        console.log("Write a feature for project on Thurs")
        break;
    case 5:
        console.log("Testing Feature on Friday")
        break;
    case 6:
        console.log('Rest on Sat')
        break;
    default:
        console.log("We don't have a case to handle that")
}


// Literal Day Example with Switch Case Syntax
switch(literal_day.split(" ")[0]){ //(Tues = index 0) Aug 10 2021 12:03:43 GMT-0400 (Eastern Daylight Time)
    case'Sun':
        console.log('Go to church');
        break;
    case'Mon':
        console.log("Write code...it's Monday!!")
        break;
    case'Tue':
        console.log("Test Code...it's Tuesday!!")
        break;
    case 'Wed':
        console.log("Testing more code on Wed")
        break;
    case 'Thurs':
        console.log("Write a feature for project on Thurs")
        break;
    case 'Fri':
        console.log("Testing Feature on Friday")
        break;
    case 'Sat':
        console.log('Rest on Sat')
        break;
    default:
        console.log("We don't have a case to handle that")
}

// -- Creation of Objects in JavaScript
// -- Simple JavaScript Object --

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing Data in our Object
console.log(person['name']) // Bracket Notation //john
console.log(person.name) // Dot Notation //john

// -- Complex JavaScript Object
let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}

console.log(person2.prog_languages[2]); //C++
console.log(person2.teams[1].soccer[0]); //Manchester United

// -- JavaScript Object Prototype Methods -- Object Literal
console.log(Object.keys(person2)) //["name", "age", "prog_languages", "fav_color", "teams"]
console.log(Object.values(person2)) //["Max", 31, Array(4), "Blue", Array(2)]

// Bad/Sad Path of looping through objects in JavaScript
//for(let i = 0; i < person2.length; i++){
//    console.log(person2[i])
//}

// Happy Path of looping through objects in Javascript -- Looking for keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// List Values from the person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    } else{//(4) ["JavaScript", "Python", "C++", "Java"]
        console.log("Not an Array")
    }
}// look back

// Create our own Object Prototypes -- with ES5 Method Syntax
function Car(make,model,year){

    this.make = make;
    this.model = model;
    this.year = year;

    // A Method inside of a JS Prototype
    this.printInfo = (color, wheels = 0) => {
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}.
        and has ${wheels} and the color is ${color}`);

        return 'Done'
    }
}

// Creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019)

// Call our prototype method
console.log(my_car.printInfo('Red')) //(color, wheels = 0)


// -- JavaScript Classes -- //

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}

// Creating an instance of our Human Class

let jessica = new Human('Jessica', 29, 'Female');

// Use printInfo method from the instantiated wilma(Human) Class
console.log(jessica.printInfo())


// JavaScript Inheritence using Classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabywalking() {
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby aint walking yet'
        }
    }
}

// Create an instatiated value for baby
let johnnie = new Baby('Johnnie', 1, 'Male', true);
console.log(johnnie.printInfo())
console.log(johnnie.isBabywalking())

// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

*/

let count_up = (() => {
    let counter = 0; // This will be our PRIVATE variable
    console.log('Count') //count
    return () => { return counter++}
})()
console.log(count_up()) //0
console.log(count_up()) //1
console.log(count_up()) //2
console.log(count_up()) //3

let addNames = (() => {
    let names = [];
    console.log('Adding Names')
    return (name) => {
        console.log(`Addin ${name} into array..`)
        names.push(name) //
        return names
    }
})() // look back

console.log(addNames('Nates'))
console.log(addNames('Marcus'))
console.log(addNames('Brian'))


// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example
let first = () => {
    console.log(1)
}

let second = () => {
    console.log(2)
}

//first() //1
//second() //2

// But what happens when we add delay to execution...
let first_delay = () => {
    // Simulation of delay
    setTimeout(() => {
        console.log(1)
    }, 5000)
};

let second_delay = () => {
    // Simulation of delay
    console.log(2)
};// look back
    

//first_delay()
//second_delay()

// Callback function syntax
let doHomework = (subject, callback) =>{
    alert(`Starting my ${subject} homework`) //show alert first 
    callback() //go ahead and callback, next line
}

doHomework('JavaScript', () => {
    console.log('Done with Homework') //subject is javascript //callback= done with hw
})

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// We solve this above problem with Promises

/*
    ======= Creating a JS Promise =====
*/
const isEvenNumber = (num) => {
    return new Promise( (resolve,reject) => {
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using a JS Promise
isEvenNumber(10)
//Happy resolver path
.then( (result) => {
    console.log(`Even Number ${result}`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Odd Number ${error}`)
})



// Another Example with Promises -- using Async/Await
// base
let increase_salary = (base, increase) =>{
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function to add to base salary slowly
let slow_addition = (n1, n2) => {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}

increase_salary(4000,2000)

console.log(slow_addition(4000, 2000))
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 42000
// main.js:329 

//this will return an unresoleved promise and attempt to excute reminiang code because we didnt tell js to wait
let increase_slow_salary = (base, increase) => {
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}
increase_slow_salary(4000, 2000) //New Salary: [object Promise]


// this async function waits for a promise resolution or eorror ro continue exceuting
//meant to simulate waiting for  a spefiic user input or some sort of incoming data
let async_increase_salary = async(base, increase) => {  //async means wait on something
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}
async_increase_salary(4000,4000) //


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.values(person3)[i]) }


//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// USE ES5 or ES6
// Create our Person Prototype/Class

class Hong {
    constructor(name,age) {

    this.name = name;
    this.age= age;
    }
// Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`My name is ${this.name}, and I am ${this.age} years old`)
    }
// Create another arrow function for the addAge method that takes a single parameter
    addAge = () => {
        return this.age += 1
    }
}

// Adding to the age 
let Timothy = new Hong('Timothy', 29);
let Harry= new Hong('Harry', 29);

console.log(Timothy.addAge()) 
console.log(Timothy.addAge())
console.log(Timothy.addAge())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number' */

const lengthy = (stringy) => {
    return new Promise( (resolve,reject) => {
        if(stringy.length >=10) {
            resolve('Big word')
        } else {
            reject('Small word')
        }
    })
}
// Using a JS Promise
lengthy(`howlongisthis`)
//Happy resolver path
.then( (result) => {
    console.log(`Big word`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`small word`)
})

https://www.codewars.com/kata/56dec885c54a926dcd001095/solutions/javascript
function opposite(number) {
    return(-number);
}

https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript
const isPalindrome = (line) =>
  String(line) ===
  String(line)
    .split('')
    .reverse()
    .join('')


