const validator = require('validator')
const { faker } = require('@faker-js/faker');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
let email = "shoobert@dylan"
console.log(validator.isEmail(email)) 

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
let phoneNumber = "786-329-9958"
console.log(validator.isMobilePhone(phoneNumber, 'en-US')) // should print true

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
let cleanedText = validator.blacklist(text, blacklist)
console.log(cleanedText.toLowerCase()) 

class Person {
    constructor(name, avatar, companyName) {
        this.name = name
        this.avatar = avatar
        this.companyName = companyName
    }

    static makeHuman(number) {
        let people = []
        for (let i = 0; i < number; i++) {
            let name = faker.person.firstName()
            let avatar = faker.image.avatar()
            let companyName = faker.company.name()
            let person = new Person(name, avatar, companyName)
            people.push(person)
        }
        return people
    }
}

let humans = Person.makeHuman(2)
humans.forEach(function(item) {
    console.log(item);
});