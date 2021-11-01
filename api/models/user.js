const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;