//
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "User name required."], minlength: 3},
    email: { type: String, required: [true, "Email required."]},
    password: { type: String, required: [true, "Password required."], minlength: 8}
});

mongoose.model('User', UserSchema);


module.exports = mongoose.model('User');