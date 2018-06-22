const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

class ContactList {
    constructor(filename) {
        this.list = [];
//        this.contacts = fs.writeFile("contacts.json");
        this.filename = filename;
    }
    add(contact) {
        if(contact instanceof Contact) {
            this.list.push(contact);
        }
        else 
            console.log("No contact found");
    }
    save() {
        if(this.filename) {
            writeFile(this.filename, JSON.stringify(this.list))
            .then(() => console.log("Contacts Save"))
            .catch(err => console.log(err));
        } else
            console.log("No filenmae supplied"); 
    }
};

module.exports = ContactList;