// Примитивы и условия

// Напиши функцию, которая принимает число и возвращает "Положительное", "Отрицательное" или "Ноль".
//function declaration
function getNegativePositive(num){
    if (num > 0){
        return "Positive"
    } else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
} 
//console.log(getNegativePositive(4))
//console.log(getNegativePositive(-4))
//console.log(getNegativePositive(0))

// Функция принимает строку и проверяет, пуста ли она.
// function isEmptyString(str){
//     if(str.length){
//         return true
//     } else {
//         return false
//     }
// }
// const isEmptyString = (str) => str.length > 0
// const isEmptyString = (str) => !!str.length
//arrow function
const isEmptyString = (str) => {
    return str.length > 0
}

//console.log(isEmptyString("kot"))
//console.log(isEmptyString(""))
//console.log(isEmptyString("e"))

// Функция принимает два числа и возвращает большее из них.
// const getMaxNumber = (a, b) => {
//     if(a > b){
//         return a
//     }else {
//         return b
//     }
// }
// function getMaxNumber(a, b){
//     return Math.max(a, b)
// }
// const getMaxNumber = (a, b) => Math.max(a, b)

// const getMaxNumber = (a, b) => a > b ? a : b

const getMaxNumber = (a, b) => {
    return a > b ? a : b
}

const a = getMaxNumber(12, 15)

//console.log(getMaxNumber(12, 15))
//console.log(getMaxNumber(12, 9))
//console.log(getMaxNumber(12, 12))

// Функция принимает строку и возвращает её длину, если длина больше 5 — верни "Длинная", иначе "Короткая".

// const getStringLength = (str) => str?.length > 5 ? "long" : "short" 

function getStringLength(str = ""){
    return str.length > 5 ? "Long" : "Short"
}

//console.log(getStringLength("Кайрат"))
//console.log(getStringLength("Кайты"))
//console.log(getStringLength())

// Функция принимает число и возвращает "Чётное" или "Нечётное".
// const getEvenOdNumber = (num) => {
//     if(num % 2 === 0){
//         return "Even number"
//     } else{
//         return "Odd number"
//     }
// }

function getEvenOdNumber(num){
    if(num % 2 === 0){
        return "Even (чётное)number"
    } else{
        return "Odd (нечёт)number"
    }
}
//console.log(getEvenOdNumber(21))
//console.log(getEvenOdNumber(101))
// Функция принимает булевое значение и возвращает "Да" если true, иначе "Нет".
// const getAnswer = (a, b) =>{
//     if (a < b ){
//         return "Yes"
//     }else {
//         return "No"
//     }
// }
const getAnswer = (a, b) => a < b ? "Yep" : "NOOO"

// //console.log(getAnswer(1, 4))
// //console.log(getAnswer(9, 4))

// Функция принимает температуру и возвращает "Горячо", "Прохладно" или "Холодно".
// function getTheWeather(temp){
//     if (temp > 27){
//         return "Hot"
//     }else if(temp >= 9 && temp <= 27){
//         return "Cool"
//     }else {
//         return "Cold"
//     }
// }
// const getTypeOfCoffee = (milk = 0, coffee = 0) =>{
//     if(milk === 0 && coffee === 0) return "no coffee"
//     return milk > coffee ? "latte" : coffee > milk ? "amerikano" : "cappuchino"
// }

// const coffeeType0 = getTypeOfCoffee(2, 1)
// const coffeeType1 = getTypeOfCoffee(2, 4)
// const coffeeType2 = getTypeOfCoffee(3, 3)
// const coffeeType3 = getTypeOfCoffee()

// console.log(coffeeType0)
// console.log(coffeeType1)
// console.log(coffeeType2)
// console.log(coffeeType3)

function getTypeOfCoffee(milk = 0){
    const coffeeCount = 10;
    switch(true){
        case milk > coffeeCount : return "Latte";
        case milk < coffeeCount : return "Americano";
        default : return "Cappucino";
    }
}
// console.log(getTypeOfCoffee(3))
// console.log(getTypeOfCoffee(14))
// console.log(getTypeOfCoffee(10))
// console.log(getTypeOfCoffee(0))




//console.log(getTheWeather(56))
//console.log(getTheWeather(16))
//console.log(getTheWeather(6))


// Функция принимает возраст и возвращает "Совершеннолетний" или "Несовершеннолетний".
let getAge = (num) => num >= 18 ? "Совершеннолетний" : "Несовершеннолетний";

//console.log(getAge(19))
//console.log(getAge(17))

