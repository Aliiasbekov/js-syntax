let foko = getNewFunc(["gau", arrNew])

function getNewFunc(arr){
    //function declaration
    // arr === ["gau", [234]]
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



let maga = (arg, salary) =>{
    // console.log(arg)
}

let kake = (arg, salary) =>{
    // console.log(arg)
}

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
let sumArr = arrNumbers.map((num) => num + 10)
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
const objAgePlus = arrObjNew.map(person => {
    return {
        name: person.name,
        age: person.age + 1
    }
})
// console.log(objAgePlus)

// 4. Дан массив чисел. Создай функцию doubleNumbers(arr), которая возвращает новый массив с удвоенными значениями через map.
const newNumArr = [1, 2, 3, 4, 5];
function doubleNumbers(arr){
    return arr.map(arg => Math.pow(arg, 2))
}
// console.log(doubleNumbers(newNumArr))
// 5. Дан массив имён. Верни массив, где к каждому имени добавлено "!".
const arrNames = ["Asan", "Uson", "Hasan"];
const nameFalse = arrNames.map(name => name + "!")
// console.log(nameFalse)

// 6. Создай функцию getLengths(arr), которая принимает массив строк и возвращает массив их длин (map).
function getLengths(arr){
    return arr.map(str => str.length)
}
let stringArr = ["FUNCTION", "Array"];
// console.log(getLengths(stringArr))

// 7. Дан массив {price: number}. Верни новый массив, где price умножен на 1.2 (добавить 20% налога).\\\\\\\\\\\\\\\\\\\
const priceCount = [
    {
        price: 100
    }
];
const result21 = priceCount.map(num => num.price * 1.2)
// console.log(result21)

// 8. Дан массив чисел. Используя map, верни массив строк вида "Value: X".
const arrNums1 = [1, 2, 3, 4];
const getNewResult = arrNums1.map(num => `Value: ${num}`);
// console.log(getNewResult)

// 9. Дан массив чисел. Используя map, верни массив булевых значений: true, если число чётное, иначе false.
let getBoolNums = (nums) => nums.map(b => b % 2 === 0)
let numsOdOrEven = [2, 3, 4, 5, 6];
const bool = getBoolNums(numsOdOrEven)
// console.log(bool)

// 10. Дан массив строк. Верни массив, где каждое слово начинается с заглавной буквы.
const newArr = [
    "decleration", "arrow", "primitive", "reference"
]
const firstLetter = newArr.map(function (args){
    return args.charAt(0).toUpperCase() + args.slice(1)
})
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
const nameReturn = newArr1.map(function(obj){
    return obj.name
})
// console.log(nameReturn)

// 12. Создай функцию toNegative(arr), которая превращает все положительные числа в отрицательные.
function toNegative(arr){
    return arr.map((neg) => neg > 0 ? -(neg) : neg)
}
let arr1= [1, 2, 3, 4, -55, 0];
// console.log(toNegative(arr1))

    // 13. Дан массив дат (строки). С помощью map верни массив только годов.
const date1 = ["10-10-2000", "12-12-2024", "11-11-2012"];
const getFullYear = date1.map(num => num.split("-").pop())
// console.log(getFullYear)

// 14. Дан массив {firstName, lastName}. Верни массив строк "firstName lastName".///////////////////////////////////////
let arrReturnString = [
    {
        firstname:"Kairat",
        lastname:"Aliiasbekov"
    }
];
const retStr = arrReturnString.map((arg) =>`${arg.firstname} ${arg.lastname}`);
// console.log(retStr)

// 15. Дан массив чисел. Верни массив квадратов этих чисел.
let arrNums = [2, 3, 4, 5]
const squareOfNum = arrNums.map(x => Math.pow(x, 2))
// console.log(squareOfNum)

// 16. Создай функцию addIndex(arr), которая возвращает массив объектов вида {index, value}.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function addIndex(arr){
    return arr.map((value, index) => {
        return{
            index,
            value
        }
    })
}
const arrOld = [{
    name: "Edward"
},{
    age:132
}
]
// console.log(addIndex(arrOld))

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

// 22. Создай функцию wrap(arr), которая заворачивает каждый элемент в объект вида {value: ...}.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function wrap(elementArr){
    // return elementArr.map((arg) => new Object({value: arg}))
    return elementArr.map((arg) => ({value: arg}))
}
const arr121 = [1, 2, 333, 4];
// console.log(wrap(arr121))

// 23. Дан массив чисел. Верни массив, где каждое число + его индекс.\\\\\\\\\\\\\\\\\\\\\\\\
const numsTeam = [2, 3, 5, 6];
const getNumsTeam = numsTeam.map((num, index) => num + index)
// console.log(getNumsTeam)

