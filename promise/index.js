import axios from "axios";

const parseData = {
    "name": "Izat",
    "age": 22,
    "gender": true,
    "work": {
        "job": "Frontend",
        "salary": null
    },
    "family": [
        {
            "name": "Kairat",
            "role": "daddy"
        },
        {
            "name": "Belek",
            "role": "mommy"
        }
    ]
}
const strigifiedData = JSON.stringify(parseData)

// console.log(strigifiedData)
//GET
//POST
//PUT
//DELETE



const getJsonByAxios = () => {
    const promise = axios.get("https://jsonplaceholder.typicode.com/todos/1")
    promise.then(value => {
        console.log(value.data)
    })
}
getJsonByAxios()
