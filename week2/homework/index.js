const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

let jack = new Contact("Jack", 24);
let majid = new Contact("Majid", 34, 52501445);


console.log(jack);

jack.call();

let list = new ContactList("contacts.json");

list.add(jack);
list.add(new Contact("Sajid", 40, 3232323));
list.load();
list.save()

majid.birthday();

console.log(list);