// Функция принимает число и возвращает "Меньше 10", "Равно 10", "Больше 10".
function getSumm(num){
    if(num < 10){
        return "Меньше 10"
    }else if(num === 10){
        return "Равно 10"
    }else {
        return"Больше 10"
    }
}
//console.log(getSumm(19))
//console.log(getSumm(10))
//console.log(getSumm(9))

// Функция принимает две строки и возвращает "Совпадают" или "Не совпадают".
let getVerbs = (str1, str2, ) => {
    if(str1 == str2){
        return "Совпадают"
    }else {
        return "Не совпадают"
    }
}
//console.log(getVerbs("kotok", "kotok"))
//console.log(getVerbs("kotok", "chochko"))


// Объекты

// Функция принимает объект {name, age} и возвращает "Имя: ..., Возраст: ..."

function getString(person){
    return `Имя: ${person.name}, Возраст: ${person.age}`
}

const person1 = {
    name: "Belek",
    age: 24,
}


const person2 = {
    name: "Izat",
    age: 23,
}
// console.log(getString(person1))
// console.log(getString(person2))



// Функция принимает объект {price, discount} и возвращает цену со скидкой.
// price / 100 * discount
// price * discount / 100
function getPriceWithDiscount(obj){
    return obj.price - ((obj.price / 100) * obj.discount) + obj.nds + obj.delivery
}
const product = {
    price: 25,
    discount: 10,
    nds: 10,
    delivery: 100
}
const product2 = {
    price: 40,
    discount: 20,
    nds: 10,
    delivery: 100
}
const product3 = {
    price: 100,
    discount: 10,
    nds: 50,
    delivery: 100
}

// console.log(getPriceWithDiscount(product))
// console.log(getPriceWithDiscount(product2))
// console.log(getPriceWithDiscount(product3))


// Функция принимает объект {isOnline: true/false} и возвращает "В сети" или "Не в сети".

const getOnlineStatus = (obj) => obj.isOnline ? "В сети" : "Не в сети"

const stat = {
    isOnline: true
}
const stat2 = {
    isOnline: []
}

// console.log(getOnlineStatus(stat))
// console.log(getOnlineStatus(stat2))

// Функция принимает объект {a, b} и возвращает их сумму.

// Функция принимает объект {country, capital} и возвращает строку "Столица страны ... — ...".

// Функция принимает объект {x, y} и возвращает "Ось X", "Ось Y" или "В центре", если оба равны 0.

// Функция принимает объект {firstName, lastName} и возвращает полное имя.

// Функция принимает объект {password} и проверяет, длиннее ли пароль 8 символов.

// Функция принимает объект {grade} и возвращает "Отлично", "Хорошо", "Плохо".

// Функция принимает объект {likes} и возвращает "Популярно", если больше 1000.


// Функция принимает объект {width, height} и возвращает площадь прямоугольника.

// Функция принимает объект {radius} и возвращает длину окружности.

// Функция принимает объект {price, discount} и возвращает цену со скидкой.

// Функция принимает объект {a, b, c} и возвращает наибольшее число.

// Функция принимает объект {age} и возвращает "Совершеннолетний" или "Несовершеннолетний".

// Функция принимает объект {temp} и возвращает "Жарко", "Прохладно" или "Холодно".

// Функция принимает объект {year} и проверяет, является ли год високосным.

// Функция принимает объект {speed} и возвращает "Превышение", если больше 100.

// Функция принимает объект {hours, rate} и возвращает зарплату (hours * rate).

// Функция принимает объект {num} и возвращает "Четное" или "Нечетное".

// Функция принимает объект {word} и возвращает длину слова.

// Функция принимает объект {a, b} и возвращает результат деления a / b, если b ≠ 0, иначе "Ошибка".

// Функция принимает объект {username} и возвращает "Длинное имя", если больше 10 символов.

// Функция принимает объект {month} и возвращает время года.

// Функция принимает объект {age} и возвращает категорию: "Ребёнок", "Подросток", "Взрослый".

// Функция принимает объект {number} и возвращает "Положительное", "Отрицательное" или "Ноль".

// Функция принимает объект {length, width} и возвращает "Квадрат", если стороны равны.

// Функция принимает объект {a, b, operation} и выполняет одно из действий: +, -, *, /.

// Функция принимает объект {score} и возвращает "Победа", если больше 50, иначе "Поражение".

// Функция принимает объект {balance} и возвращает "Долг", "Ноль", или "Профицит".

// Primitive type
// 1) number -- 1,2,3,4,5,6,7,8
// 2)string -- "alfabe", 'a,b,c,d', `a,s,d,f,g`
// 3)boolean -- true, false, !0, !!0, (>=,<=,==,<,>,===), &&, ||
// 4)null -- null
// 5)undefined -- undefined