// 24. Дан массив имён. Верни массив объектов {id: index, name: value}.
const users = ["lexus", "honda", "mersedes"];
const people = users.map((name, index) => {
    return {
        personId: index,
        name:name
    }
});
// console.log(people)

// 25. Дан массив строк. Верни массив первых букв каждого слова.
const strArr = ["string", "array", "boolean"];
function getFirstLetter(arg){
    return arg.map(x => x.charAt(0))
}
// console.log(getFirstLetter(strArr))

// 26. Дан массив объектов {a, b}. Верни массив сумм a + b.
const arrObj = [
    {a: 1, b: 7}
];
const getSumOfObj = arrObj.map((sum)=> sum.a + sum.b);
// console.log(getSumOfObj)

// 27. Дан массив чисел. Создай функцию reverseStringNumbers(arr), которая превращает числа в строки и переворачивает их "123" → "321".
const numbs = [19, 28, 37, 46, 50,];
function reverseStringNumbers(arr){
    return arr.map((arg) => {return String(arg).split('').reverse().join('')})
    // 1. Преобразуем число в строку.
    // 2. Разбиваем строку на массив символов с помощью split('').
    // 3. Переворачиваем массив символов с помощью reverse().
    // 4. Объединяем массив символов обратно в строку с помощью join('').
}
// console.log(reverseStringNumbers(numbs))
// const i = "IZAT"
// i.split("").reverse().join("")


// 28. Дан массив имен. Верни новый массив, где каждое имя превращено в объект {original, upper}. //////////////////////
const userNames = ["Sezim", "Aktan"];
const resultUserNames = userNames.map(str => ({
    original: str,
    upper: str.toUpperCase()
}))
// console.log(resultUserNames)


// 29. Дан массив чисел. Верни массив, где числа заменены на "even" или "odd".
const numsArr = [1, 3, 4, 5, 6, 8, 11, 2];
function getEvenNums(arr){
    return arr.map(arg => arg % 2 === 0 ? `${arg}-even` : `${arg}-odd`)
}
// console.log(getEvenNums(numsArr))

// 30. Дан массив объектов {name, age}. Верни массив только возрастов, умноженных на 2.
const persons = [
    {
        name: "Lady",
        age:21
    },
    {
        name: "Gaga",
        age:31
    }
];
const getAgeMult = persons.map((arg) => ({...arg, age:arg.age * 2}))

// console.log(getAgeMult)


// primitive:
// string "stroka"
// number 123
// boolean true,false
// null
// undefined


// reference:
// object{}
// array[]
// function()
// symbol

//TODO
const deepCopy = (arr) => {
    const copy = [] // Создаем новый массив чтобы хранить значения первого массива
    for(let i= 0; i < arr.length; i += 1){
        const currentElement = arr[i] // текущий элемент
        if(Array.isArray(currentElement)){ // Если текущий элемент массив входит в тело этой условии
            copy[i] = deepCopy(currentElement) // Вызывает функцию чтобы глубоко копировать, передает тек. элемент если он массив
            continue; // отправляет на следующую итерацию
        }
        if(typeof currentElement == "object"){ // Если тек. элемент обьект входит сюда
            copy[i] = {...currentElement} // копирует обьект обычным способом
            continue;
        }
        copy[i] = currentElement
    }
    return copy
}

const insAr = [1]
const insObj = {name: "I"}
const arr1234 = [
    1, 2, 3, 4, 5, 6, [1], insObj,2,4
]

const resultDeepCopy = deepCopy(arr1234) // Получаем копию массива
insAr[0] = 2 // Изменяем значение 1 на 2 чтобы проверить не осталось ли ссылка на массив в копии
insObj.name = "K" // Изменяем свойство name  чтобы проверить не осталось ли ссылка на массив в копии
// console.log(insObj, "insObj")
// console.log(insAr, "insAr")
// console.log(resultDeepCopy, "resultDeepCopy")

const mass = [...arr1234]

// console.log(mass)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const callback = el => el

// arr.map(callbackDe)

//TODO
// function map(array, func){
//     const newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr.push(func(array[i], i))
//     }
//     return newArr
// }
//
// const arr = ["Izat", "Kairat"]
// const result213 = arr.map((arg, index) => {
//     console.error(arg, index)
//     return arg
// })


//TODO
// function filter(array, func){
//     const newArr = []
//     for(let i = 0; i < array.length; i++){
//         const result = func(array[i])
//         if(result){
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }

