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
function getSum(obj){
    return obj.a + obj.b
}
const summa = {
    a: 39,
    b: 61
}
// console.log(getSum(summa))

// Функция принимает объект {country, capital} и возвращает строку "Столица страны ... — ...".
const getCapitalOfCountry = (obj) => {
    return `Столица страны ${obj.country} - ${obj.capital}`
}
const data = {
    country: "Kyrgyzstan",
    capital: "Bishkek"
}
// console.log(getCapitalOfCountry(data))

// Функция принимает объект {x, y} и возвращает "Ось X", "Ось Y" или "В центре", если оба равны 0.
function getAxis(obj){
    return obj.x > obj.y ? "Ось X" : obj.x < obj.y ? "Ось Y" : obj.x === 0 && obj.y === 0 ? "В центре" : "Оси одинаковые"
}
const axisXY = {
    x: 0,
    y: 0
}
// console.log(getAxis(axisXY))

// Функция принимает объект {firstName, lastName} и возвращает полное имя.
const getFullName = (obj) => {
    return obj.firstName + obj.lastName
}
const fullName = {
    firstName: "Изат ",
    lastName: "Тилек уулу"
}
// console.log(getFullName(fullName))
// Функция принимает объект {password} и проверяет, длиннее ли пароль 8 символов.
function getPassword(obj){
    return obj.key.length > 8 ? "Чётко" : obj.key.length < 8 ? "Пароль должен содержать больше 8 символов" : "ok"
}
const password = {
    key: "махач34.,"
}
// console.log(getPassword(password))

// Функция принимает объект {grade} и возвращает "Отлично", "Хорошо", "Плохо". ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function getAssessment(obj){
    return obj.assessment > 100 || obj.assessment < 0 ? "Нет такой оценки!" : obj.assessment >= 87 ? "Отлично" : 
    obj.assessment >= 74 ? "Хорошо" : obj.assessment >= 61 ? "Удовлетворительно" : "Плохо"
}
const grade = {
    assessment: -1
}
// console.log(getAssessment(grade))

// Функция принимает объект {likes} и возвращает "Популярно", если больше 1000.
function getLikes(obj){
    return obj.popular > 1000 ? "Популярно" : "hmmm"
}


const likes = {
    popular: 500
}
const likes2 = {
    popular: 1000
}
// console.log(getLikes(likes))
// console.log(getLikes(likes2))

// Функция принимает объект {width, height} и возвращает площадь уч бурчтук.
const getSquare = (obj) => (obj.width * obj.height) / 2
const rectangle = {
    width: 5,
    height:4
}
// console.log(getSquare(rectangle))

// Функция принимает объект {radius} и возвращает длину окружности.
function getSurrounded(obj){
    return  2 * Math.PI * obj.radius
}
const radiusOfRounded = {
    radius: 3
}
// console.log(getSurrounded(radiusOfRounded))


// Напиши функцию sum(a, b), которая возвращает сумму двух чисел. ----------------------------------------------------------------------------
function getSumOfAB(a, b){
    return a + b
}
// console.log(getSumOfAB(10, 35))

// Создай стрелочную функцию isEven(num), которая возвращает true, если число чётное.
const getEvenOrOd = (num) =>{
    return num % 2 === 0 ? true : false
}
// console.log(getEvenOrOd(50))

// Сделай функцию greet(name), которая возвращает строку "Привет, <name>!".
function getGreet(str){
    return `Привет, ${str}!`
}
// console.log(getGreet("Harry"))

// Функция square(n) возвращает квадрат числа.
function getSquar(num1){
    return Math.pow(num1, 2)                      //Math.pow - вычисления на квадрат числа
}
// console.log(getSquar(12))

