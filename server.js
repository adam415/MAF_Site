const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();

app.use(express.static('view'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/view/HomePage.html'));
});

app.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, '/view/FormPage.html'));
});

app.post('/form', function (req, res) {
    console.log('Got new query. Name: ', req.body.userName, ' Age: ', req.body.userAge);
    database.addUser(req.body.userName, req.body.userAge);

    res.sendFile(path.join(__dirname, '/view/FormPage.html'));
});

app.get('/table', function(req, res) {
    res.sendFile(path.join(__dirname, '/view/TablePage.html'));

    database.logUsers();
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/view/AboutPage.html'));
});

app.listen(3000);