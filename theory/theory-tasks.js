// 1️⃣ Переменные
//
// Объяви let и const. Попробуй изменить оба и объясни результат.
const a = 5
// a = 10
let b = 10
b = 15
// console.log(a, b)
//     Почему var считается устаревшим? Приведи пример с ошибкой области видимости.
var c = 20;
if (true) {
    var c = 30; // переопределяет глобальную переменную
}
// console.log(c); 

// 2️⃣ Типы данных (Primitive / Reference)
// Определи типы данных для значений: 42, "hi", true, undefined, null, {}, [].
const arr = [42, "hi", true, undefined, null, {}, []];
//     Почему typeof null возвращает "object"?
// console.log(typeof null);
//     Сравни два массива с ===. Почему результат false?
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// console.log(arr1 === arr2); 
//     3️⃣ Функции
//
// Создай function declaration, которая возвращает сумму двух чисел.
function getSumOfTwoNumbers(x, y) {
    // console.log(x + y)
}
getSumOfTwoNumbers(3, 7);
//     Перепиши её в arrow function.
const getSum = (x, y) => //console.log(x + y);
getSum(4, 6);
// Создай анонимную функцию и вызови её сразу (IIFE).
(function() {
    //console.log("IIFE called");
})();
//     Что вернёт функция без return?
function noReturn() {
    const a = 10;
}
// console.log(noReturn());
//     4️⃣ Array (методы)
// Используя map, получи массив квадратов чисел.
const numbers = [1, 2, 8, 4, 5, 0, 7];
// console.log(numbers.map(num => num ** 2))
//     Используя filter, получи только чётные числа.
// console.log(numbers.filter(num => num % 2 === 0))
//     Используя reduce, найди сумму массива.
// console.log(numbers.reduce((acc, num) => acc += num, 0))
//     Используя find, найди первое число больше 10.
// console.log(numbers.find(num => num > 10))
// Используя findIndex, найди индекс строки "JS".
const newArr = ["JS", 2, -1, true, [1,[2,[3]]]];
// console.log(newArr.findIndex(el => el === "JS"))
//     Используя some, проверь есть ли отрицательные числа.
// console.log(newArr.some(el  => el < 0))
//     Используя every, проверь все ли числа положительные.
// console.log(numbers.every(num => num > 0))
//     Используя flat, сделай массив [1,[2,[3]]] плоским.
// console.log(newArr.flat(Infinity))
//     Используя at, получи последний элемент массива.
// console.log(newArr.at(-1))
//     Используя includes, проверь есть ли "apple".
// console.log(newArr.includes("apple"))
//     В чём разница slice и splice? Приведи пример.
// newArr.splice(1,3); 
// console.log(newArr);
// console.log(newArr.slice(0,1));
//     Отсортируй числа по возрастанию с sort.
// console.log(numbers.sort((a, b) => a -b))
//     Используя entries, выведи индекс и значение каждого элемента.
for (const [index, value] of newArr.entries()) {
    // console.log(index, value);
}
//     Объедини два массива с concat и ....
const arrA = [1, 2, 3];
// console.log(arrA.concat(...arrA, ...newArr));
// 5️⃣ Object
//
// Создай объект пользователя (name, age).
const obj = {
    name: "Izat",
    age: 25
};
//     Получи все ключи объекта.
// console.log(Object.keys(obj));
//     Получи все значения объекта.
// console.log(Object.values(obj));
//     Используя Object.entries, выведи key: value.
// console.log(Object.entries(obj).map(([key, value]) => `${key}: ${value}`));
// 6️⃣ String
let str = " hello world "
// Сделай строку в верхнем регистре.
// console.log(str.toUpperCase())
//     Проверь начинается ли строка с "Hello".
// console.log(str.startsWith("hello"))
//     Убери пробелы в начале и конце строки.
// console.log(str.trim())
//     Раздели строку "js is cool" на массив слов.
let str2 = "js is cool to today cold";
// console.log(str2.split(" "))
//     Замени все "a" на "@".
// console.log(str2.replaceAll("o", "&"))
//     Получи последний символ строки через at.
// console.log(str2.at(-1))
// 7️⃣ Number / Math
let num = 2003
// Преобразуй число 255 в строку.
// console.log(num.toString())
// console.log(num + "")
// console.log(`${num}`)
//     Возведи 2 в степень 5.
// console.log(2 ** 5)
// console.log(Math.pow(2, 5))
// Округли 4.7 вверх и вниз.
// console.log(Math.floor(4.7))
// console.log(Math.ceil(4.7))
// console.log(Math.round(4.5))

