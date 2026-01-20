import axios from "axios";

const createApi = (str) => `https://696fa95ca06046ce61877b70.mockapi.io/api/v1/${str}`

const ProkurorAPI = {
    get: createApi("prokurors"),
    getById:  (id) => createApi(`/prokurors/${id}`),
    post: createApi("prokurors"),
    delete: (id) => createApi(`/prokurors/${id}`),
    put: (id) => createApi(`/prokurors/${id}`),
}

//
// const getProkurors = () => {
//     const promise = axios.get(ProkurorAPI.get)
//     promise.then(value => {
//         console.log(value.data)
//     })
//
// }
// const getProkurorById = (id) => {
//     const promise = axios.get(ProkurorAPI.getById(id))
//     promise.then(value => {
//         console.log(value.data)
//     })
// }
//
// const createProkuror = (data) => {
//     const promise = axios.post(ProkurorAPI.post,  data)
//     promise.then((value) => {
//         console.log(value.data)
//     })
// }
//
// const deleteProkuror = (id) => {
//     const promise = axios.delete(ProkurorAPI.delete(id))
//     promise.then(value => {
//         console.log(value.data)
//     })
// }
// const updateProkuror = (id, data) => {
//     const promise = axios.put(ProkurorAPI.put(id),data )
//     promise.then((value) => {
//         console.log(value.data)
//     })
// }

const getProkurors = async () => {
    const result = await axios.get(ProkurorAPI.get)
    return result.data
}

const getProkurorById = async (id) => {
    const result = await axios.get(ProkurorAPI.getById(id))
    return result.data
}

const createProkuror = async (data) => {
    const result = await axios.post(ProkurorAPI.post,  data)
    return result.data
}

const deleteProkuror = async (id) => {
    const result = await axios.delete(ProkurorAPI.delete(id))
    return result.data
}
const updateProkuror = async (id, data) => {
    const result = await axios.put(ProkurorAPI.put(id),data )
    return result.data
}

// const deleteAll = async () => {
//     const listOfProkurors = await getProkurors()
//     listOfProkurors.forEach(async (el) => {
//        const resultOfDelete = await deleteProkuror(el.id)
//         console.log(resultOfDelete)
//     })
// }

// deleteAll()

// Получение всех записей
// getProkurors()

// Создание записи
// createProkuror({
//     name: 'Kairat',
//     surname: 'Aliiasbekov',
//     age: 23,
//     gender: true,
// })

// Редактирование записи
// updateProkuror(1, {
//     age: 11,
//     gender: "GAY"
// })

// Удаление записи
// deleteProkuror(1)