// Reference type
// 6)object -- 
// 7)array


const person = {
    name: "Izat",
    age: 20,
    height: null,
    weight: undefined,
    // address: {
    //     city: "Bishkek",
    //     country: "KG",
    //     street: "Toko",
    //     coordinates: {
    //         lat: 100,
    //         long: 200
    //     }
    // }
}

person.name = "Kairat"
person.age = 23
person.mail = "kot@mail.ru"
person.mail = "kotemes@mail.ru"

const izat = person
const kairat = {...person}

izat.age = 30
kairat.age = 45
// console.log(izat)
// console.log(person)
// console.log(kairat)


//primitive: number, string, boolean, null, undefined
//reference: object, array, function
let generateNumber = () => {
    return Math.random()
}
const result = generateNumber()

const GENDER = {
    male: "male",
    female: "female"
}
const car = {
    model: "Honda",
    year: 1999,
    isNew: true,
    colors: ["blue", "red"],
    getGovNumber: function (){
        return generateNumber()
    },
    country: null,
    gender: undefined,
    owner: {
        gender: GENDER.male
    }
}
car.country = "Kyrgyzstan"
car.isOnline = false
car.city = {}
car.getdata = function (){}
delete car.colors[0]
car.colors[0] = "black"
delete car.colors

// console.log(car.getGovNumber())
// console.log(car)

let arrCar = [
    "black", 1, false,
    function (){}, GENDER
]
arrCar.push(67)
arrCar.shift()
arrCar.pop()
arrCar.unshift("toko")

// console.log(arrCar.slice(0, 1))
let arrNew = [234]
let foko = getNewFunc(["gau", arrNew])

function getNewFunc(arr){
    //function declaration
    arr === ["gau", [234]]
    // console.log(arr)
    return arr
}
let getNewFunc2 = (a, b, c, d) =>{
    //arrow function
    return a + b + c + d
}
let sum = getNewFunc2(1,2,3,4)

// console.log(sum)
// console.log(foko)

function getSum(a, b){
    return a + b
}
getSum(2, 5)
getSum(3, 5)


function map(smm){
    const result = maga("pop", 100)
    if(result > 100){

    }
}

let maga = (arg, salary) =>{
    // console.log(arg)
}

let kake = (arg, salary) =>{
    // console.log(arg)
}

map(maga)




// function car(motor){
//     const result = motor(2)
//     if(result){
//         console.log("Drive")
//     }
// }
//
// function amg(oil){
//     if(oil){
//         console.log("Work")
//         return true
//     }else{
//         return false
//     }
//
// }
//
// function v8(oil){
//     if(oil){
//         console.log("Work")
//         return true
//     }else{
//         return false
//     }
// }
//
// car(amg)
// car(v8)

// 1. Дан массив чисел. Используя map, верни новый массив, где каждое число увеличено на 10.
let arrNumbers = [1, 2, 3];
let sumArr = arrNumbers.map((nums) => nums + 10)
// console.log(sumArr)

// 2. Дан массив строк. Используя map, верни новый массив, где каждое слово в верхнем регистре.
const arrString = ["function", "array", "object"];
const upperCase = arrString.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
// console.log(upperCase)

// 3. Дан массив объектов {name, age}. С помощью map создай новый массив, где возраст увеличен на 1.
let arrObjNew = [
    {name: "Maga", age: 14,},
    {name: "Poco", age: 17,},
    {name: "Itachi", age: 12,}
]
const objAgePlus = arrObjNew.map(person => {return {name: person.name, age: person.age + 1}})
// console.log(objAgePlus)

// 4. Дан массив чисел. Создай функцию doubleNumbers(arr), которая возвращает новый массив с удвоенными значениями через map.

// 5. Дан массив имён. Верни массив, где к каждому имени добавлено "!".
const arrNames = ["Asan", "Uson", "Hasan"];
const nameFalse = arrNames.map(names => names + "!")
// console.log(nameFalse)

// 6. Создай функцию getLengths(arr), которая принимает массив строк и возвращает массив их длин (map).
function getLengths(arr){
    return arr.map(str => str.length)
}
let stringArr = ["FUNCTION", "Array"];
// console.log(getLengths(stringArr))

// 7. Дан массив {price: number}. Верни новый массив, где price умножен на 1.2 (добавить 20% налога).
const getNum = (args) => {
    return args.map(p => ({price: p.price * 1.2}))
}
const arrPrice = [
    {price: 100},
    {price: 50}
]
let price = getNum(arrPrice)
// console.log(price)

