
export class Car {
    name = ""
    year = 2000
    color = "white"
    type = null
    litersFor100km = null
    length = null
    salonTempeature = 0
    constructor(name, year, color, type, litersFor100km) {
        this.name = name
        this.year = year
        this.color = color
        this.type = type
        this.litersFor100km = litersFor100km
        this.length = year * 100
    }
    drive(oil){
        this.salonTempeature+=10
        return `${oil * this.litersFor100km}km`
    }
    //override
    toString(){
        return `Name: ${this.name} Year: ${this.year} Color: ${this.color}`
    }
}

export class User {
    name = null;
    birthYear = null;
    loggedIn = false;
    username = null;
    password = null;
    history = []
    constructor(name, year, username, password) {
        this.name = name
        this.birthYear = name
        this.username = username
        this.password = password
    }
    login(login, password){
        if(login === this.username && password === this.password){
            this.loggedIn = true
            this.history.push(new Date())
            return "Logged in"
        }
    }
    logout(){
        this.loggedIn = false
    }

}


