import {Car as LocalCar, User} from "./classes" // named export/import
import BMWCar from "./bmw" //default export/import

const mers = new LocalCar("Mersedes", 2020, "black", "sedan", 10)

BMWCar.getHeatingSeat = function(){
    return this.salonTempeature * this.length
}
BMWCar.driverLicense = true


// console.log(bmw.drive(40))
// console.log(bmw.getHeatingSeat(), "temperature")
// console.log(mers.toString())
// console.log(mers.drive(25))
// console.log(bmw)

export const kairat = new User("Kairat", 2003, "kairat", "pass123")

kairat.login("kairat", "pass123")
console.log(kairat.history)
