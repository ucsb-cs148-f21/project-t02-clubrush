const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    bookmark: [{
        name: {
            type: String,
            Required: false
        },
        image: {
            type: String,
            Required: false
        }
    }]
    
})

const User = mongoose.model('User', userSchema);

module.exports = User;