const arrFilt = [0,1,0,2,0, 432,43]
const filteredArray = arrFilt.filter(el => el > 0)
// const filterdArray = filter(arrFilt, el => el > 0)
// console.log(filteredArray)

// arrFilt.forEach(el => {
//     console.log(el)
// })


//TODO HOMEWORK TASKS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1)Дан массив: ["a", "B", "c", "D"]
// С помощью map сделай так, чтобы:
// буквы, которые были маленькими — стали большими
// большие — стали маленькими
const letters = ["a", "B", "c", "D"];
const reverseLetters = letters.map(arg => {
    const lowerStr = arg.toLowerCase()
    return arg === lowerStr ? arg.toUpperCase() : lowerStr
});
// console.log(reverseLetters)

// 2)Дан массив:[1, 2, 3, 10, 25]
// Используя map, преврати его в массив строк:
//     "Число 1 — чётное/нечётное"
const arrStr1 = [1, 2, 3, 10, 25];
const returnString = arrStr1.map(str => str % 2 === 0 ? `Число ${str} — чётное` : `Число ${str} — нечётное)`);
// console.log(returnString)

// 3)Дан массив:["hello world", "good morning", "javascript rules"]
// С помощью map сделай так, чтобы каждое слово в строке начиналось с заглавной буквы:
const arrWords = ["hello world", "good morning", "javascript rules"];
const returnUpperCaseOfWord = arrWords.map(arg => arg.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))                  //split(" ") → разбивает по словам
    .join(" "))

//split("") → разбивает строку по буквам
// console.log(returnUpperCaseOfWord)

// 4)Дан массив:
//     [
//         {name: "Aisha", age: 17},
//         {name: "Timur", age: 25},
//         {name: "Kairat", age: 40}
//     ]
// Используя map, сделай массив:
//     "Aisha (несовершеннолетний)"
//     "Timur (взрослый)"
//     "Kairat (взрослый)"
const arrNewArr = [
    {name: "Aisha", age: 17},
    {name: "Timur", age: 25},
    {name: "Kairat", age: 40}
];
const resultUserOfAdult = arrNewArr.map(arg => `${arg.name} ${arg.age >= 18 ? "взрослый" : "несовершеннолетний"}`)
// console.log(resultUserOfAdult)

//     FILTER — 10 задач:
//     Оставь только чётные числа из [1,2,3,4,5,6,7,8].
const numsInArr = [1, 2, 3, 4, 5, 6, 7, 8];

const resultFiltOfArr = numsInArr.filter(num => num % 2 === 0);
// console.log(resultFiltOfArr)

//     Убери элементы, которые меньше 10, из [5, 12, 3, 40, 11].
const arrNew9 = [5, 12, 3, 40, 11, 10];
const boolResult = arrNew9.filter(num => num >= 10);
// console.log(boolResult)

//     Из массива ["apple", "kiwi", "banana"] оставь строки длиннее 4 символов.
const arrLength = ["apple", "kiwi", "banana", "ata"];
// console.log(arrLength.filter(str => str.length > 4))

//     Фильтруй только строки, из массива ["hello", 12, true, "js"].
const arrStr9 = ["hello", 12, true, "js"];
const resStr = arrStr9.filter(arg => typeof arg === "string")
// console.log(resStr)

//     Оставь только положительные числа из [-5, 0, 8, -2, 3].
const arrNumbers9 = [-5, 0, 8, -2, ];
// console.log(arrNumbers9.filter(num => num > 0))

//     Из массива объектов
//     [{age: 10}, {age: 25}, {age: 17}]
//     оставь только тех, у кого age ≥ 18.
const arrObjs = [{age: 10}, {age: 25}, {age: 17}];
const resultOfFilteredObj = arrObjs.filter(arg => arg.age >= 18); //arg.age >= 18
// console.log(resultOfFilteredObj)

// Массив ["a", "aa", "aaa", "aaaa"] — оставь строки длиной ровно 3.
let age = 14
const arrStr89 = ["a", "aa", "aaa", "aaaa", 123, 3453, {name:"gaga", age, color: "red"}, [123,23, 23]];
// console.log(arrStr89.filter(str => typeof str === "string" && str.length === 3))

// Массив ["red","green","blue"] — оставь те, где есть буква "e".
const arrColor = ["red","green","blue"];
const resultLetterOfE = arrColor.filter(arg => arg.includes("e"));
// console.log(resultLetterOfE)

// Массив чисел [1,1,2,2,3,3] — оставь только уникальные (если элемент появляется впервые).
const arrNumbers7 = [1, 1, 2, 3, 3, 4];
const resultUnique = arrNumbers7.filter((arg, index, array) => array.indexOf(arg) === index);
// console.log(resultUnique)