//     Получи случайное число от 1 до 10.
// console.log((Math.random() * 10).toFixed(0))
// 8️⃣ Date
// Date.now() 
// Получи текущую дату (timestamp).
// console.log(Date().toISOString().split("T")[0]);
//     Получи текущий день месяца.
// console.log(new Date().getDate());
//     Установи дату на +5 дней вперёд.
const date = new Date();
date.setDate(date.getDate() + 5);
//     Преобразуй дату в ISO-строку.
// console.log(date.toISOString());
// 9️⃣ Set / Map
const nums = [1, 2, 2, 3, 4, 4, 5];
// Удали дубликаты из массива с помощью Set.
// console.log(new Set(nums));
//     Создай Map и добавь туда 3 пары ключ-значение.
const myMap = new Map();
myMap.set("name", "Izat");
myMap.set("age", 25);
myMap.set("city", "NY");
//     В чём отличие Map от обычного объекта?

// 🔟 Операторы
//
// В чём разница == и ===? Пример.
// console.log(5 == "5");
// console.log(5 === "5");
//     Объясни разницу && и ||.
// console.log(true && false)
// console.log(true || false)
// Что вернёт !true && false?
// console.log(!true && false)
//     Используй тернарный оператор вместо if.
// console.log(function(){ return 5 > 3 ? "da" : "net"}())
// Объясни ++i и i++ на примере.
//
//     Что делает typeof?
// console.log(typeof "");
//     Используй in для проверки ключа в объекте.
// console.log("name" in obj);
//     Используй instanceof для массива.
// console.log(arrA instanceof Array);
//     Удали поле объекта с delete.
// console.log(delete obj.age);
// Скопируй объект с помощью ....
// console.log({...obj, example: "anamyna"})
// 🔁 Циклы
//
// Выведи числа от 1 до 10 с for.
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}
// Пройди по массиву с for...of.
for (const num of numbers) {
    // console.log(num, "for of example");
}
//     Пройди по объекту с for...in.
for (const key in obj) {
    // console.log(`${key}: ${obj[key]}`);
}
// Используй while для обратного отсчёта.
let count = 5;
while (count > 0) {
    // console.log(count);
    count--;
}
//     В чём отличие while и do...while?
// 🧠 Логика / Комбо
// Дан массив чисел.
const arr3 =[2,3,4,5,6,7,3,4,12]
// 👉 Убери дубликаты,
// console.log(new Set(arr3))
// 👉 оставь только чётные,
// console.log(arr3.filter(num => num % 2 ===0))
// 👉 возведи их в квадрат,
// arr3.forEach(el => console.log(el ** 2))
// 👉 найди сумму.


function filter(arr, callback){
    const newAr = []
    for (let i = 0; i< arr.length; i++){
        const result = callback(arr[i], i, arr)
        if(result){
            newAr.push(arr[i])
        }
    }
    return newAr
}

function map(arr, callback){
    const newAr = []
    for (let i = 0; i< arr.length; i++){
        const result = callback(arr[i], i, arr)
        newAr.push(result)
    }
    return newAr
}

function reduce(arr, callback, initialState){
    let response = initialState
    for (let i = 0; i< arr.length; i++){
        response = callback(arr[i], i, arr)
    }
    return response
}
