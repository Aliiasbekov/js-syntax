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

const getJsonByFetch = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos/1", {
        headers: {
            code: "POST"
        },
        body: JSON.stringify({
            login: "login",
            password: "pas"
        })
    })
    data.then(value => {
       return value.json()
    }).then((value) => {
        return value.title
    })
}

const credi =  JSON.stringify({
    login: "login",
    password: "pas"
})

const getJsonByAxios = () => {
    const data = axios.get("https://jsonplaceholder.typicode.com/todos/1", credi)
    data.then(value => {
        return value.data
    }).then((value) => {
        console.log(value.title)
    })
}

getJsonByAxios()