// Из массива строк убери те, что начинаются с буквы "a".
const words1 = ["ananas", "banana", "potato", "apple" ];
const returnWord = words1.filter(arg => !arg.startsWith("a"));
// console.log(returnWord)

// ✅ FOREACH — 6 задач
// Выведи каждый элемент массива вместе с индексом: "0: milk".
const randomWords = ["milk", 23, true, [12,["asd"]], {}, null];
// randomWords.forEach((arg, index) => console.log(`${index}: ${arg}`));

//Посчитай сумму всех чисел в [5, 5, 10, 20] (используя внешнюю переменную sum).
let sum9 = 0;
const numbers9= [5, 5, 10, 20];
numbers9.forEach(num => sum9 += num)
// console.log(sum9)

// Создай строку из массива ["H", "e", "l", "l", "o"] → "Hello".
const letters9 = ["H", "e", "l", "l", "o"];
let summm = ""
letters9.forEach(str => summm += str)
// console.log(summm)

//Посчитай количество чётных чисел в массиве.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let resOdNum = 0;
nums.forEach((num, index, array) =>{
    if(num % 2 === 0){
        num
    }
})
const callBack = (acc, el) => {
    return acc += el
}
const resReduce = nums.reduce(callBack, 0)
// console.log(resReduce)


let sumRes = [{}, "st"]

nums.forEach((el, index) => {
    sumRes[index] = el
})
// console.log(sumRes)

const arrReduce = [1,2,7, 3, 4, 5, 6, -1, [2,34, ["3"]]]

//TODO
const summaReduce = arrReduce.reduce((acc, el) => {
    return acc += el
}, 10)
// console.log(summaReduce, "reduce")
//TODO
const sortRes = arrReduce.sort((a,b) => a - b)
// console.log(sortRes)

//TODO
const foundItem = arrReduce.find(el => el === 1)
// console.log(foundItem)

//TODO
const everyResult = arrReduce.every(el => el > 1)
// console.log(everyResult)

//TODO
const someResult = arrReduce.some(el => el < 1)
// console.log(someResult)

//TODO
const reverseResult = arrReduce.reverse()
// console.log(reverseResult)

//TODO
const resConcat = arrReduce.concat([0, 'asdf'])
// const resConcat = [...arrReduce, ...[0, "asdf"]]
// console.log(resConcat, "res")

//TODO
const strIndex = arrReduce.findIndex(el => typeof el === "string")
delete arrReduce[strIndex]

//TODO
const resFlat = arrReduce.flat(Infinity)
// console.log(resFlat, "resFlat")

// primitive: - В примитивном типе данных, храним само значение переменных
// number
// string
// boolean
// null
// undefined
//
// reference  : В ссылочном типе данных, храним ссылку на значение, то есть один объект может хранится в нескольких переменных
// function
// object
// array


// ===== REDUCE (3 задачи) =====

// 1. Найди сумму элементов массива [2, 3, 4]
const sumOfNums = [2, 3, 4];
const resuReduce = sumOfNums.reduce((acc, el) => acc += el, 0);
// console.log(resuReduce)

// 2. Собери строку "abc" из массива ["a", "b", "c"] с помощью reduce
const abc = ["a", "b", "c"];
const resABC = abc.reduce((acc, el) => acc += el, "");
// const resABC = abc.join("")
// console.log(resABC)

// 3. Найди произведение чисел [2, 3, 4] → 24
const multReduce = sumOfNums.reduce((acc, el) => acc *= el, 1)
// console.log(multReduce)


// ===== SORT (3 задачи) =====
// 1. Отсортируй массив чисел по возрастанию: [10, 2, 7, 1]
const numsRandom = [10, 2, 8, 1];
const resOfSort = numsRandom.sort((a, b) => a - b);
// console.log(resOfSort)

// 2. Отсортируй слова по алфавиту: ["banana", "apple", "cherry"]
const strRandom = ["banana", "six", "apple", "cherry", "gagarina"];
// strRandom.join();
// strRandom.sort();
// console.log(strRandom)

// 3. Отсортируй массив строк по длине: ["hi", "hello", "a"]
const sortResult = strRandom.sort((a, b) => a.length - b.length)
// console.log(sortResult)


// ===== FIND (3 задачи) =====

// 1. Найди первое число > 50 в массиве [10, 20, 60, 5]
const numsForFind = [11, 23, 68, 8, 51];
const resNumOfFind = numsForFind.find(param => param > 50);
// console.log(resNumOfFind)

