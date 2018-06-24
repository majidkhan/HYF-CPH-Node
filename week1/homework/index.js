class Person {
    constructor(name, age, phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    call() {
        if(this.phoneNumber) {
            console.log(`Calling ${this.name} at ${this.phoneNumber}`);
        } else {
            console.log(`${this.name} has no phone number saved`);
        }
    } 

    birthday() {
        if(this.age) {
            console.log(`Wishing ${this.name} a happy ${this.age}th birthday`);
        }
    }

    addPhone(number) {
        if(this.number) {
            this.phoneNumber = number;
        }
    }
};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
// should say "Jill has no phone number saved."