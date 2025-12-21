// 1. Напиши функцию, которая принимает число и возвращает его квадрат.
const getPow = (el) => Math.pow(el, 2);
let nums = 12;
// console.log(getPow(nums))

// 2. Напиши стрелочную функцию, которая принимает строку и возвращает её длину.
const getLengthOfString = (el) => el.length;
// console.log(getLengthOfString("эки"))

// 3. Создай функцию, которая принимает два числа и возвращает большее из них.
function getMaxOfNum(el, arg){
    return Math.max(el, arg)
}
// console.log(getMaxOfNum(1,22))

// 4. Функция принимает объект {name, age} и возвращает строку "Имя: ... , Возраст: ...".
function getValues(obj){
    return `Имя: ${obj.name}, Возраст: ${obj.age}`
}
const newObj = {
    name: "Aibek",
    age: 22
}
// console.log(getValues(newObj))

// 5. Стрелочная функция принимает массив чисел и возвращает сумму всех элементов.
const getSumOfArr = (arr) => arr.reduce((el, arg) => el += arg, 0)
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(getSumOfArr(newArr))

// 6. Функция принимает строку и проверяет, содержит ли она букву "a" (if else).
function findLetter(el){
    if(el.includes("a") || el.includes("а")){
        return `${el}: содержит букву "а"`
    }else{
        return `${el}: не содержит букву "а"`
    }
}
// console.log(findLetter("Изот"))

// 7. Напиши функцию, которая принимает массив и выводит каждый элемент в консоль с помощью цикла for.
const arrNew = ["no", "pain", "NO", "GAIN", 234, true]
function getResult(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    return arr
}
// console.log(getResult(arrNew))

// 8. Стрелочная функция принимает два аргумента и возвращает true, если они равны.
const getBoolRes = (el, arg) => el == arg;
// console.log(getBoolRes(123, "123"))

// 9. Функция принимает число и возвращает "чётное" или "нечётное".
function getNum(el){
    if (el % 2 === 0){
        return `${el}: чётное число`
    }else{
        return `${el}: нечётное число`
    }
}
// console.log(getNum(20000000000))

// 10. Напиши функцию, которая принимает массив и возвращает количество элементов.
function getAmount(arr){
    return arr.length
}
const arrNew1 = ["gaga", true, 34, undefined, null, [], {}]
// console.log(getAmount(arrNew1))

// 11. Стрелочная функция принимает три числа и возвращает их среднее.
const getAverageNum = (a, b, c) => (a + b + c) / 3;
// console.log(getAverageNum(3,4,5))

// 12. Функция принимает объект и выводит все его ключи через цикл for...in.
function getKeys(obj){
    let keyNew = ""
    for(const i of Object.keys(obj)) {
        keyNew += obj[i]
        // console.log(i)
    }
    return obj
}
const newObj1 = {
    name: "Kaka",
    age: 23,
}
// console.log(getKeys(newObj1))

// 13. Стрелочная функция принимает имя и возвращает приветствие: "Привет, Имя!".
const getName = (el) => `Привет, ${el}!`
// console.log(getName("Изатик"))

// 14. Функция принимает массив строк и возвращает новую строку, соединённую через пробел.
function getProbe(arr){
    return arr.join(" ")
}
const arrNew2 = ["gaga", "rina", "mir", "bek"]
// console.log(getProbe(arrNew2))

// 15. Функция принимает объект и возвращает количество свойств в нём.
function getObj(obj){
    return Object.keys(obj).length
}
const objNew = {
    arms: 4,
    legs: 8,
    height: "144px"
}
// console.log(getObj(objNew))

// 16. Стрелочная функция принимает массив чисел и возвращает новое значение: каждый элемент +1.
const getSum = (arr) => arr.map(el => el += 1)
const newArr2 = [1,2,3,4,5,6,7,8,9];
// console.log(getSum(newArr2))
// 17. Функция принимает число n и выводит числа от 1 до n (цикл).
function getNumN(el){
    for(let i =0; i < el; i++){
        console.log(i)
    }
    return el
}
// console.log(getNumN(5))
// 18. Функция принимает два числа и возвращает их разность, если первое > второго, иначе сумму.
function getNums(num1, num2){
    if(num1 > num2){
        return num1 - num2
    }else{
        return num1 + num2
    }
}
// console.log(getNums(3, 4))

// 19. Стрелочная функция принимает булево значение и возвращает противоположное.
const getBoolean = (el) => el !== true
// console.log(getBoolean(true))

// 20. Функция принимает массив и возвращает последний элемент.
function getLastEl(arr){
    return arr.at(-1)
}
const newArr3 = [123, "asd", true, "false", null];
// console.log(getLastEl (newArr3))

// 21. Функция принимает строку и делает первую букву заглавной.
function upperCase(str){
    return str.toUpperCase().at(0) + str.slice(1)
}
// console.log(upperCase("fakanafoko"))

