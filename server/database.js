const mongoose = require('mongoose');

const dbUrl = require('./config').dbUrl;
const User = require('./models/User');

mongoose.Promise = global.Promise;

var connected = false;

function connect() {
    if (connected) return;

    mongoose.connect(dbUrl, { useNewUrlParser: true }, err => {
        if (err) {
            connected = false;
            console.error(`Couldn't connect to db "${dbUrl}":\n${err}`);
            return handleError(err);
        }
        else {
            connected = true;
            console.log(`Connected to db "${dbUrl}"`);
        }
    });
}

function saveUser(name, age) {
    if (!connected) {
        console.error("Cannot save user data because database is not connected");
    }

    const user = new User({
        name: name,
        age: age
    });

    user.save(err => {
        if (err) {
            console.error(`Couldn't save user data:\n${err}`);
            return handleError(err);
        }
        else {
            // console.log("User data have been successfully saved to db");
        }
    });
}

function queryUsers(response) {
    if (!connected) {
        console.error("Cannot get user data because database is not connected");
        response.send([]);
    }

    User.find((err, docs) => {
        if (err) {
            console.error(`Couldn't get user data: ${err}`);
            response.send([]);
            return handleError(err);
        }
        else {
            // console.log("User data have been successfully obtained");
            response.send(docs);
        }
    });
}

module.exports = {
    connect: connect,
    saveUser: saveUser,
    queryUsers: queryUsers,
};