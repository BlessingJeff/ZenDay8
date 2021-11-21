// Write a “person” class to hold all the details.
class person {
    constructor(firstname, lastname, DOB, gender, phone, state) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.DOB = DOB,
            this.gender = gender,
            this.phon = phone,
            this.state = state
    }
}
let details = new person("Cristiano", "Ronaldo", "11.11.2011", "Male", "9999988888", "Tamilnadu")
console.log(details)

//Write a class to calculate uber price.
class uber {
    constructor(name, pickupPoint, destination, distance, farePerKM) {
        this.name = name,
            this.pickupPoint = pickupPoint,
            this.destination = destination,
            this.distance = distance,
            this.farePerKM = farePerKM
    }
    fare() {
        return this.distance * this.farePerKM
    }
}
let details = new uber("Cristiano", "Chennai", "Tirunelveli", "600", "10")
console.log(details.fare())