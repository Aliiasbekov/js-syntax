import axios from "axios";

const createApi = (str) => `https://6971c97a32c6bacb12c47b89.mockapi.io/api/v2/${str}`

const ProkurorAPI = {
    get: createApi("prokurors"),
    getById:  (id) => createApi(`prokurors/${id}`),
    post: createApi("prokurors"),
    delete: (id) => createApi(`prokurors/${id}`),
    put: (id) => createApi(`prokurors/${id}`),
}


// const getProkurors = () => {
//     const promise = axios.get(ProkurorAPI.get)
//     promise.then(value => {
//         console.log(value.data)
//     })

// }
// const getProkurorById = (id) => {
//     const promise = axios.get(ProkurorAPI.getById(id))
//     promise.then(value => {
//         console.log(value.data)
//     })
// }

// const createProkuror = (data) => {
//     const promise = axios.post(ProkurorAPI.post,  data)
//     promise.then((value) => {
//         console.log(value.data)
//     })
// }

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
    const response = await axios.get(ProkurorAPI.get)
    return response.data
}

const getProkurorById = async (id) => {
    const response = await axios.get(ProkurorAPI.getById(id))
    return response.data
}

const createProkuror = async (data) => {
    const response = await axios.post(ProkurorAPI.post,  data)
    return response.data
}

const deleteProkuror = async (id) => {
    const response = await axios.delete(ProkurorAPI.delete(id))
    return response.data
}
const updateProkuror = async (id, data) => {
    const response = await axios.put(ProkurorAPI.put(id),data )
    return response.data
}

// const deleteAll = async () => {
//     const listOfProkurors = await getProkurors()
//     listOfProkurors.forEach(async (el) => {
//        const responseOfDelete = await deleteProkuror(el.id)
//         console.log(responseOfDelete)
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



const CarsAPI = {
    get: createApi("cars"),
    getById:  (id) => createApi(`cars/${id}`),
    post: createApi("cars"),
    delete: (id) => createApi(`cars/${id}`),
    update: (id) => createApi(`cars/${id}`),
}

const createCar = async (data) => {
    try{
        const response = await axios.post(CarsAPI.post,  data)
        return response
    }catch (e){
        console.log(e.status)
    }
}

const getAllCars = async () => {
    const response = await axios.get(CarsAPI.get)
    return response.data
}
// getAllCars()
const getCarById = async (id) =>{
    try{
        const response = await axios.get(CarsAPI.getById(id))
        return response.data
    }catch(e){
        console.log(e.status)
    }
}
// getCarById(1)

const updateCar = async (id, data) => {
    try{
        const response = await axios.put(CarsAPI.update(id), data)
        if(response.status === 200){
            console.log(`Updated ID: ${id}`)
        }
        return response.data
    }catch(e){
        console.log(e.status)
    }
}
// updateCar(1, {
//     color: "Blue"
// })
const deleteCar = async (id) => {
    try{
        const response = await axios.delete(CarsAPI.delete(id))
        if(response.status === 200){
            console.log(`DELETED ID: ${id}`)
        }
        return response.data
    }catch (e){
        console.log(e.message)
    }
}
// deleteCar(1)

const createCarsByCycle = async () => {
    for(let i = 0; i < 20; i++){
        try{
            const response = await createCar({
                brand: `brand ${i}`,
                model: `model ${i}`,
                year: i,
                color: `color ${i}`
            })
            if(response.status === 201){
                console.log(`Created id: ${response.data.id}`)
            }
            if(!response){
                break
            }
        }catch (e){
            console.log(e.status)
        }
    }
}
const deleteOdIdCars = async () => {
    const cars = await getAllCars()
    cars.forEach(async el => {
        if(Number(el.id) % 2 === 0){
            await updateCar(el.id, {
                brand: "Mersedes - Benz"
            })
        }
    })
}

const createEvenIdCars = async () => {
    await createCarsByCycle()
    await deleteOdIdCars()
}
createEvenIdCars()
