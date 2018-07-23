var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var userSchema = new Schema({
    name: String,
    age: Number
});

var User = mongoose.model("User", userSchema);

module.exports.User = User;