// Функция toUpperCase(word) возвращает слово заглавными буквами.
function capitalizeFirstLetter(str) {
  if (!str) return ''; // Обработка пустой строки
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let originalString = "привет мир";
let capitalizedString = capitalizeFirstLetter(originalString);

// console.log(capitalizedString); // Вывод: Привет мир

// Стрелочная функция getType(value) возвращает тип данных (typeof value).
const getType = (value) => typeof value;

// console.log(getType(54)); 

// Функция multiply(a, b, c) возвращает произведение трёх чисел.
function multiply(a, b, c){
    return a * b * c
}
// console.log(multiply(2, 3, 4))

// Функция isAdult(age) возвращает "Совершеннолетний", если age >= 18, иначе "Несовершеннолетний".
function getIsAdult(age){
    return age >= 18 ? "Совершеннолетний" : "Несовершеннолетний"
}
// console.log(getIsAdult(18))

// Функция getLastChar(str) возвращает последний символ строки.
function getLastChar(str){
    if (str < 1) return "мало букв";
    return str[str.length -1]
}
// console.log(getLastChar("ffsdfssssj"))

// Функция double(num) возвращает удвоенное значение числа.
function getDouble(num){
    return num + num
}
// console.log(getDouble(7))

// Функция getStudentInfo(student) возвращает строку вида "Имя: X, Возраст: Y".
const getStudentInfo = (obj) => `Name: ${obj.studentName}, Age: ${obj.studentAge}`
const student = {
    studentName: "Mugiwara",
    studentAge: 23
}
// console.log(getStudentInfo(student))

// Функция getDiscount(product) возвращает цену со скидкой 10%.
function getDiscount(product){
    return product - (product / 100 * 10)
}
// console.log(getDiscount(100))

// Функция renameKey(obj, oldKey, newKey) возвращает новый объект с изменённым названием ключа.
function renameKey(){

}

// Функция hasProperty(obj, key) возвращает true, если в объекте есть данный ключ.


// Функция compareNumbers(a, b) возвращает "Больше", "Меньше" или "Равно".
function getCompareNumbers(a, b){
    return a > b ? `${a} - больше, чем ${b}`: a < b ? `${a} - меньше, чем ${b}`: `${a} и ${b} равно`
}
// console.log(getCompareNumbers(3,1555))

// Функция checkLogin(user, password) возвращает "Доступ разрешён" или "Ошибка".

// Функция isEmptyString(str) возвращает true, если строка пустая.
function getEmptyString(str){
    if(!str) return true
    else return false
}
// console.log(getEmptyString(""))

// Функция maxOfThree(a, b, c) возвращает наибольшее число.
function getMaxOfNum(a, b, c){
    return Math.max (a, b, c)
}
// console.log(getMaxOfNum(99, 23, 4))

// Функция createUser(name, age) возвращает объект {name, age, isAdult: true/false}.
function getCreateUser(obj){
    if (obj.age > 18) return `${obj.name} is adult` 
    else return `${obj.name} is pizdyuk`
}
const user1 = {
    name: "Michael",
    age:17
}
const user2 = {
    name: "Belek",
    age:23
}
// console.log(getCreateUser(user1))
// console.log(getCreateUser(user2))

// Функция calculate(a, b, operation) — если operation === "sum", возвращает сумму, если "mul", возвращает произведение.
function getCalculate(a, b, operation){
    if(operation === "sum"){
        return `${a} + ${b} = ${a + b}`
    } else if (operation === "mul"){
        return `${a} * ${b} = ${a * b}`
    } else {
        return "Не правильный operation"
    }
}
// console.log(getCalculate(3, 5, "*"))

// Функция getMessage(name, callback) — вызывает колбэк callback(name).


// Функция getWeather(temp) возвращает объект {temp, status: "Жарко"/"Прохладно"}.
function getWeather(temp){
    const temperature = {
        stat: 23
    }
    if (temperature.stat >= 18){
        return "Жарко"
    }else{
        return "Прохладно"
    }
}
console.log(getWeather(17))

// Функция getCircle(r) возвращает объект {radius: r, area: πr², length: 2πr}.

// Primitive type
// 1) number -- 1,2,3,4,5,6,7,8
// 2)string -- "alfabe", 'a,b,c,d', `a,s,d,f,g`
// 3)boolean -- true, false, !0, !!0, (>=,<=,==,<,>,===), &&, ||
// 4)null -- null
// 5)undefined -- undefined

// Reference type
// 6)object -- 
// 7)array


// const person = {
//     name: "Izat",
//     age: 20,
//     height: null,
//     weight: undefined,
    // address: {
    //     city: "Bishkek",
    //     country: "KG",
    //     street: "Toko",
    //     coordinates: {
    //         lat: 100,
    //         long: 200
    //     }
    // }
// }

// person.name = "Kairat"
// person.age = 23
// person.mail = "kot@mail.ru"
// person.mail = "kotemes@mail.ru"

// const izat = person
// const Kairat = {...person}

// izat.age = 30
// Kairat.age = 45
// console.log(izat)
// console.log(person)
// console.log(Kairat)



// var
// let
// const

//Primitive - переменныйда значениянын озун сактайт
// number
// string
// null
// undefined
// boolean

// Reference - ссылочный тип переменныйда значениянын ссылкасын сактайт
// object - ссылочный тип данных, где данные хранятся парами то есть ключь значения
// function - function declaration / arrow function
// array




// let car = "hondaa"
// car = "bmw"

// const contain = {
//     car: "honda",
//     chatacteristic: "hhdgcd"
// }

// contain.car = "machine"

// if(!contain.chatacteristic){
//     contain.chatacteristic = {}
// }
// if(typeof contain.chatacteristic === "object"){
//     contain.chatacteristic.year = 1976
// }
// delete contain.car


// console.log(contain)
const get = (a, b) => {
    return a + b
}
// const summ = {
//     a: 4,
//     b: 7
// }
// console.log(get(4, 9))


const obj = {
    name: "Izat",
    getSumm: function(a, b){
        return a + b
    },
}

// console.log(obj.getSumm(4, 5))