// 2. Найди первый чётный элемент в [1, 3, 7, 8, 9]
const resEvenNumOfFind = numsForFind.find(param => param % 2 === 0);
// console.log(resEvenNumOfFind)

// 3. Найди первый объект с age = 18 в массиве:
const findEx = [
  {name:"A", age: 15},
  {name:"B", age: 18},
  {name:"C", age: 20},
  {name:"D", age: 18}
];
const resFindOfObj = findEx.find(el => el.age = 18);
// console.log(resFindOfObj)


// ===== EVERY (3 задачи) =====

// 1. Проверь: все ли элементы массива > 0 — [1, 4, 10]
const everyParams = [2, 4, 10,];
// console.log(everyParams.every(el => el > 0))

// 2. Все ли строки начинаются с "a" — ["apple", "avocado", "air"]
const wordsEvery = ["apple", "avocado", "air", "banana"];
// console.log(wordsEvery.every(el => el.startsWith("a")))

// 3. Все ли числа чётные — [2, 4, 6, 8]
const resEveryOfEven = everyParams.every(el => el % 2 === 0);
// console.log(resEveryOfEven)

// ===== SOME (3 задачи) =====

// 1. Есть ли в массиве отрицательное число — [3, 5, -1, 7]
const numsForSome = [3, 5, -1, -7];
const resOfSome = numsForSome.some((el) => el < 0)
// console.log(resOfSome)

// 2. Есть ли слово длиной > 5 — ["hi", "hello", "worldwide"]
const resOfEveryLength = wordsEvery.some(el => el.length === 5);
// console.log(resOfEveryLength)

// 3. Есть ли объект с logged: true —
const someObj = [
  {user:"A", logged:false},
  {user:"B", logged:true},
  {user:"C", logged:false}
];
const someRes = someObj.some(el => el.logged === true)
// console.log(someRes)


// ===== REVERSE (3 задачи) =====

// 1. Разверни массив [1, 2, 3, 4]
const numsReverse = [1, 2, 3, 4]
// console.log(numsReverse.reverse(el => el))

// 2. Разверни массив строк ["a", "b", "c"]
const strLetters = ["a", "b", "c"];
// console.log(strLetters.reverse(el => el), "KATYKEU")

// 3. Разверни массив ["hello", 1, true, null]
const random1 = ["hello", 1, true, null];
// console.log(random1.reverse())


// ===== CONCAT (3 задачи) =====

// 1. Соедини массивы [1, 2] и [3, 4]
const num543 = [1, 2]
const num345 = [3, 4]
const concatRes = num345.concat(...num543)
// console.log(concatRes)

// 2. Соедини массивы [1, 2] и ["a", "b"]
const strConcat = ["a", "b"];
// console.log(num543.concat(strConcat))

// 3. Соедини массивы [10], [20], [30]
// console.log(strConcat.concat(num543, num345))



// ===== FINDINDEX (3 задачи) =====

// 1. Найди индекс первого отрицательного числа — [3, 1, -5, 8]
const rand = [3, 1, -3, 9, "a", "b", "hello", "z"]
// console.log(rand.findIndex(arg => arg < 0))

// 2. Найди индекс элемента "hello" — ["a", "b", "hello", "z"]
// console.log(rand.findIndex(el => el === "hello"))
// rand.findLastIndex(el => el > 8)
// 3. Найди индекс объекта с id = 2 —
const objForFindindex = [
  {id:1},
  {id:2},
  {id:3}
];
// console.log(objForFindindex.findIndex(el => el.id === 2))



// ===== FLAT (3 задачи) =====

// 1. Сделай массив плоским: [1, [2, 3]]
const ex = [1, [2, [3, [4]]]];
// console.log(ex.flat(1))

// 2. Расплюсь массив любой вложенности: [1, [2, [3, [4]]]] → flat(Infinity)
// console.log(ex.flat(Infinity))


// 3. Преврати [["a"], ["b", ["c"]], "d"] в ["a", "b", "c", "d"]
const flatWords = [["a"], ["b", ["c"]], "d"];
const flatik = flatWords.flat(2)
// console.log(flatik)

const arr456 = ["array"];
const obj456 = {name:"jaja"}
function type(arg) {
    if (Array.isArray(arg)) {
        return "array"
    } else {
    return typeof arg
    }
}
// console.log(type(arr456))
// console.log(type(obj456))

const typeOfData = (el) => Array.isArray(el) ? "Array" : typeof el;
// console.log(typeOfData(arr456))
// console.log(typeOfData(obj456))
Object.keys(obj456)