// 22. Стрелочная функция принимает три строки и возвращает самую длинную.
const getLongerOfWord = (str1, str2, str3) =>{
    if(str1.length >= str2.length && str1.length >= str3.length){
        return str1
    }else if(str2.length >= str1.length && str2.length >= str3.length){
        return str2
    }else{
        return str3
    }
}
// console.log(getLongerOfWord("faka", "gaaga", "fakanafoko"))

// 23. Функция принимает объект {x, y} и возвращает, в какой четверти находится точка.
function getXY(obj){
    if(obj.x > 0 && obj.y > 0){
        return `x:${obj.x}, y:${obj.y} точка находится в первой четверти`
    }else if(obj.x < 0 && obj.y > 0){
        return `x:${obj.x}, y:${obj.y} точка находится во второй четверти`
    }else if(obj.x > 0 && obj.y < 0){
        return `x:${obj.x}, y:${obj.y} точка находится в третьей четверти`
    }else if(obj.x < 0 && obj.y < 0){
        return `x:${obj.x}, y:${obj.y} точка находится в четвертой четверти`
    }else if(obj.x === 0 && obj.y === 0){
        return `x:${obj.x}, y:${obj.y} точка находится в центре`
    }else{
        return `x:${obj.x}, y:${obj.y} один из осей равен к нулевому значению`
    }
}
const newObjX1 = {x: 1, y: 2}
const newObjX2 = {x: -1, y: 2}
const newObjX3 = {x: 1, y: -2}
const newObjX4 = {x: -1, y: -2}
const newObjX5 = {x: 3, y: 0}
// console.log(getXY(newObjX1))
// console.log(getXY(newObjX2))
// console.log(getXY(newObjX3))
// console.log(getXY(newObjX4))
// console.log(getXY(newObjX5))

// 24. Напиши функцию, которая принимает массив чисел и возвращает их произведение.
function getMult(arr){
    return arr.reduce((acc, el) => acc *= el, 1)
}
const newArr1 = [1, 2, 3, 4];
// console.log(getMult(newArr1))

// 25. Стрелочная функция принимает два массива и возвращает один общий (конкат).
const getUnion = (arr) => arr.concat(...newArr1)
const newArr0 = ["ana saga", false]
// console.log(getUnion(newArr0))
// 26. Функция принимает объект и выводит все значения через цикл.
function getForOf(obj){
    for(const i of Object.values(obj)){
        console.log(i)
    }
    return "Objeeect"
}
const newObj2 = {
    name: "Aliiasbekov",
    age: 23,
    gender: "SUPERMAN"
}
// console.log(getForOf(newObj2))

// 27. Стрелочная функция принимает строку и возвращает количество слов в строке.
const getAmountWords = (el) =>{
    return el.split(" ").length
}
// console.log(getAmountWords("naryn bishkek karakol che tam"))

// 28. Функция принимает число и возвращает массив чисел от 0 до этого числа.
function getNumOf0(num){
    const retNum = [];
    for(let i = 0; i < num; i++){
        retNum.push(i)
    }
    return retNum
}
// console.log(getNumOf0(5))

// 29. Стрелочная функция принимает массив и возвращает true, если все элементы > 0.
const getBoolEl = (arr) => arr.every(el => el > 0);
const arrNew3 = [2, 3, 4, 5,];
// console.log(getBoolEl(arrNew3))

// 30. Функция принимает строку и переворачивает её (reverse).
function getReverseString(str){
    return str.split("").reverse().join("")
}
// console.log(getReverseString("fakanafoko or Izatik"))

// 31. Стрелочная функция принимает массив и возвращает только первые 3 элемента.
const getRet3El = (arr) =>{
    const mynaSaga = [];
    for(let i = 0; i < 3; i++){
        mynaSaga.push(arr[i])
    }
    return mynaSaga
}
const arrNew4 = ["ana", 123, null, "gagagag", 345345];
// console.log(getRet3El(arrNew4))
// 32. Функция принимает число и проверяет, является ли оно целым.
function getInteger(num){
    return Number.isInteger(num) ? "num is integer" : "num is not integer"
}
// console.log(getInteger(2.3))

// 33. Стрелочная функция принимает объект и возвращает массив его ключей.
const getKey = (obj) => Object.keys(objNew3)
const objNew3 = {name: "Jamin", age: 22}
// console.log(getKey(objNew3))
// 34. Функция принимает массив объектов [{name, age}] и возвращает имена людей старше 20.
function getOlderPeople(arr){
    return arr.filter(el => el.age > 20).map(el => el.name)
}
const arrNew5 = [{name: "Jamin", age: 22}, {name: "Izat", age: 15}, {name: "Bakai", age: 22}, {name: "Yrys", age: 19}]
// console.log(getOlderPeople(arrNew5))

