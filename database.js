const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

function addUser(userName, userAge) {
    var user = { name: userName, age: userAge };

    mongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) return console.log(err);

        const db = client.db('usersdb');
        const collection = db.collection('users');
        
        collection.insertOne(user, function (err, results) {
            if (err) return console.log(err);
            else console.log(`Added new user to db: ${results}`);
        });

        client.close();
    });
}

function logUsers() {
    mongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) return console.log(err);

        const db = client.db('usersdb');
        const collection = db.collection('users');
        
        collection.find().toArray(function (err, results) {
            console.log(users);
        });

        client.close();
    });
}

module.exports.addUser = addUser;
module.exports.logUsers = logUsers;