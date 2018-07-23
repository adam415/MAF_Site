const express = require('express');
const router = express.Router();

const viewRoot = './client/view';


router.get('/', (req, res) => res.sendFile('HomePage.html', { root: viewRoot }));

router.get('/form', (req, res) => res.sendFile('FormPage.html', { root: viewRoot }));

router.get('/table', (req, res) => res.sendFile('TablePage.html', { root: viewRoot }));

router.get('/about', (req, res) => res.sendFile('AboutPage.html', { root: viewRoot }));


router.post('/form', (req, res) => {
    console.log(`Got new query. Name: ${req.body.userName} Age: ${req.body.userAge}`);
    // database.addUser(req.body.userName, req.body.userAge);

    res.sendFile('FormPage.html', { root: viewRoot });
});


module.exports = router;