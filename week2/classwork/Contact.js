class Contact {
    constructor(name, age, phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    };

    call() {
        if (this.phoneNumber) {
            console.log(`Calling ${this.name} at ${this.phoneNumber}`);
        } else {
            console.log(this.name + " has no phone number.");
        }
    }
};

module.exports = Contact;