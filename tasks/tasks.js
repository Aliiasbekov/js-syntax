// 🔢 Numbers (1–10)

// Declare a variable and assign your favorite number.

var favoriteNumber = 22;

// Add two numbers and store the result in a variable.

var summa = 2 + 2;


// Subtract one number from another.

var subtract = 4 - 2;

// Multiply two numbers and store the result.

var multiply = 2 * 2

// Divide one number by another and store the result.

var divide = 9 / 3;

// Find the remainder when 10 is divided by 3 using %.
let remainder = 10 % 3;

// Increment a variable by 1 using ++.
let increment = 2;
increment + 1;

// Decrement a variable by 1 using --.
let decrement = 3;
decrement--;

// Use parentheses to control the order of operations: 5 + 3 * 2
let parentheses = (5 + 3) * 2;

// Combine multiple operators: ((10 + 2) * 3) - 4
let combine = ((10 + 2) * 3) - 4;
// //console.log(combine)

// 🧵 Strings (11–20)

// Declare a variable with a string value: "Hello"

var str1 = "Hello";

// Declare another variable with a string value: "World"

var str2 = "World";

// Concatenate both with a space in between using +.

// //console.log(str1 + " " + str2)

// Access the first character of a string using [0].
let str4 = "Символ";
let firstChar = str4[0];

// Access the second character using [1].
let secondChar = str4[1];
// //console.log(firstChar + " " + secondChar)

// Combine string and number using +: "Age: " + 25
let str5 = "Age: " 
let str6 = "25"
// //console.log(str5 + str6)

// Store your first name and last name in two variables, then combine with a space.
let userName = "Kairat"
let userSurname = "Aliiasbekov"
// //console.log(userName + " " + userSurname)

// Create a sentence using 3 string variables.
let sentences1 = "Если ты это"
let sentences2 = " читаешь, значит"
let sentences3 = " ты умеешь читать."
// //console.log(sentences1 + sentences2 + sentences3)

// Store a string with your favorite color.
let favColor = "Red"

// Add a string with punctuation, like "Wow" + "!"
let shok = "Wow"
let punct = "!"
//console.log(shok + punct)

// ✅ Booleans (21–30)

// Create a variable with value true.
const kyrgyz = true
//console.log(kyrgyz)

// Create a variable with value false.
const kirgiz = false
//console.log(kirgiz)
// Compare two numbers using >.
let bool = 2 > 3
// Compare two numbers using <.
let bool1 = 2 < 3
//console.log(bool1)

// Check if 5 == '5' and comment the result.
let num = 5 == '5'
//console.log(num + " :result")

// Check if 5 === '5' and comment the result.
let num2 = 5 === '5'
//console.log(num2 + " :result2")

// Use !== to compare two values.
let bool2 = 1 !== 1
//console.log(bool2)

// Use && to combine two boolean values.  Оператор && возвращает true только если оба значения true.
let ten = true;
let eleven = true;
let numbers = ten && eleven;
//console.log(numbers)

// Use || to combine two boolean values. Он возвращает true, если хотя бы одно из условий истинно.
let sunny = false;
let rainy = false;
let weathers = sunny || rainy;
//console.log(weathers)

// Use ! to flip the value of a boolean.
let zero = 0;
let nums = !!zero;
//console.log(nums)

// ⚙️ Operators (31–38)

// Use += to add 5 to a variable.
let addition = 1;
addition += 5;
//console.log(addition)

// Use -= to subtract 3 from a variable.
let subtraction = 1;
subtraction -= 3;
//console.log(subtraction)

// Use *= to multiply a variable by 2.
let multiply2 = 1;
multiply2 *= 2;
//console.log(multiply2)

// Use /= to divide a variable by 4.
let divide2 = 2;
divide2 /= 4;
//console.log(divide2)

// Use %= to find remainder and assign it.
let n1  = 3
n1 %= 2

// Use == to compare a number and a string: 10 == "10"
//console.log(10 == "10", "compare ==")

// Use === to compare the same values.
//console.log(10 === "10", "10 === '10'")

// Create a greeting message like:
let names = "Alex";
let age = 20;
let message = "Hi " + names + ", you are " + age + " years old.";

// STRINGS

//console.log("My age " + 1 + "My name is " + "Izat")
const name1 = "Izat"
//console.log(`My age false 1 My name is ${name1}`)

const name2 = "Kairat"
// console.log(name2[Math.ceil(name2.length / 2 - 1)])
// console.log(Math.ceil((name2.length + 1) / 2 - 1))

// Type Примитивные & Ссылочный
// Примитивные типы: string, number, boolean, bigint, undefined, null
// Ссылочные типы: Object

// const nu1 = new Number(1)
// console.log(typeof nu1)

// let vr = 1
// let vr2 = 1
// vr = 2
// console.log(vr)
// console.log(vr2)

// const user = {
//     name: "Izat",
//     age: 22
// }

// const user2 = user

// user2.age = 2

// console.log(user)
// console.log(user2)

// user.sayHello()
// user2.sayHello()

const user = {
    name : "user 1",
    age: 22,
}

// user.name = "User 2"
// const user2 = {...user}
// user.age = 1
// console.log(user2.age)

// Array

const arr = [1, 2, 3, 2]
// console.log(arr)

// const teamA = {
//     teamName: "Class a",
//     members: arr,
//     winner: true,
//     score: 3
// }

// teamA.score
arr.push(4) // Add to end
arr.unshift(0) // Add to start
arr.pop() // Delete from end
arr.shift() // delete from start

const twoIndex = arr.indexOf(2) // Find Index of element from start, if not exist -1
const lastTwoIndex = arr.lastIndexOf(2) // Find Index element from end, if not exist -1

// console.log(newArr)

// console.log(arr)

// console.log(new Date())


// Function
//Declaration, name, arguments, block code, 
// function getSum(a, b){
//     const obj = {
//         name: "Kairat",
//         age: 22
//     }
//     const res = a * 2
//     res += b
//     res += obj.age
//     // console.log(obj)
//     obj.age = 24
//     return res
// }

// const result = getSum(3,4)
// const result2 = result + getSum(1,2)
// console.log(result)


// function sayHello(name="Person"){
//     return `Hello my name is ${name}`
// }

// console.log(sayHello("Kairat"))


// function getName(name){
//     name += " Kot"
//     return name
// }

// console.log(getName("Izat"))

const documents = (moneyCount) => {
   console.log("Appying docs")
    return moneyCount > 100
}

const employes = () => {
    console.log("Find employees")
}

const usloviya = () => {
    console.log("Usloviya tuzdu")
}

const ish = () => {
    console.log("ish pastaldy")
}
const createCompany = () => {
    const result = documents(101)
    if(result) {
        employes()
        usloviya()
        ish()
    }
}

createCompany()