// 8. Дан массив чисел. Используя map, верни массив строк вида "Value: X".

// 9. Дан массив чисел. Используя map, верни массив булевых значений: true, если число чётное, иначе false.
let getBoolNums = (nums) => nums.map(b => b % 2 === 0 ? true : false)
let numsOdOrEven = [2, 3, 4, 5, 6];
const bool = getBoolNums(numsOdOrEven)
// console.log(bool)

// 10. Дан массив строк. Верни массив, где каждое слово начинается с заглавной буквы.
const newArr = [
    "decleration", "arrow", "primitive", "reference"
]
const firstLetter = newArr.map(function (args){return args.charAt(0).toUpperCase() + args.slice(1)})
// console.log(firstLetter)

// 11. Дан массив объектов {name, score}. Верни массив только с именами.
let newArr1 = [
    {
        name:"Messi",
        score: 10,
    },
    {
        name:"Ronaldo",
        score: 7,
    }
]
const nameReturn = newArr1.map(function(args){return args.name})
// console.log(nameReturn)

// 12. Создай функцию toNegative(arr), которая превращает все положительные числа в отрицательные.
function toNegative(arr){
    return arr.map(nums = (neg) => neg > 0? -(neg) : neg)
}
let arr1= [1, 2, 3, 4, -55, 0];
// console.log(toNegative(arr1))

// 13. Дан массив дат (строки). С помощью map верни массив только годов.

// 14. Дан массив {firstName, lastName}. Верни массив строк "firstName lastName".
let arrReturnString = [
    true, {firstname:"Kairat", lastname:"Aliiasbekov"}, 12
];
let arr3 = arrReturnString.slice(1, 2)
const retStr = arr3.map(ret = (arg) => arg);
// console.log(arr3)

// 15. Дан массив чисел. Верни массив квадратов этих чисел.
let arrNums = [2, 3, 4, 5]
const squareOfNum = arrNums.map(x => Math.pow(x, 2))
// console.log(squareOfNum)

// 16. Создай функцию addIndex(arr), которая возвращает массив объектов вида {index, value}.
function addIndex(arr){
    return arr.map((value, index) => ({value, index}))
}
let myArr = ["nan", "et", "buka"];
let fuck = addIndex(myArr)
// console.log(fuck)

// 17. Дан массив цен. Верни массив скидок 10% от каждой цены.
const discount = (args) => {
    return args.map(num => num / 10 * 9)
}
let arrDiscount = [10, 20, 30];
let count = discount(arrDiscount)
// console.log(count)

// 18. Дан массив температур в Цельсиях. Верни их преобразование в Фаренгейты.
function temp(args){
    return args.map(args => (args * 9/5) + 32 )
}
let celsius = [0, 5, 22, 32];
const fahrenheit = temp(celsius)
// console.log(fahrenheit)

// 19. Дан массив слов. Верни массив, где каждое слово заменено его длиной.
let arrStr = ["java", "script"]
const returnLength = arrStr.map(args => args.length)
// console.log(returnLength)

// 20. Дан массив строк. Верни массив, где каждое слово + его длина, например "Hello (5)".
let retStrLength = (args) => {
    return args.map(word => `${word} ` + word.length )
}
let words =["fakanafoko", "Izatik"];
const end = retStrLength(words)
// console.log(end)

// 21. Дан массив объектов {name, salary}. Верни массив, где salary увеличена на 15%.

function getSalary(args){
    return args.map(dada => `Начальная зп: ${dada.salary}  После добавки: ` +  ((dada.salary / 100 * 15) + dada.salary))
}
let newArr2 = [
    { name: "Mahabat",salary: 70},
    { name: "Gachi",salary: 40},
    { name: "Gang",salary: 60}
]
let salaryPoint = getSalary(newArr2)
// console.log(salaryPoint)

// 22. Создай функцию wrap(arr), которая заворачивает каждый элемент в объект вида {value: ...}.
// 23. Дан массив чисел. Верни массив, где каждое число + его индекс.
// 24. Дан массив имён. Верни массив объектов {id: index, name: value}.
// 25. Дан массив строк. Верни массив первых букв каждого слова.
// 26. Дан массив объектов {a, b}. Верни массив сумм a + b.
// 27. Дан массив чисел. Создай функцию reverseStringNumbers(arr), которая превращает числа в строки и переворачивает их "123" → "321".
// 28. Дан массив имен. Верни новый массив, где каждое имя превращено в объект {original, upper}.
// 29. Дан массив чисел. Верни массив, где числа заменены на "even" или "odd".
// 30. Дан массив объектов {name, age}. Верни массив только возрастов, умноженных на 2.