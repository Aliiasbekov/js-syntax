import {kairat} from "./objects";

// Context - call
const newObj = {
    name: "gagarina",
    func: function (){
        return this.name
    },

}
const newObj1 = {
    name: "adfasdfasdf",
}
const getName = newObj.func
const numbers = [2,3,4,5,1,34,5]

const callResult = getName.call(newObj1)
const bindResult = newObj.func.bind(newObj1)
const applyResult = Math.max.apply(null, numbers)

const users = {
    kairat: "user1Pass",
    izat: "user2pass",
    belek: "user3pass",
    aman: "user4pass"
}

function getUserPassword(login1, login2, login3, login4){
    return {
        [login1]: users[login1],
        [login2]: users[login2],
        [login3]: users[login3],
        [login4]: users[login4],
    }
}

const request = ["kairat", "belek", "aman", "izat"]
const passResult = getUserPassword.apply(this, request)

function calculate(a,b,c,d){
    return a + b + c + d
}
const data = [1,2,3,4]
// console.log(calculate.apply(this, data))
// console.log(passResult)



// setTimeout(() => {
    kairat.login("kairat", "pass123" )
//     console.log(kairat.history)
// },2000)

let iterator = 0

// setInterval(() => {
//     console.log(iterator)
//     iterator++
// }, 1000)

// 1. Создать класс Product.
// Поля: title, price, category, createdAt, rating = 0
// Методы:
// - getInfo(): вернуть строку "Товар: title, Цена: price"
// - addRating(value): увеличить рейтинг на value
// Создать 2 товара и проверить работу методов.

// 2. Создать класс BankAccount.
// Поля: owner, balance, history = []
// Методы:
// - deposit(sum): увеличивает баланс и записывает в history дату + сумму
// - withdraw(sum): уменьшает баланс, если хватает средств
// - getHistory(): возвращает history
// Создать 2 аккаунта и провести несколько транзакций.

// 3. Создать класс Animal и класс Dog как наследника.
// Animal: name, age, type, method speak()
// Dog: override speak() → "Woof! My name is ..."
// Создать несколько собак и животных, вызвать speak().

// 4. Создать класс Student.
// Поля: name, year, grades = []
// Методы:
// - addGrade(n): добавить оценку
// - getAverage(): вернуть среднюю оценку
// Создать студента, добавить 5 оценок, вывести среднее.

// 5. Создать класс Phone.
// Поля: brand, model, battery = 100, isOn = false
// Методы:
// - turnOn(): включает телефон
// - turnOff(): выключает
// - use(minutes): уменьшает battery на minutes * 0.5
// - charge(): возвращает батарею на 100
// Создать телефон, включить и "пользоваться" 30 минут.

// 6. Создать класс Shop.
// Поля: name, products = []
// Методы:
// - addProduct(obj): добавить объект товара
// - findByCategory(cat): вернуть все товары категории cat
// - getTotalPrice(): сумма всех товаров
// Создать магазин с 4 товарами.

// 7. Создать класс Car и добавить метод drive(km).
// Поля: name, fuel, fuelPerKm
// drive(km): уменьшает fuel и возвращает "Проехал km км"
// Если топлива нет → вернуть "Нет топлива"
// Создать несколько машин и проехать разное расстояние.

// 8. Создать класс Admin как наследник User.
// User: username, password, loggedIn
// Методы: login(), logout()
// Admin: override login() → добавлять в историю строку "Admin logged in at ..."
// Создать юзера и админа, проверить разницу.

// 9. Создать класс Timer.
// Поля: startTime = null, endTime = null
// Методы:
// - start(): сохраняет текущее время
// - stop(): сохраняет текущее время
// - getSeconds(): сколько секунд прошло между start и stop
// Проверить с setTimeout на 2 секунды.

// 10. Создать класс Library.
// Поля: books = []
// Методы:
// - addBook(title, author)
// - findBook(title) → вернуть объект книги
// - removeBook(title)
// Создать библиотеку, добавить книги, удалить одну, найти одну.
