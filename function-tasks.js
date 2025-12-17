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
    return num.
}
console.log(getNumOf0(5))

// 29. Стрелочная функция принимает массив и возвращает true, если все элементы > 0.

// 30. Функция принимает строку и переворачивает её (reverse).

// 31. Стрелочная функция принимает массив и возвращает только первые 3 элемента.

// 32. Функция принимает число и проверяет, является ли оно целым.

// 33. Стрелочная функция принимает объект и возвращает массив его ключей.

// 34. Функция принимает массив объектов [{name, age}] и возвращает имена людей старше 20.

// 35. Стрелочная функция принимает число и возвращает массив чётных чисел от 0 до него.

// 36. Функция принимает строку и удаляет все пробелы.

// 37. Функция принимает два объекта и сравнивает их количество свойств.

// 38. Стрелочная функция принимает массив строк и возвращает массив длин этих строк.

// 39. Функция принимает массив чисел и возвращает наибольшее число (через цикл).

// 40. Стрелочная функция принимает массив и возвращает количество чётных чисел.

// 41. Функция принимает объект продукта {name, price} и выводит строку "Товар ... стоит ...".

// 42. Стрелочная функция принимает массив булевых значений и считает количество true.

// 43. Функция принимает массив и проверяет, есть ли в нём значение 0.

// 44. Стрелочная функция принимает два числа и возвращает остаток от деления.

// 45. Функция принимает массив объектов и возвращает новый с добавленным полем id.

// 46. Стрелочная функция принимает массив и возвращает новый массив без последнего элемента.

// 47. Функция принимает строку и возвращает количество гласных букв.

// 48. Стрелочная функция принимает объект и возвращает строки "ключ: значение" в массиве.

// 49. Функция принимает два массива и возвращает массив общих элементов.

// 50. Стрелочная функция принимает число и выводит таблицу умножения от 1 до 10.
