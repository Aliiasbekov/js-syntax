
// const containers =  document.getElementsByClassName("container")
//
// containers[0].innerHTML = `
//          <div>
//              <h1 id="title">Hello</h1>
//              <h2>World</h2>
//         </div>
//     `
//
// const title = document.getElementById("title")
// title.style.color = "red"
// title.style.fontSize = "12px"
//
// const subTitles = document.getElementsByTagName("h2")
//
// if(title.style.color === "red"){
//     subTitles[0].style.textDecoration = "underline"
// }
//
// subTitles[0].innerText = "NO WOrld";
//
// Array.from(containers).map(el => {
//     el.innerHTML = el.getHTML() + `<button class="btn">Click me!</button>`
// })
//
// const button = document.getElementsByClassName("btn")
//
// button[0].onclick = () => {
//     window.open("https://youtube.com", "_blank")
// }

const createApi = (str) => `https://6971c97a32c6bacb12c47b89.mockapi.io/api/v2/${str}`


const CarsAPI = {
    get: createApi("cars"),
    getById:  (id) => createApi(`cars/${id}`),
    post: createApi("cars"),
    delete: (id) => createApi(`cars/${id}`),
    update: (id) => createApi(`cars/${id}`),
}

export const createCar = async (data) =>{
    try{
        const response = await fetch(CarsAPI.post, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }catch (e){
        console.log(e.status)
    }
}
const getAllCars = async () => {
    const response = await fetch(CarsAPI.get)
    return response.json()
}

const deleteCar = async (id) => {
    try{
        const response = await fetch(CarsAPI.delete(id), {
            method: "DELETE"
        })
        if(response.status === 200){
            console.log(`DELETED ID: ${id}`)
        }
        return response.data
    }catch (e){
        console.log(e.message)
    }
}

const brandInput = document.querySelector(".brand")
const modelInput = document.querySelector(".model")
const yearInput = document.querySelector(".year")
const colorInput = document.querySelector(".color")
const btn = document.querySelector(".btn")
const carsListElement = document.querySelector(".carsList")

let brandValue = ""
let modelValue = ""
let yearValue = 2000
let colorValue = ""

const brandOnChange = (event) => {
    brandValue = event.target.value
}
const modelOnChange = (event) => {
    modelValue = event.target.value
}
const yearOnChange = (event) => {
    yearValue = event.target.value
}
const colorOnChange = (event) => {
    colorValue = event.target.value
}


brandInput.addEventListener("change", brandOnChange)
modelInput.addEventListener("change", modelOnChange)
yearInput.addEventListener("change", yearOnChange)
colorInput.addEventListener("change", colorOnChange)


const showCars = async () => {
    const listOfCars = await getAllCars()

    listOfCars.map(el => {

        carsListElement.innerHTML = carsListElement.getHTML() +
            `<ol style="display: flex;  align-items: center; gap:10px;"> 
                    <h3>${el.brand} - ${el.model}</h3>
            </ol>`
    })
}
const onSave = async () => {
    const body = {
        brand: brandValue,
        model: modelValue,
        year: yearValue,
        color: colorValue
    }
    const res = await createCar(body)
    if(res){
        showCars()
    }
}


showCars()
btn.onclick = onSave

//
// 🔹 Select / getElement / querySelector
//
// Найди элемент по id и измени его текст.

//     Найди все элементы по class и выведи их количество в console.
//
//     Найди первый элемент p через querySelector.
//
//     Найди все li внутри ul с помощью querySelectorAll.
//
//     Измени цвет текста у элемента, найденного по id.
//
//     Добавь рамку всем элементам с классом .box.
//
//     Найди кнопку и поменяй её текст на "Отправить".
//
//     Найди все img и выведи их src.
//
//     Найди элемент по атрибуту [data-id].
//
//     Проверь, существует ли элемент с классом .active.
//
// 🔹 innerHTML / textContent
//
// Замени содержимое div через innerHTML.
//
//     Установи текст внутри h1 через textContent.
//
//     Добавь внутрь div список <ul><li></li></ul> с помощью innerHTML.
//
//     Очисти содержимое элемента.
//
//     Сравни innerHTML и textContent (выведи оба в console).
//
// 🔹 createElement / append / appendChild
//
// Создай элемент p и добавь его в body.
//
//     Создай li и добавь его в существующий ul.
//
//     Создай кнопку и добавь ей текст "Click me".
//
//     Создай div, задай ему класс и добавь на страницу.
//
//     Добавь несколько элементов сразу через append.
//
// 🔹 Работа с массивами + DOM (map)
//
// Есть массив строк. Создай из него список (ul > li) через map.
//
//     Отобрази массив чисел в виде p элементов.
//
//     Создай карточки товаров из массива объектов (title, price).
//
//     Используя map, выведи имена пользователей в div.
//
//     Создай select и заполни его option из массива.
//
// 🔹 События + DOM
//
// При клике на кнопку меняй текст в h1.
//
//     По клику добавляй новый li в список.
//
//     При наведении меняй цвет блока.
//
//     При вводе в input выводи текст в span.
//
//     По клику удаляй элемент со страницы.