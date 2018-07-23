const express = require('express');
const bodyParser = require('body-parser');
const port = require('./server/config').port;
const router = require('./server/router');

const app = express();

app.use(express.static('client/view'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(port, () => console.log(`Server has been started on port ${port}`));