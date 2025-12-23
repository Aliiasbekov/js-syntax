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

const n = "http://youtube.com"
const f = " JAMIN NAGAGA"
// console.log(n.charAt(0).toUpperCase() + n.slice(1))
// console.log(f.toLowerCase())
// console.log(f.trim()) //удаляет все пробелы с начала и с конца строки
n.replace("http", "https") // zamena text

let num = 1
num-- // decrement
num++ // increment

// console.log(num)
//b && a - операнд и операнд
//b || a - операнд или операнд

// const newObj123 = {
    // name: "Bermet & Emir",
    // age: 18,
    // gender: "male" || "female",
// }
// delete newObj123.gender
// newObj123.race = "nigga"
// newObj123.name = "Kairat & Sezim"
// newObj123.lastMeet = {
//     date: new Date(),
    // place: "Bishkek"
// }
// const date = new Date();
// newObj123.lastMeet.date = date.toISOString().split("T")[0];
// delete newObj123.lastMeet.date
// const keys = Object.keys(newObj123) // keys array
// const values = Object.values(newObj123) // values array
// const keyValue = Object.entries(newObj123)
// console.log(keyValue)
// new Object, {}, Object.create()

const newObj2 = {
    name: "Mahabat",
    age: 23
}

// newObj2.name
// newObj2["name"]

const objKeys = Object.keys(newObj2)

const objKeyAndValue = objKeys.map((arg,index) => ({
    [arg]: newObj2[arg]
}))
// result = [{name: ""}, {age: 23}]
// console.log(objKeyAndValue)
// console.log(objKeys)
// console.log(objValues)

