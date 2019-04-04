// CODE here for your Lambda Classes
class Person {
    constructor(PersonAttributes) {
        this.name = PersonAttributes.name;
        this.age = PersonAttributes.age;
        this.location = PersonAttributes.location;
        this.gender = PersonAttributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