// 35. Стрелочная функция принимает число и возвращает массив чётных чисел от 0 до него.
const getNumEven = (num) => {
        const resultNum = [];
        for(let i = 0; i < num; i++){
            if(i % 2 === 0){
                resultNum.push(i)
            }
        }
        return resultNum
}
// console.log(getNumEven(6))

// 36. Функция принимает строку и удаляет все пробелы.
function getStr(str){
    return str.split(" ").join("")
}
// console.log(getStr(" ana myna kana tigine  "))

// 37. Функция принимает два объекта и сравнивает их количество свойств.
function getProperty(obj1, obj2){
    return Object.keys(obj1).length === Object.keys(obj2).length
}
const newObj41 = {name: "Kairat", age:23};
const newObj42 = {car: "BMW", color:"red", year: 1999};
const newObj43 = {university: "KSTU", birth:1965};
// console.log(getProperty(newObj41, newObj43))

// 38. Стрелочная функция принимает массив строк и возвращает массив длин этих строк.
const getLengthStr = (arr) => arr.toString().split(" ").length
const newArr4 = ["nan mai sut alma bubble"];
// console.log(getLengthStr(newArr4))
// 39. Функция принимает массив чисел и возвращает наибольшее число (через цикл).
function getMaxNum(arr){
    return arr.sort((a, b) => b - a).at(0)
}
const newArr5 = [3,4,5,6,3,7,8,9,4,6,7,1]
// console.log(getMaxNum(newArr5))

// 40. Стрелочная функция принимает массив и возвращает количество чётных чисел.
const getAmountOfEvenNum = (arr) =>{
    const evenNum = arr.filter(el => el % 2 === 0)
    return evenNum.length
}
// console.log(getAmountOfEvenNum(newArr5), "- количество четных чисел")

// 41. Функция принимает объект продукта {name, price} и выводит строку "Товар ... стоит ...".
function getPriceOfProduct(obj){
    return `Товар ${obj.name} стоит ${obj.price}`
}
const objProduct = {
    name: "Jeans",
    price: 1000
}
// console.log(getPriceOfProduct(objProduct))

// 42. Стрелочная функция принимает массив булевых значений и считает количество true.
const getAmountBool = (arr) => arr.filter(el => el === true).length
const arrBool = [true, false, false, true, false]
// console.log(getAmountBool(arrBool))

// 43. Функция принимает массив и проверяет, есть ли в нём значение 0.
function getZero(arr){
    return arr.reduce((acc, el) => el === 0 ? "есть значения 0" : "нет такого значения", 0)
}
const arrZero = [1, 3, 0, 4, 0]
const arrZero1 = [1, 3, 5, 4]
// console.log(getZero(arrZero))
// console.log(getZero(arrZero1))
// 44. Стрелочная функция принимает два числа и возвращает остаток от деления.
const  getRemainder = (num1, num2) =>{
    let remainderOfNum
    return remainderOfNum = `Остаток от деления ${num1} / ${num2} равно к ` + num1 % num2
}
// console.log(getRemainder(17, 5))

// 45. Функция принимает массив объектов и возвращает новый с добавленным полем id.
function getObjOfArr(arr){
    return arr.map((el, index) => ({id:index, ...el}))
}
const arrOfObj = [{name: "Christmas", newYear: 2026}, {name: "Mahabat", newYear: 2000}];
// console.log(getObjOfArr(arrOfObj))

// 46. Стрелочная функция принимает массив и возвращает новый массив без последнего элемента.
const getArrPop = (arr) =>{
    const newZaebal = [...arr]
    newZaebal.pop()
    return newZaebal
}
const arrZaebal = [1,2,3]
// console.log(getArrPop(arrZaebal))

// 47. Функция принимает строку и возвращает количество гласных букв. //////////////////////////////////////
function getVowelsLetter(str){
    const vowelsLetter = str.match(/[aeiou]/gi)
    return vowelsLetter ? vowelsLetter.length : 0
}
// console.log(getVowelsLetter("Mahabat"))

// 48. Стрелочная функция принимает объект и возвращает строки "ключ: значение" в массиве.
const getString = (obj) => Object.entries(obj)
const objSting = {name:"Ключь", property: "Значение"}
// console.log(getString(objSting))

// 49. Функция принимает два массива и возвращает массив общих элементов.
function getArrConcat(arr){
    return arr.concat(newArr)
}
const arrConcat2 = ["Экинчи массив"]
// console.log(getArrConcat(arrConcat2))

// 50. Стрелочная функция принимает число и выводит таблицу умножения от 1 до 10.
const getTable = (num) => {
    let resNum = []
    for(let i = 0; i < 10; i++){
        resNum.push(`${num} * ${i} = ${num * i}`)
    }
    return resNum
}
// console.table(getTable(4))
