
import express from "express";
import { Contact, ContactList } from "./ContactList";
const app = express()

const my_contact_list = new ContactList('./my_list.json');

import bodyParser from 'body-parser';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/aboutme', function (req, res) {
    res.send('A guy working hard with JavaScript :-(')
})

// JSon Data  
app.get('/mydata', function (req, res) {
    res.send({"Name": "Majid Khan"})
})

// Show all contacts
app.get('/contacts', (req, res) => {
    res.send(my_contact_list.list);
})

// Edit a contact
app.patch('/contacts/person', (req, res) => {
    res.send("Edit this person");
})

// Create a contact
app.post('/contacts', (req, res) => {
    const contact = new Contact(req.body);
    my_contact_list.addContact(contact)
        .then(list => res.send(list))
})

// Delete a contact
app.delete('/contacts/remove/id', (req, res) => {
    res.send("Person Deleted");
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})
