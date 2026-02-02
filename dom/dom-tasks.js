
const selectEl = document.querySelector(`.colorSelect`)
const sizeEl = document.querySelector(`.sizeSelect`)
const fwEl = document.querySelector(`.fwSelect`)
const containerByClassName = document.querySelector(`.container`)
const containerHero = document.querySelector(`.hero`)

const sectionTitle = document.createElement("h1")
sectionTitle.innerText = "Hello world!"

const appendOptionEl = (el, parentEl) => {
    const optionEl = document.createElement("option")
    optionEl.innerText = el
    optionEl.value = el
    parentEl.appendChild(optionEl)
}

const colors = ["red", "blue", "green", "hidden"]
const fontSizes = ["12px", "16px", "20px", "32px"]

for(let i = 100; i < 1000; i+=100){
    appendOptionEl(i, fwEl)
}



colors.forEach(el => appendOptionEl(el, selectEl))

fontSizes.forEach(el => appendOptionEl(el, sizeEl))

selectEl.addEventListener("change", (event)=>{
    if(event.target.value === "hidden") {
        sectionTitle.style.display = "none"
        return;
    }
    sectionTitle.style.display = "block"
    sectionTitle.style.color = event.target.value
})
sizeEl.addEventListener("change", (event)=>{
    sectionTitle.style.fontSize = event.target.value
})
fwEl.addEventListener("change", (event) => {
    sectionTitle.style.fontWeight = event.target.value
})


containerHero.appendChild(sectionTitle)


const taSelect = document.querySelector(".taSelect")
const textAligns = ["start", "center", "end"];
// textAligns.forEach((el) => {
//     const item = document.createElement("option")
//     item.innerText = el
//     taSelect.appendChild(item)
// })
textAligns.forEach(el => appendOptionEl(el, taSelect))

taSelect.addEventListener("change", (event) => {
    sectionTitle.style.textAlign = event.target.value
})

const textInput = document.querySelector(".textInput")
textInput.addEventListener("input", (event) => {
    if(event.target.value !== "fuck"){
        sectionTitle.innerText = event.target.value
    }else{
        const resPrompt = prompt("ban!!")
        sectionTitle.innerText = resPrompt
        textInput.value = resPrompt
    }
})


sectionTitle.style.backgroundColor = "red"
sectionTitle.style.transition = "300ms"
sectionTitle.addEventListener("mouseover", (event) => {
    sectionTitle.style.scale = 0.9
})
sectionTitle.addEventListener("mouseout", (event) => {
    sectionTitle.style.scale = 1
})



// 🔹 Select / getElement / querySelector
//
// Найди элемент по id и измени его текст.
const changeById = document.getElementById("titleIdh2")
changeById.addEventListener("click", (event) => {
    changeById.innerText = "Changed text"
})
//     Найди все элементы по class и выведи их количество в console.
const allEls = document.getElementsByClassName("hero")
// console.log(allEls.length)
//     Найди первый элемент h1 через querySelector.
const firstElOfParag = document.querySelector("h1")
// console.log(firstElOfParag)

//
// Найди .hero и выведи его в console.
const findByClassName = document.querySelector(".hero")
// Создай p элемент и добавь его внутрь .container.
const p = document.createElement("p")
p.innerText = `javascript`
containerByClassName.appendChild(p)

// Измени текст sectionTitle на "DOM is cool".
sectionTitle.innerText = "DOM is cool"
// Сделай фон sectionTitle зелёным.
sectionTitle.style.backgroundColor = "purple"
// Скрывай sectionTitle кнопкой.
// Покажи sectionTitle кнопкой.

const showBtn = document.getElementById("showBtn")

showBtn.addEventListener("click", (event) => {
    if(sectionTitle.style.display === "none"){
        sectionTitle.style.display = "block"
    }else{
        sectionTitle.style.display = "none"
    }
})
// Добавь ещё один цвет в colors.
colors.unshift("yellow")
appendOptionEl("yellow", selectEl)
// Добавь размер 40px в список размеров.
fontSizes.push("40px")
appendOptionEl("40px", sizeEl)
// Выведи в консоль выбранный цвет при изменении select.
selectEl.addEventListener("click", (event) => {
    // console.log(`Цвет изменён на ${event.target.value} color`)
})
// 🟡 СРЕДНИЙ УРОВЕНЬ
// При выборе "blue" добавляй рамку к заголовку.
selectEl.addEventListener("click", (event) => {
    if(sectionTitle.style.color === "blue"){
        sectionTitle.style.border = "solid"
    }else{
        sectionTitle.style.border = "none"
    }
})
// Если размер > 20px — делай текст жирным.
sizeEl.addEventListener("click", (event) => {
    if(sectionTitle.style.fontSize > "20px"){
        sectionTitle.style.fontWeight = "900"
    }else{
        sectionTitle.style.fontWeight = "none"
    }
})
// Сделай плавное появление при показе текста.

// Добавь кнопку "Сброс стилей".
const resetBtn = document.querySelector(".resetBtn")
resetBtn.addEventListener("click", (event) => {
    sectionTitle.style.color = "black";
    sectionTitle.style.fontWeight = "normal";
    sectionTitle.style.fontSize = "2em";
    sectionTitle.style.textAlign = "start";
    sectionTitle.style.display = "block";
    sectionTitle.style.backgroundColor = "white";
    sectionTitle.style.color = "black";

    selectEl.value = ""
    sizeEl.value = ""
    fwEl.value = ""
    taSelect.value = ""
    textInput.value = ""

    sectionTitle.innerText = "Заводские настройки"
})
// Сделай, чтобы при mouseover менялся цвет текста.
sectionTitle.addEventListener("mouseover", (event) => {
    sectionTitle.style.color = "red"
})
// Ограничь ввод в input до 20 символов.
textInput.addEventListener("input", (event) => {
    if(event.target.value < 10){
        textInput.value = event.target.value
    }
})
// Если input пустой — пиши "Введите текст".
textInput.placeholder = "Введите текст"

// Сделай счётчик введённых символов.
textInput.addEventListener("mouseover", (event) => {
    if(textInput.value){
        alert(`Использовано ${textInput.value.length} символов`)
    }
})
// При выборе "hidden" показывай alert.
selectEl.addEventListener("click", (event) => {
    if(event.target.value === "hidden"){
        alert("hey guys")
    }
})
// 🔵 ПРОДВИНУТЫЕ
//
// Сохраняй выбранные стили в localStorage.
//
// При перезагрузке страницы восстанавливай стили.
//
// Добавь кнопку "Случайный цвет".
//
// Добавь анимацию вращения заголовка.
//
// Двойной клик по заголовку — сброс текста.
//
// ПКМ по заголовку — меняет шрифт на monospace.
//
// Сделай перетаскивание заголовка мышкой.
//
// Добавь тень тексту через новый select.
//
// Создай второй заголовок с такими же настройками.
//
// Сделай тёмную/светлую тему страницы.