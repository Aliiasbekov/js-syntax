

const mockAPI = (str) => `https://6971c97a32c6bacb12c47b89.mockapi.io/api/v2/${str}`

const todos = {
    get: mockAPI("todos"),
    getById: (id) => mockAPI(`todos/${id}`),
    create: mockAPI("todos"),
    delete: (id) => mockAPI(`todos/${id}`),
    update: (id) => mockAPI(`todos/${id}`)
}

const getAllTodos = async() =>{
    try {
        const response = await axios(todos.get)
        return response.data
    }catch(e){
        console.log(e.message)
    }
}

const createTodo = async(data) => {
    try{
        const responsePost = await axios.post(todos.create, data)
        return responsePost.data
    }catch(e){
        console.log(e.message)
    }
}

const getById = async(id) => {
    try{
        const responseById = await axios(todos.getById(id))
        return responseById.data
    }catch(e){
        console.log(e.message)
    }
}


const deleteTodo = async(id) => {
    try{
        const responseDel = await axios.delete(todos.delete(id))
        return responseDel.status
    }catch(e){
        console.log(e.message)
    }
}


const updateTodo = async(id, data) => {
    try{
        const response = await axios.put(todos.update(id), data)
        return response.data
    }catch(e){
        console.log(e.message)
    }
}

const sectionListEl = document.querySelector(".section_list")
const retArr = ["Izat", "Kairat"]
const finRet = retArr.map(el =>{
    return `${el} hello`
})
console.log(finRet.join(" "))
"Izat  Kairat "


const appendTodos = async() => {
    const todos = await getAllTodos()
    const items = todos.map(el => {
        return `
            <div class="list_item">
                <p class="list_item_title">${el.title}</p>
                <div class="list_item_actions">
                    <button data-id="${el.id}" class="list_item_btn">
                        <img src="./assets/trash.svg" alt="">
                    </button>
                    <button data-id="${el.id}" class="list_item_edit">
                        <img src="./assets/pen.svg" alt="">
                    </button>
                </div>
            </div>
        `
    })
    sectionListEl.innerHTML = items.join(" ")

    const delBtns = document.querySelectorAll(".list_item_btn")
    delBtns.forEach(el => {
        el.addEventListener("click", async (event) => {
            const response = await deleteTodo(el.dataset.id)
            if(response === 200){
                el.parentNode.parentNode.style.display = "none"
            }
        })
    })



    const editBtns = document.querySelectorAll(".list_item_edit")
    editBtns.forEach(el => {
        el.addEventListener("click", async (event) => {
            const updateText = prompt("Text update")
            el.parentNode.parentNode.children[0].innerText = updateText
            await updateTodo(el.dataset.id, {
                title: updateText
            })
        })
    })
}
appendTodos()

const formEl = document.querySelector(".todo_form")
const formInputEl = document.querySelector(".todo_form_input")

formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    if(event.target.value === ""){
        alert("пустое значение")
    }
    const res = await createTodo({
        title: formInputEl.value,
    })
    formInputEl.value = ""

    if(res.id){
        appendTodos(this)
    }
})


