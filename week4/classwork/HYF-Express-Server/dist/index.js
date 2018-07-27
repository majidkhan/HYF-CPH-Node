"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ContactList = require("./ContactList");

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const my_contact_list = new _ContactList.ContactList('./my_list.json');

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parse application/json
app.use(_bodyParser2.default.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/aboutme', function (req, res) {
    res.send('A guy working hard with JavaScript :-(');
});

// JSon Data  
app.get('/mydata', function (req, res) {
    res.send({ "Name": "Majid Khan" });
});

// Show all contacts
app.get('/contacts', (req, res) => {
    res.send(my_contact_list.list);
});

// Edit a contact
app.patch('/contacts/person', (req, res) => {
    res.send("Edit this person");
});

// Create a contact
app.post('/contacts', (req, res) => {
    const contact = new _ContactList.Contact(req.body);
    my_contact_list.addContact(contact).then(list => res.send(list));
});

// Delete a contact
app.delete('/contacts/remove/id', (req, res) => {
    res.send("Person Deleted");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map