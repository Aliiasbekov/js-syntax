

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


const appendTodos = async() => {
    const todos = await getAllTodos()
    todos.forEach(el => {
        sectionListEl.innerHTML +=
        `
        <div class="list_item">
                <p class="list_item_title">${el.title}</p>
                <button data-id="${el.id}" class="list_item_btn">
                    <img src="./assets/trash.svg" alt="">
                </button>
            </div>
        `
    })
    const delBtns = document.querySelectorAll(".list_item_btn")
    delBtns.forEach(el => {
        el.addEventListener("click", async (event) => {
            const response = await deleteTodo(el.dataset.id)
            if(response === 200){
                el.parentNode.style.display = "none"
            }
            // appendTodos()
        })
    })
}
appendTodos()

const formEl = document.querySelector(".todo_form")
const formInputEl = document.querySelector(".todo_form_input")

formEl.addEventListener("submit", async (event) => {
    event.preventDefault()
    const res = await createTodo({
        title: formInputEl.value
    })
    if(res.id){
        appendTodos()
    }

})
