
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
    sectionTitle.style.scale = 1.1
})
sectionTitle.addEventListener("mouseout", (event) => {
    sectionTitle.style.scale = 0.9
})























