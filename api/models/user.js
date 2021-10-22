const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;