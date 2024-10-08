class Person{

    //Private Fields
    #name;
    #age;
    #occupation;
    #year;

    constructor(name, age, occupation, year){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#year = year;
    }

    //Getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }
    get year(){
        return this.#year;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Year: " + this.year);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}<br>
            <strong>Year:</strong> ${this.year}
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, year, major) {
        super(name, age, occupation, year);
        this.major = major;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Major: " + this.major);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.major}`;
    }
}

// Creating an instance of the Student class
const studentOne = new Student('Jane Justine', 19, 'Student', 'Second Year', 'Information Technology');

// Calling methods
studentOne.displayInfo();
